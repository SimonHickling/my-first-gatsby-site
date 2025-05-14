import * as React from 'react'
import {Link} from 'gatsby'

const About = () => {
    return (
        <main>
            <title>About Me</title>
            <h1>About Me</h1>
            <p>Here is some information about me and my new site</p>
             <Link to='/'>
                    Home Page
            </Link>
        </main>
    )
}

export const Head = () => <title>About Me</title>

export default About