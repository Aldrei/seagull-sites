import { HomePage } from '@layouts/index'

interface IProps {
  children: React.ReactElement
}

export default function Home({ children }: IProps) {
  return <HomePage>{children}</HomePage>
}
