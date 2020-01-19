import React from 'react'
import { rhythm } from '../../utils/typography'

import './index.scss'

export const Nav = ({rhythm}) => {
    return (
        <nav>
            <ul className="nav category-container">
                <li className="item">
                    <div>
                        Skill
                    </div>
                </li>
                <li className="item">
                    <div>
                        Experience
                    </div>
                </li>
                <li className="item">
                    <div>
                        Project
                    </div>
                </li>
            </ul>
        </nav>
    )
}