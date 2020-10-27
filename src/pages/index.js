import React from 'react'
import { Helmet } from 'react-helmet'

export default () => (
  <div>
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>Luke Waring</title>
      <meta name='description' content='Personal website of Luke Waring, a software engineer based in Brooklyn, NY' />
      <meta name='author' content='Luke Waring' />
      <meta name='title' property='og:title' content='Luke Waring' />
      <meta name='type' property='og:type' content='website' />
      <meta name='image' property='og:image' content='https://pbs.twimg.com/profile_images/1039214074838507520/Y_7zGRWT_400x400.jpg' />
      <meta name='url' property='og:url' content='https://www.lukewaring.com/' />
      <meta property='og:description' content='Personal website of Luke Waring, a software engineer based in Brooklyn, NY' />
    </Helmet>
    <h1>Luke Waring</h1>
    <h2>Software engineer based in Brooklyn, New York</h2>
    <p>I work primarily with JavaScript, React and Ruby on Rails, but I am always learning and seek to use the right tool for the job at hand.</p>
    <p>I love building user-friendly software that solves real problems.</p>
    <div><b><a href='https://github.com/lukewaring' target='_blank' rel='noopener noreferrer'>GitHub</a></b></div>
    <div><b><a href='https://medium.com/@lukewaring' target='_blank' rel='noopener noreferrer'>Medium</a></b></div>
    <div><b><a href='https://linkedin.com/in/lukewaring' target='_blank' rel='noopener noreferrer'>LinkedIn</a></b></div>
    <div><b><a href='https://twitter.com/luke_waring' target='_blank' rel='noopener noreferrer'>Twitter</a></b></div>
    <div><b><a href='https://www.notion.so/waring/49a3a012aff946bbacc0bed6d46df098?v=57524a1c9aad4b26a2381eacd6127392' target='_blank' rel='noopener noreferrer'>Reading List</a></b></div>
  </div>
)
