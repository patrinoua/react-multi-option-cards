import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const OptionsContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  > input:checked + label {
    border: 2px solid #54c6c5;
    background: #f8f8f8;
  }
`

export const Regular = styled.div`
  color: #999999;
  font-size: 1.1em;
  font-weight: 200;
  padding: 20px 0 18px;
  font-family: sans-serif;
`
