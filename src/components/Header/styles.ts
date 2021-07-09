import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  padding-right: 14px;
`

export const Avatar = styled.TouchableOpacity`
  background: ${colors.tag};
  height: 32px;
  width: 32px;
  border-radius: 16px;
  border: 2px solid ${colors.primary};
`

export const OnlineStatus = styled.View`
  background: ${colors.green};
  height: 10px;
  width: 10px;
  border-radius: 5px;
  border: 2px solid ${colors.primary};
  position: absolute;
  bottom: 0;
  right: 0;
`
export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`
