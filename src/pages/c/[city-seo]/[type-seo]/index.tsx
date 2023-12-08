import { PropertiesPage } from "@/layouts"
import { useRouter } from "next/router";

interface IProps {
  data?: any
}

export async function getServerSideProps() {
  return { props: {} }
}

export default function Page({ data }: IProps) {
  console.log('DEBUG data:', data);
  
  const route = useRouter()

  const city = route.query['city-seo']
  console.log('DEBUG city:', city);

  const type = route.query['type-seo']
  console.log('DEBUG type:', type);
  
  return null
}
