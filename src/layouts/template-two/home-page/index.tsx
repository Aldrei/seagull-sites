import Header from '@components/_common/Header'

interface IProps {
  children: React.ReactElement
}

export const HomePage = ({ children }: IProps) => {
  return <Header title="TEMPLATE-TWO">{children}</Header>
}
