import React from 'react'
import UiInput from './UI/input/UiInput'

export default function Search({ query, setQuery }) {
    return (
        <div className="search">
            <UiInput 
                type="text" 
                value={query} 
                placeholder="Search by author..." 
                onChange={e => setQuery(e.target.value)}
                autoComplete="off" 
            />
        </div>
    )
}
