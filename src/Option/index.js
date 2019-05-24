import React from 'react'
import { Container, Description, Icon, Input } from './elements.js'

export default class Option extends React.Component {
  render() {
    const { icon } = this.props
    return (
      <React.Fragment>
        <Input type="checkbox" id={icon} />
        <Container for={icon} name={icon} id={icon}>
          <Icon src={`/assets/${icon}.png`} alt="musicIcon" />
          <Description> {this.props.children}</Description>
        </Container>
      </React.Fragment>
    )
  }
}
