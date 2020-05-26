import React from 'react'
import { useState, useEffect } from 'react'

export const Item = ({ title }) => {

  return (
    <li className="item">
      <div>
        <a className="link" href={'#'+title}>
          {title}
        </a>
      </div>
    </li>
  )
}
