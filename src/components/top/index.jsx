import React from 'react'
import { useState } from 'react'
import { Link } from 'gatsby'
import { Nav } from '../nav'
import { GitHubIcon } from '../social-share/github-icon'

import './index.scss'

export const Top = ({ title, location, rootPath }) => {

  const isRoot = location.pathname === rootPath;

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
        <a className="contact__mail" href="mailto:eunjichoi1117@gmai.com"></a>
      </div>
    </div>
  )
}
