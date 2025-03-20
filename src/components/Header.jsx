import React from 'react'
import { list } from '@/config/menuList'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            <div className="container">
                <div className="header__navbar">
                    <h4 className="header__logo">
                        React
                    </h4>
                    <ul className="header__list">
                        { 
                            list.map((link) => (
                                <li className="header__list-item" key={link.id}>
                                    <Link to={link.path} className="header__list-link">{link.name}</Link>
                                </li>
                            )) 
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}
