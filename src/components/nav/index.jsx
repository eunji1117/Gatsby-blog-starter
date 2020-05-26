import React from 'react'
import { Item } from './item'
import './index.scss'

export const Nav = () => {
    const navCategories = ['STACK', 'EXPERIENCE', 'WORK'];

    return (
        <nav>
            <ul className="gnb category-container">
                {navCategories.map((item, idx) => (
                    <Item
                    key={idx}
                    title={item}
                    />
                ))}
            </ul>
        </nav>
    )
}