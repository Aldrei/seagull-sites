import React, { MutableRefObject } from 'react'

import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from 'keen-slider/react'

import 'keen-slider/keen-slider.min.css'

import { Banner, Container, Image } from './styles'
import { ISlideCommon } from './types'

export const SlideCommon: React.FC<ISlideCommon> = ({ banners, ...props }) => {
  const [loaded, setLoaded] = React.useState([])
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    animationEnded(s) {
      setCurrentSlide(s.track.details.rel)
    },

    loop: true,
    initial: 0,
  })

  React.useEffect(() => {
    const new_loaded = [...loaded] as any
    new_loaded[currentSlide] = true

    setLoaded(new_loaded)
  }, [currentSlide])

  function ThumbnailPlugin(
    mainRef: MutableRefObject<KeenSliderInstance | null>,
  ): KeenSliderPlugin {
    return slider => {
      function removeActive() {
        slider.slides.forEach(slide => {
          slide.classList.remove('active')
        })
      }

      function addActive(idx: number) {
        slider.slides[idx].classList.add('active')
      }

      function addClickEvents() {
        slider.slides.forEach((slide, idx) => {
          slide.addEventListener('click', () => {
            if (mainRef.current) mainRef.current.moveToIdx(idx)
          })
        })
      }

      slider.on('created', () => {
        if (!mainRef.current) return

        addActive(slider.track.details.rel)
        addClickEvents()

        mainRef.current.on('animationStarted', main => {
          removeActive()
          const next = main.animator.targetIdx || 0
          addActive(main.track.absToRel(next))
          slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
        })
      })
    }
  }

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)],
  )

  // TODO: Return something friendly here...
  if (!banners?.length) return null

  return (
    <Container {...props}>
      <div ref={sliderRef} className="keen-slider banners">
        {banners.map((banner, i) => (
          <Banner
            key={i}
            className={`keen-slider__slide lazy__slide number-slide${i}`}
            style={{
              background: `url(${banner.normal})`,
            }}
          />
        ))}
      </div>
      <div ref={thumbnailRef} className="keen-slider thumbnail">
        {banners.map((banner, i) => (
          <div key={i} className={`keen-slider__slide number-slide${i}`}>
            <Image src={banner.normal} />
          </div>
        ))}
      </div>
    </Container>
  )
}
