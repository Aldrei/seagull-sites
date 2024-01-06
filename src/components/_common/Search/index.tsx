import React, { useEffect, useState } from 'react'

import { listPropertiesByCodeLocal } from '@/services'
import { IProperty } from '@/types/property'
import { Card, CardContent, CardDescription, CardImage, CardTitle, Container, DetailsButton, ListContainer, SearchInput } from './styles'
import { ISearchCommon } from './types'

export const SearchCommon: React.FC<ISearchCommon> = ({
  ...props
}): React.ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<any>()
  const [property, setProperty] = useState<IProperty | null>()

  useEffect(() => {
    handleSearch()
  }, [searchValue])

  const handleSearch = async () => {
    /**
     * TODO: Make the timeout here to avoid overflow requests.
    */
    if (searchValue) {
      setLoading(true)
      const response = await listPropertiesByCodeLocal(searchValue)
      setLoading(false)

      if (response?.data?.property) setProperty(response.data.property)
      else setProperty(null);
    } else {
      setProperty(null)
    }
  }

  const renderPropertyItem = () => {
    if (loading) 
      return (
        <ListContainer>
          <p>Loading...</p>
        </ListContainer>
      )

    if (property)
      return (
        <ListContainer>
          <Card>
            <CardImage src={property?.photo?.data.thumb} alt={property?.nomeImovel} />
            <CardContent>
              <CardTitle>({property.codePretty}) - {property?.nomeImovel}</CardTitle>
              <CardDescription>{property?.descGeral}</CardDescription>
              <DetailsButton>Mais detalhes</DetailsButton>
            </CardContent>
          </Card>
        </ListContainer>
      );

    if (!property && searchValue) 
      return (
        <ListContainer>
          <p>"{searchValue}" não está publicado no site.</p>
        </ListContainer>
      )

    return null
  };

  console.log('DEBUG property:', property);
  

  return (
    <Container {...props}>
      <SearchInput 
        placeholder="Ex: AP080" 
        onChange={(input) => setSearchValue(input.currentTarget.value)} 
        value={searchValue}
      />
      {renderPropertyItem()}
    </Container>
  )
}
