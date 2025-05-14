import * as React from 'react'
import { Link } from 'gatsby'

const HomePage  = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>My First Gatsby Site!</h1>
      <p>I'm making this by following the Gatsby Tutorial</p>
      <Link to='/about'>
        About Page
      </Link>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default HomePage