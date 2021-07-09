import React from 'react'
import {
  Avatar,
  Column,
  Container,
  Info,
  LeftSide,
  RightSide,
  Username,
  WhiteCircle
} from './styles'

const ChannelItem: React.FC = () => {
  return (
    <Container>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>rocketseat_oficial</Username>
          <Info>36 new videos</Info>
        </Column>
      </LeftSide>
      <RightSide>
        <WhiteCircle />
      </RightSide>
    </Container>
  )
}

export default ChannelItem
