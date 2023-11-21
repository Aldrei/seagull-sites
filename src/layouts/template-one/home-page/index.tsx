import { Header } from '@components/template-one/Header'

interface IProps {
  children: React.ReactElement
}

export const HomePage = ({ children }: IProps) => {
  return <Header title="TEMPLATE-ONE">{children}</Header>
}
