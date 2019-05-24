import React from 'react'
import { Container, Description, Icon, Input } from './elements.js'

export default class Option extends React.Component {
  render() {
    const { icon, children, checkedOptions } = this.props
    return (
      <React.Fragment>
        <Input type="checkbox" id={icon} onClick={e => checkedOptions(e)} />
        <Container htmlFor={icon} name={icon} id={icon}>
          <Icon src={`/assets/${icon}.png`} alt="musicIcon" />
          <Description>{children}</Description>
        </Container>
      </React.Fragment>
    )
  }
}
