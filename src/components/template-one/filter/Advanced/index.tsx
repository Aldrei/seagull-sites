import React from 'react'

import { SelectCommon } from '@/components/_common'

import { IFilterOptions } from '@/types/filter'
import { useRouter } from 'next/router'
import { ButtonOne } from '../../Button'
import { Column, FormWrapper, Row } from './styled'

export const FilterAdvanced: React.FC<IFilterOptions> = ({ filterOptions }): React.ReactElement => {
  const router = useRouter();

  console.log('DEBUG filterOptions:', filterOptions);
  
  const handleSubmit = () => {
    try {
      const mockedUrl = '/c?states%5B%5D=43&states%5B%5D=42&cities%5B%5D=5300112&cities%5B%5D=5300112&cities%5B%5D=5300113&neighborhoods%5B%5D=190&neighborhoods%5B%5D=191&types%5B%5D=Apartamento&types%5B%5D=Apartamento+Cobertura&bedrooms%5B%5D=1&bedrooms%5B%5D=3&garages%5B%5D=2&garages%5B%5D=4&priceMin=300000&priceMax=1000000&orderBy=created_at%40DESC%5B%5D=5300112&neighborhoods%5B%5D=190&types%5B%5D=Apartamento&bedrooms%5B%5D=1&garages%5B%5D=2&priceMin=300000&priceMax=1000000';

      router.push(mockedUrl);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Options
  */
  const states = filterOptions?.statesOptions?.data || [];
  const bedrooms = filterOptions?.generalOptions?.data?.options?.bedrooms || [];
  const garages = filterOptions?.generalOptions?.data?.options?.garages || [];
  const types = filterOptions?.generalOptions?.data?.options?.types || [];

  const rangePrice = [
    { value: '0-300000', label: 'até R$300.000,00' },
    { value: '300000-1000000', label: 'dê R$300.000,00 até R$1.000.000,00' },
    { value: '1000000-1900000', label: 'dê R$1.000.000,00 até R$1.900.000,00' },
    { value: '1900000-2500000', label: 'dê R$1.900.000,00 até R$2.500.000,00' },
    { value: '2500000-1000000000', label: 'acima de R$2.500.000,00' },
  ]

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <FormWrapper>
      <Row>
        <SelectCommon options={types.map((item: any) => ({ value: item.tipo, label: item.tipo }))} label="Tipo(opcional)" />
      </Row>
      <Row>
        <Column>
          <SelectCommon options={bedrooms.map((item: any) => ({ value: item.dormitorio, label: item.dormitorio }))} label="Dormitório(opcional)" />
        </Column>
        <Column>
          <SelectCommon options={garages.map((item: any) => ({ value: item.garagem, label: item.garagem }))} label="Garagem(opcional)" />
        </Column>
      </Row>
      <Row>
        <SelectCommon options={states.map((item: any) => ({ value: item.id, label: item.abbr }))} label="Estado(opcional)" />
      </Row>
      <Row>
        <SelectCommon options={options} label="Cidades(opcional)" />
      </Row>
      <Row>
        <SelectCommon options={options} label="Bairro(opcional)" />
      </Row>
      <Row>
        <SelectCommon options={rangePrice} label="Faixa de preço" />
      </Row>
      <Row>
        <ButtonOne text="Filtrar" handleClick={handleSubmit} />
      </Row>
    </FormWrapper>
  )
}
