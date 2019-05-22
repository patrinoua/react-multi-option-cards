import React from 'react'
import { Container, Regular, OptionsContainer } from './elements.js'
import Option from '../Option'
export default class MultiOptionsComponent extends React.Component {
  render() {
    return (
      <Container>
        <Regular>Select one or more options:</Regular>
        <OptionsContainer>
          <Option icon={'musicIcon'}>Play Music</Option>
          <Option icon={'lightIcon'}>Do a Performance</Option>
          <Option icon={'eyeIcon'}>Paint/Design Something</Option>
          <Option icon={'heartIcon'}>Do Something Else</Option>
        </OptionsContainer>
      </Container>
    )
  }
}
