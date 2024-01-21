import React from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from './ThemeSlice'

function Content() {
    const {color} = useSelector(themeSelector)

    return (
        <div>
            <h1 style={{color: color}}>test</h1>
        </div>
    )
}

export default Content
