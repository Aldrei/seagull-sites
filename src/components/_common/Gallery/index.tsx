import React from 'react'

/**
 * React Photo Gallery http://neptunian.github.io/react-photo-gallery/examples/basic-rows.html
*/
import Gallery from "react-photo-gallery";
import { IGalleryProps } from './types';

export const GalleryCommon: React.FC<IGalleryProps> = ({ photos, ...props }): React.ReactElement | null => {
  if (!photos) return null

  return (
    <Gallery photos={photos} {...props} />
  )
}
