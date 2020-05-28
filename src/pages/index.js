import React from "react"
import { Helmet } from "react-helmet"

export default () => (
    <div>
        <Helmet htmlAttributes={{lang: "en"}} >
            <title>Luke Waring</title>
            <meta name="description" content="Personal website of Luke Waring, a software developer based in Brooklyn, NY" />
            <meta name="author" content="Luke Waring" />
        </Helmet>
        <h1>Luke Waring</h1>
        <p>Software developer based in Brooklyn</p>
        <p>I work primarily with React and related technologies, but I'm always learning and seek to use the right tool for the job at hand.</p>
        <div><b><a href="https://github.com/lukewaring" target="_blank" rel="noopener noreferrer">GitHub</a></b></div>
        <div><b><a href="https://linkedin.com/in/lukewaring" target="_blank" rel="noopener noreferrer">LinkedIn</a></b></div>
        <div><b><a href="https://medium.com/@lukewaring" target="_blank" rel="noopener noreferrer">Medium</a></b></div>
        <div><b><a href="https://twitter.com/luke_waring" target="_blank" rel="noopener noreferrer">Twitter</a></b></div>
    </div>
)
