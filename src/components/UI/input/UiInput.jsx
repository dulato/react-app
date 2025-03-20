import React from 'react'
import inputClasses from './UiInput.module.css'

export default function UiInput(props) {
    return (
        <div className={inputClasses.uiInput}>
            <input {...props} className={inputClasses.inputField} />
        </div>
    )
}
