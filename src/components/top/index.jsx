import React from 'react'
import { Link } from 'gatsby'
import { Nav } from '../nav'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ nav, title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {/* {!isRoot && ( */}
      <div>
        <Link to={`/`} className="link">
          {title}
        </Link>
        <div  className="gnb-wrap">
          <Nav />
        </div>
      </div>
      <div  className="contact">
        <GitHubIcon />
        <div className="contact__mail" />
      </div>
    </div>
  )
}
