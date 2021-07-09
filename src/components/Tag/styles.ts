import styled from 'styled-components/native'
import colors from '../../styles/colors'

export const Container = styled.View`
  background: ${colors.tag};
  padding: 2px 8px;
  margin-right: 5px;
  border-radius: 10px;
`

export const TagText = styled.Text`
  color: ${colors.black};
  font-family: roboto_500;
  font-size: 13px;
`
