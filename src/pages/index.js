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
  font-family: IBM Plex Mono, monospace;
  text-align: center;
`

const Paragraph = styled.p`
  color: rgb(224, 228, 228);
  font-family: IBM Plex Mono, monospace;
  text-align: center;
`

export default () => (
    <Wrapper>
      <Header>Luke Waring</Header>
      <br></br>
      <Paragraph>Software developer based in Carroll Gardens, Brooklyn</Paragraph>
      <br></br>
      <Paragraph><a href="https://github.com/lukewaring" target="_blank" rel="noopener noreferrer">GitHub</a></Paragraph>
      <Paragraph><a href="https://www.linkedin.com/in/lukewaring" target="_blank" rel="noopener noreferrer">LinkedIn</a></Paragraph>
      <Paragraph><a href="https://medium.com/@lukewaring" target="_blank" rel="noopener noreferrer">Medium</a></Paragraph>
      <Paragraph><a href="https://twitter.com/luke_waring" target="_blank" rel="noopener noreferrer">Twitter</a></Paragraph>
      <br></br>
      <Paragraph>Built with <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> and deployed with <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a></Paragraph>
      <Paragraph>Design based on the 2019 <a href="https://2019.stateofjs.com" target="_blank" rel="noopener noreferrer">State of JavaScript</a> survey</Paragraph>
    </Wrapper>
)
