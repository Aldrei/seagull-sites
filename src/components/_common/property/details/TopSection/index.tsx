import { buildTextSeo } from '@/utils'
import {
  Container,
  Description,
  DescriptionContainer,
  Title,
  TitleContainer,
} from './styles'
import { ITopSectionCommon } from './types'

export const TopSectionCommon: React.FC<ITopSectionCommon> = ({ property }) => {
  return (
    <Container>
      <TitleContainer>
        <Title>
          {buildTextSeo({ property, normalize: false, separatorChar: ', ' })}
        </Title>
      </TitleContainer>
      <DescriptionContainer>
        <Description>{property.descGeral}</Description>
      </DescriptionContainer>
    </Container>
  )
}
