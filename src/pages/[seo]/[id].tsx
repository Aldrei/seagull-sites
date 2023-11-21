
/**
 * /tipo-dorminio-cidade-status/id
 * 
 * Ex: /casa-alvenaria-2-dorm-campo-bom-comprar/{id}
*/

import { useRouter } from 'next/router'

interface IProps {
  data: any
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://imobmobile.com.br/api/pub/sgimoveis.imb.br/banners`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}

export default function Property({ data }: IProps) {
  console.log('DEBUG data:', data);

  const router = useRouter()

  const seo = router.query.seo
  console.log('DEBUG seo:', seo);
  

  return <p>Property: {router.query.id}</p>
}