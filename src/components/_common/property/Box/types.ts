export interface IProperty {
  code: string;
  price: string;
  title: string;
  location: string;
  description: string;
  area: string;
  cars: number;
  bedrooms: number;
  imageUrl: string;
}

export interface IBoxCommonProps {
  property: IProperty
}