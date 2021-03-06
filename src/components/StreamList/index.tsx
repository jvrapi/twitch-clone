import React from 'react'
import { View } from 'react-native'

import StreamItem from '../StreamItem'

import { List } from './styles'

const StreamList: React.FC = () => {
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  )
}

export default StreamList
