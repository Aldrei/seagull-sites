import React, { useEffect, useState } from 'react'

import { ButtonOne, SelectOne } from '@/components/template-one'
import { listCitiesLocal, listNeighborhoodLocal } from '@/services'
import { IFilterOptions, IFilterSelected } from '@/types/filter'
import { buildFilterOptions, buildGroupedOptionsFromSelectedOptionsByApi, buildObjArrToGroupedSelect, buildOptionsFromSelectedOptionsByApi } from '@/utils'
import { useRouter } from 'next/router'
import { Column, FormWrapper, Row, formatGroupLabel } from './styled'
import { IFilterAdvancedOne } from './types'

export const FilterAdvanced: React.FC<IFilterAdvancedOne> = ({
  filterOptionsInitial,
}): React.ReactElement => {
  console.log('DEBUG -> filterOptionsInitial:', filterOptionsInitial)

  const router = useRouter()

  /**
   * Initial Options
   */
  const {
    states: initialStates,
    cities: initialCities,
    neighborhoods: initialNeighborhoods,
    types: initialTypes,
    bedrooms: initialBedrooms,
    garages: initialGarages,
  } = filterOptionsInitial?.options || {}

  const states = initialStates?.length
    ? initialStates.map((item: any) => ({ value: item.id, label: item.abbr }))
    : []
    // *Grouped options, doesn't have length flag
  const cities = initialCities
    ? buildObjArrToGroupedSelect(initialCities, 'name', 'id')
    : []
  // *Grouped options, doesn't have length flag
  const neighborhoods = initialNeighborhoods
    ? buildObjArrToGroupedSelect(initialNeighborhoods, 'name', 'id')
    : []
  const types = initialTypes?.length
    ? initialTypes.map((item: any) => ({ value: item.tipo, label: item.tipo }))
    : []
  const bedrooms = initialBedrooms?.length
    ? initialBedrooms.map((item: any) => ({
        value: item.dormitorio,
        label: item.dormitorio,
      }))
    : []
  const garages = initialGarages?.length
    ? initialGarages.map((item: any) => ({
        value: item.garagem,
        label: item.garagem,
      }))
    : []
  const price = [
    { value: '0-300000', label: 'até R$300.000,00' },
    { value: '300000-1000000', label: 'dê R$300.000,00 até R$1.000.000,00' },
    {
      value: '1000000-1900000',
      label: 'dê R$1.000.000,00 até R$1.900.000,00',
    },
    {
      value: '1900000-2500000',
      label: 'dê R$1.900.000,00 até R$2.500.000,00',
    },
    { value: '2500000-1000000000', label: 'acima de R$2.500.000,00' },
  ]

  const [filterOptions, setFilterOptions] = useState<IFilterOptions>({
    states: states,
    cities: cities,
    neighborhoods: neighborhoods,
    bedrooms: bedrooms,
    garages: garages,
    types: types,
    prices: price,
  } as IFilterOptions)

  /**
   * Initial Selected Options
   */
  const {
    states: selectedStates,
    cities: selectedCities,
    neighborhoods: selectedNeighborhoods,
    types: selectedTypes,
    bedrooms: selectedBedrooms,
    garages: selectedGarages,
    priceMin: selectedPriceMin,
    priceMax: selectedPriceMax,
  } = filterOptionsInitial?.selectedOptions || {}

  const [filterSelected, setFilterSelected] = useState<IFilterSelected>({
    types: buildOptionsFromSelectedOptionsByApi(types, selectedTypes as any[]),
    bedrooms: buildOptionsFromSelectedOptionsByApi(bedrooms, selectedBedrooms as any[]),
    garages: buildOptionsFromSelectedOptionsByApi(garages, selectedGarages as any[]),
    states: buildOptionsFromSelectedOptionsByApi(states, selectedStates as any[]),
    cities: buildGroupedOptionsFromSelectedOptionsByApi(cities, selectedCities as any[]),
    neighborhoods: buildGroupedOptionsFromSelectedOptionsByApi(neighborhoods, selectedNeighborhoods as any[]),
    price: price.find((item) => item.value === `${selectedPriceMin}-${selectedPriceMax}`)
  } as IFilterSelected)

  /**
   * Changing Options
   */
  // Dynamic fields
  useEffect(() => {
    const handleListCities = async () => {
      const response = await listCitiesLocal(filterSelected)

      setFilterOptions({
        ...filterOptions,
        cities: buildObjArrToGroupedSelect(response?.cities?.data, 'name', 'id'),
        neighborhoods: [],
      })
    }

    if (filterSelected?.states?.length) handleListCities()
    else setFilterOptions({ ...filterOptions, cities: [], neighborhoods: [] })
  }, [filterSelected?.states])

  useEffect(() => {
    const handleChange = async () => {
      const response = await listNeighborhoodLocal(filterSelected)
      setFilterOptions({ ...filterOptions, neighborhoods: buildObjArrToGroupedSelect(response?.neighborhoods?.data, 'name', 'id') })
    }

    if (filterSelected?.cities?.length) handleChange()
    else setFilterOptions({ ...filterOptions, neighborhoods: [] })
  }, [filterSelected?.cities])

  const handleChangeState = (newValue: any) => {
    setFilterSelected({
      ...filterSelected,
      states: newValue,
      cities: [],
      neighborhoods: [],
    } as unknown as IFilterSelected)
  }

  const handleChangeCity = (newValue: any) => {
    setFilterSelected({
      ...filterSelected,
      cities: newValue,
      neighborhoods: [],
    } as unknown as IFilterSelected)
  }

  const handleChangeNeighborhood = (newValue: any) => {
    setFilterSelected({
      ...filterSelected,
      neighborhoods: newValue,
    } as unknown as IFilterSelected)
  }

  // Statics fields
  const handleChangeType = (newValue: any) => {
    setFilterSelected({
      ...filterSelected,
      types: newValue,
    } as IFilterSelected)
  }

  const handleChangeBedroom = (newValue: any) => {
    setFilterSelected({
      ...filterSelected,
      bedrooms: newValue,
    } as IFilterSelected)
  }

  const handleChangeGarage = (newValue: any) => {
    setFilterSelected({
      ...filterSelected,
      garages: newValue,
    } as IFilterSelected)
  }

  const handleChangePrice = (newValue: any) => {
    setFilterSelected({
      ...filterSelected,
      price: newValue,
    } as IFilterSelected)
  }

  /**
   * Submit.
   */
  const handleSubmit = () => {
    try {
      const buildedUrl = buildFilterOptions(filterSelected as IFilterSelected)
      router.push(`/c${buildedUrl ? `?${buildedUrl}` : ''}`)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <FormWrapper>
      <Row>
        <SelectOne
          name="type"
          label="Tipo(opcional)"
          onChange={handleChangeType}
          value={filterSelected?.types}
          options={filterOptions?.types}
          isMulti
        />
      </Row>
      <Row>
        <Column>
          <SelectOne
            name="bedroom"
            label="Dormitório(opcional)"
            onChange={handleChangeBedroom}
            value={filterSelected?.bedrooms}
            options={filterOptions?.bedrooms}
            isMulti
          />
        </Column>
        <Column>
          <SelectOne
            name="garage"
            label="Garagem(opcional)"
            onChange={handleChangeGarage}
            value={filterSelected?.garages}
            options={filterOptions?.garages}
            isMulti
          />
        </Column>
      </Row>
      <Row>
        <SelectOne
          name="state"
          label="Estado(opcional)"
          onChange={handleChangeState}
          value={filterSelected?.states}
          options={filterOptions?.states}
          isMulti
        />
      </Row>
      <Row>
        <SelectOne
          name="city"
          label="Cidades(opcional)"
          onChange={handleChangeCity}
          options={filterOptions?.cities}
          value={filterSelected?.cities}
          isMulti
          formatGroupLabel={formatGroupLabel}
          isDisabled={!filterSelected?.states?.length}
        />
      </Row>
      <Row>
        <SelectOne
          name="neighborhood"
          label="Bairro(opcional)"
          onChange={handleChangeNeighborhood}
          options={filterOptions?.neighborhoods}
          value={filterSelected?.neighborhoods}
          isMulti
          formatGroupLabel={formatGroupLabel}
          isDisabled={!filterSelected?.cities?.length}
        />
      </Row>
      <Row>
        <SelectOne
          name="price"
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
