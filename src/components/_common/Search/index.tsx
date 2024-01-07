import React, { useEffect, useState } from 'react'

import { listPropertiesByCodeLocal } from '@/services'
import { ITimer } from '@/types/others'
import { IProperty } from '@/types/property'
import { Card, CardContent, CardDescription, CardImage, CardTitle, Container, DetailsButton, ListContainer, SearchInput } from './styles'
import { ISearchCommon } from './types'

const timer: ITimer = {
  timeoutID: 0,
  delay: 1500
}

export const SearchCommon: React.FC<ISearchCommon> = ({
  ...props
}): React.ReactElement => {
  const [loading, setLoading] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<any>()
  const [property, setProperty] = useState<IProperty | null>()
  const [message, setMessage] = useState<string | null>()

  useEffect(() => {
    handleSearch()
  }, [searchValue])

  const handleSearch = async () => {
    setLoading(true)
    setProperty(null)
    setMessage(null)

    if (searchValue) {
      if (timer.timeoutID) clearTimeout(timer.timeoutID)

      timer.timeoutID = setTimeout(async () => {
        const response = await listPropertiesByCodeLocal(searchValue)
        setLoading(false)

        if (response?.data?.property) setProperty(response.data.property)
        else setMessage(response?.status)
      }, timer.delay)
    } else {
      setLoading(false)
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

    if (message) 
      return (
        <ListContainer>
          <p>{message}</p>
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
