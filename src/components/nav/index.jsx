import React from 'react'

import './index.scss'

export const Nav = () => {
    return (
        <nav>
            <ul className="gnb category-container">
                <li className="item">
                    <div>
                        STACK
                    </div>
                </li>
                <li className="item">
                    <div>
                        EXPERIENCE
                    </div>
                </li>
                <li className="item">
                    <div>
                        PROJECT - SPC Dining
                    </div>
                </li>
                <li className="item">
                    <div>
                        PROJECT - Facebook SPA
                    </div>
                </li>
            </ul>
        </nav>
    )
}