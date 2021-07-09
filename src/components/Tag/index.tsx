import React from 'react'

import { Container, TagText } from './styles'

const Tag: React.FC = ({ children }) => {
  return (
    <Container>
      <TagText>{children}</TagText>
    </Container>
  )
}

export default Tag
