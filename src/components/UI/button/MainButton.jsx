import React from 'react'
import btnStyle from './MainButton.module.css'

export default function MainButton({children, ...props}) {
    const btnColor = {
        backgroundColor: '#00bc6c'
    }
    if(props?.theme === 'red') {
        btnColor.backgroundColor = '#f53b30'
    }
    return (
        <button 
            className={btnStyle.mainButton} 
            {...props} 
            style={btnColor}
        >
            {children}
        </button>
    )
}