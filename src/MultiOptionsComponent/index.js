import React from 'react'
import { Container, Regular, OptionsContainer } from './elements.js'
import Option from '../Option'
export default class MultiOptionsComponent extends React.Component {
  state = {
    selectedOptions: []
  }
  checkedOptions = e => {
    if (e.target.checked) {
      this.setState({
        selectedOptions: [...this.state.selectedOptions, e.target.id]
      })
    } else {
      this.setState({
        selectedOptions: this.state.selectedOptions.filter(
          value => value !== e.target.id
        )
      })
    }
  }
  render() {
    return (
      <Container>
        <Regular>Select one or more options:</Regular>
        <OptionsContainer>
          <Option icon={'musicIcon'} checkedOptions={this.checkedOptions}>
            Play Music
          </Option>
          <Option icon={'lightIcon'} checkedOptions={this.checkedOptions}>
            Do a Performance
          </Option>
          <Option icon={'eyeIcon'} checkedOptions={this.checkedOptions}>
            Paint/Design Something
          </Option>
          <Option icon={'heartIcon'} checkedOptions={this.checkedOptions}>
            Do Something Else
          </Option>
        </OptionsContainer>
      </Container>
    )
  }
}
