import React, { useState } from 'react'

import { SelectCommon } from '@/components/_common'

import { IOption } from '@/components/_common/Select/types'
import { ButtonOne } from '@/components/template-one/Button'
import { IFilterOptions, IFilterSelected } from '@/types/filter'
import { useRouter } from 'next/router'
import { Column, FormWrapper, Row } from './styled'

export const FilterAdvanced: React.FC<IFilterOptions> = ({ filterOptions: filterOptionsParams }): React.ReactElement => {
  console.log('DEBUG -> filterOptionsParams:', filterOptionsParams);

  const router = useRouter();

  /**
   * Initial Options
  */
  const [filterSelected, setFilterSelected] = useState<IFilterSelected>();

  const initialStates = filterOptionsParams?.statesOptions?.data || []
  const { 
    types: initialTypes, 
    bedrooms: initialBedrooms, 
    garages: initialGarages 
  } = filterOptionsParams?.generalOptions?.data?.options || {}

  const states = initialStates.length ? initialStates.map((item: any) => ({ value: item.id, label: item.abbr })) : [];
  const types = initialTypes?.length ? initialTypes.map((item: any) => ({ value: item.tipo, label: item.tipo })) : [];
  const bedrooms = initialBedrooms.length ? initialBedrooms.map((item: any) => ({ value: item.dormitorio, label: item.dormitorio })) : [];
  const garages = initialGarages?.length ? initialGarages.map((item: any) => ({ value: item.garagem, label: item.garagem })) : [];

  const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
    states: states,
    cities: [] as IOption[],
    neighborhoods: [] as IOption[],
    bedrooms: bedrooms,
    garages: garages,
    types: types,
    prices: [
      { value: '0-300000', label: 'até R$300.000,00' },
      { value: '300000-1000000', label: 'dê R$300.000,00 até R$1.000.000,00' },
      { value: '1000000-1900000', label: 'dê R$1.000.000,00 até R$1.900.000,00' },
      { value: '1900000-2500000', label: 'dê R$1.900.000,00 até R$2.500.000,00' },
      { value: '2500000-1000000000', label: 'acima de R$2.500.000,00' },
    ]
  } as IFilterOptions);

  /**
   * Changing Options
  */
  const handleChangeType = (newValue: any) => {
    setFilterSelected({
      ...filterSelected, 
      types: newValue
    } as IFilterSelected);
  }

  const handleChangeBedroom = (newValue: any) => {
    setFilterSelected({
      ...filterSelected, 
      bedrooms: newValue
    } as IFilterSelected);
  }

  const handleChangeGarage = (newValue: any) => {
    setFilterSelected({
      ...filterSelected, 
      garages: newValue
    } as IFilterSelected);
  }

  const handleChangePrice = (newValue: any) => {
    setFilterSelected({
      ...filterSelected, 
      price: newValue
    } as IFilterSelected);
  }

  console.log('DEBUG -> filterOptions:', filterOptions);
  console.log('DEBUG -> filterSelected:', filterSelected);

  /**
   * Submit.
  */
  const handleSubmit = () => {
    try {
      const mockedUrl = '/c?states%5B%5D=43&states%5B%5D=42&cities%5B%5D=5300112&cities%5B%5D=5300112&cities%5B%5D=5300113&neighborhoods%5B%5D=190&neighborhoods%5B%5D=191&types%5B%5D=Apartamento&types%5B%5D=Apartamento+Cobertura&bedrooms%5B%5D=1&bedrooms%5B%5D=3&garages%5B%5D=2&garages%5B%5D=4&priceMin=300000&priceMax=1000000&orderBy=created_at%40DESC%5B%5D=5300112&neighborhoods%5B%5D=190&types%5B%5D=Apartamento&bedrooms%5B%5D=1&garages%5B%5D=2&priceMin=300000&priceMax=1000000';

      router.push(mockedUrl);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <FormWrapper>
      <Row>
        <SelectCommon
          name='type'
          label="Tipo(opcional)"
          onChange={handleChangeType}
          value={filterSelected?.types}
          options={filterOptions?.types}
          isMulti
        />
      </Row>
      <Row>
        <Column>
          <SelectCommon 
            name='bedroom'
            label="Dormitório(opcional)" 
            onChange={handleChangeBedroom}
            value={filterSelected?.bedrooms}
            options={filterOptions?.bedrooms}
            isMulti 
          />
        </Column>
        <Column>
          <SelectCommon 
            name='garage' 
            label="Garagem(opcional)" 
            onChange={handleChangeGarage}
            value={filterSelected?.garages}
            options={filterOptions?.garages} 
            isMulti />
        </Column>
      </Row>
      {/*<Row>
        <SelectCommon name='state' onChange={handleChangeState} value={filterSelected?.state} options={states.map((item: any) => ({ value: item.id, label: item.abbr }))} label="Estado(opcional)" isMulti />
      </Row>
      <Row>
        <SelectCommon name='city' options={[]} label="Cidades(opcional)" isMulti />
      </Row>
      <Row>
        <SelectCommon name='neighborhood' options={[]} label="Bairro(opcional)" isMulti />
      </Row> */}
      <Row>
        <SelectCommon 
          name='price'
          label="Faixa de preço"
          onChange={handleChangePrice}
          options={filterOptions?.prices}
          value={filterSelected?.price} 
        />
      </Row>
      <Row>
        <ButtonOne text="Filtrar" handleClick={handleSubmit} />
      </Row>
    </FormWrapper>
  )
}
