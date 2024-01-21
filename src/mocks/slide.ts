import { IBanner } from '@/components/_common/Slide/types'
import { propertyMock } from './property'

export const mockedBanners: IBanner[] = [
  {
    thumb: `${process.env.NEXT_PUBLIC_CDN_URL}\/photos\/thumb\/76958fb55c0e0abd61348a93924054f2.jpeg`,
    normal: `${process.env.NEXT_PUBLIC_CDN_URL}\/photos\/normal\/76958fb55c0e0abd61348a93924054f2.jpeg`,
    titulo: '',
    descGeral: '',
    id: 1,
    property_id: 11,
    img: '',
    posicao: 0,
    property: {
      data: propertyMock
    }
  },
  {
    thumb: `${process.env.NEXT_PUBLIC_CDN_URL}\/photos\/thumb\/871ad47b0e23e874e212f374f0e7bc78.jpeg`,
    normal: `${process.env.NEXT_PUBLIC_CDN_URL}\/photos\/normal\/871ad47b0e23e874e212f374f0e7bc78.jpeg`,
    titulo: '',
    descGeral: '',
    id: 2,
    property_id: 12,
    img: '',
    posicao: 0,
    property: {
      data: propertyMock
    }
  },
  {
    thumb: `${process.env.NEXT_PUBLIC_CDN_URL}\/photos\/thumb\/2caa36b4fba7074b39514c8bfa05602e.jpeg`,
    normal: `${process.env.NEXT_PUBLIC_CDN_URL}\/photos\/normal\/2caa36b4fba7074b39514c8bfa05602e.jpeg`,
    titulo: '',
    descGeral: '',
    id: 3,
    property_id: 13,
    img: '',
    posicao: 0,
    property: {
      data: propertyMock
    }
  },
]
