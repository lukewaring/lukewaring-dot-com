import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
`

const Header = styled.h1`
  color: rgb(65, 199, 199);
  text-align: center;
`

export default () => (
    <Wrapper>
      <Header>Luke Waring</Header>
    </Wrapper>
)
