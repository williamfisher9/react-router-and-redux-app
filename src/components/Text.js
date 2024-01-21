import React from 'react'
import { useSelector } from 'react-redux'
import { themeSelector } from './ThemeSlice'

function Text() {
    const {color} = useSelector(themeSelector)

    return (
            <p>color is {color}</p>
    )
}

export default Text
