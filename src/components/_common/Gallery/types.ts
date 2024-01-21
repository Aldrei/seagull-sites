import { IPhoto } from '@/types/property'

export interface IGalleryCommon extends React.HTMLAttributes<HTMLDivElement> {
  photos?: IPhoto[]
}
