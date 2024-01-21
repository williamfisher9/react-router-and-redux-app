import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { switchColor, themeSelector } from './ThemeSlice'

function Header() {
    const dispatch = useDispatch()
    const {color} = useSelector(themeSelector)

    return (
        <>
            <Button onClick={() => dispatch(switchColor())}>Switch {color}</Button>
        </>
    )
}

export default Header
