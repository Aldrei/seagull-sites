import { IProperty } from '@/components/_common/property/Box/types'
import { PropertiesPage } from '@/layouts'
import { useRouter } from 'next/router'

interface IProps {
  data?: any
}

export async function getServerSideProps() {
  const data: IProperty[] = [
    {
      code: 'AP001',
      price: 'R$ 2.100.000',
      title: 'Tower Flat 1',
      location: 'Dublin',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      area: '121m',
      cars: 2,
      bedrooms: 3,
      imageUrl: 'https://imobmobile.com.br/photos/thumb/871ad47b0e23e874e212f374f0e7bc78.jpeg',
    },{
      code: 'AP002',
      price: 'R$ 2.200.000',
      title: 'Tower Flat 2',
      location: 'Dublin',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      area: '122m',
      cars: 2,
      bedrooms: 3,
      imageUrl: 'https://imobmobile.com.br/photos/thumb/871ad47b0e23e874e212f374f0e7bc78.jpeg',
    },{
      code: 'AP003',
      price: 'R$ 2.300.000',
      title: 'Tower Flat 3',
      location: 'Dublin',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      area: '123m',
      cars: 2,
      bedrooms: 3,
      imageUrl: 'https://imobmobile.com.br/photos/thumb/871ad47b0e23e874e212f374f0e7bc78.jpeg',
    },{
      code: 'AP004',
      price: 'R$ 2.400.000',
      title: 'Tower Flat 4',
      location: 'Dublin',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      area: '124m',
      cars: 2,
      bedrooms: 3,
      imageUrl: 'https://imobmobile.com.br/photos/thumb/871ad47b0e23e874e212f374f0e7bc78.jpeg',
    }
  ]

  return { props: { data } }
}

export default function Page({ data }: IProps) {
  console.log('DEBUG data:', data);
  
  const route = useRouter()

  const city = route.query['city-seo']
  console.log('DEBUG city:', city);

  return <PropertiesPage properties={data} />
}
