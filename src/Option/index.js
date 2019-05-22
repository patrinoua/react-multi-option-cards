import React from 'react'
import { Container, Description, IconContainer } from './elements.js'

export default class Option extends React.Component {
  render() {
    return (
      <Container
        onClick={() => {
          console.log('woop')
        }}
      >
        <IconContainer>{this.props.icon}</IconContainer>
        <Description> {this.props.children}</Description>
      </Container>
    )
  }
}
