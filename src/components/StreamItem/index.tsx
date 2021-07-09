import React from 'react'
import streamThumbnail from '../../images/stream_thumbnail.jpg'
import Tag from '../Tag'

import {
  Container,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow
} from './styles'

const StreamItem: React.FC = () => {
  return (
    <Container>
      <StreamThumbnail source={streamThumbnail} />
      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>Mr Rapi</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            App mobile com React Native e Styled Component
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Science & Technology
          </StreamCategory>
        </StreamColumn>
        <TagRow>
          <Tag>Portuguese</Tag>
          <Tag>Mobile Development</Tag>
        </TagRow>
      </StreamRow>
    </Container>
  )
}

export default StreamItem
