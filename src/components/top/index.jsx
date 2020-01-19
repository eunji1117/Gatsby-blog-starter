import React from 'react'
import { Link } from 'gatsby'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ nav, title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {/* {!isRoot && ( */}
      <Link to={`/`} className="link">
        {title}
      </Link>
      <div  className="contact">
        <GitHubIcon />
        <div className="contact__mail" />
      </div>
    </div>
  )
}
