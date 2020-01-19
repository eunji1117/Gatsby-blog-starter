import React from 'react'

import { Top } from '../components/top'
import { Nav } from '../components/nav'
import { Header } from '../components/header'
import { ThemeSwitch } from '../components/theme-switch'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'

import './index.scss'

export const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`

  return (
    <React.Fragment>
      <div className="top-wrap">
        <Top title={title} location={location} rootPath={rootPath} nav={Nav} />
        <Nav />
      </div>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {/* <ThemeSwitch /> */}
        {/* <Header title={title} location={location} rootPath={rootPath} /> */}
        {children}
        <Footer />
      </div>
    </React.Fragment>
  )
}
