import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
`

export default () => (
    <Wrapper>
      <h1>Luke Waring</h1>
      <br></br>
      <p>Software developer based in Carroll Gardens, Brooklyn</p>
      <p>I work primarily with React and related technologies, but I'm always learning and seek to use the right tool for the job at hand</p>
      <br></br>
      <p><a href="https://github.com/lukewaring" target="_blank" rel="noopener noreferrer">GitHub</a></p>
      <p><a href="https://linkedin.com/in/lukewaring" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      <p><a href="https://medium.com/@lukewaring" target="_blank" rel="noopener noreferrer">Medium</a></p>
      <p><a href="https://twitter.com/luke_waring" target="_blank" rel="noopener noreferrer">Twitter</a></p>
      <br></br>
    </Wrapper>
)
