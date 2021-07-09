import React from 'react'
import { View } from 'react-native'

import {
  Container,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info
} from './styles'

import data from '../CategoryList/data'

interface Props {
  item: typeof data[0]
}

const CategoryItem: React.FC<Props> = ({ item }) => {
  return (
    <Container>
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <RedCircle />
        <Info>51.9k</Info>
      </CategoryStatus>
    </Container>
  )
}

export default CategoryItem
