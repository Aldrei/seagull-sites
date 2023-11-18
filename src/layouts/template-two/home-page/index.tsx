import { Header } from '@components/template-two/Header'

interface IProps {
  children: React.ReactElement
}

export const HomePage = ({ children }: IProps) => {
  return <Header title="TEMPLATE-TWO">{children}</Header>
}
