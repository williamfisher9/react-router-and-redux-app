import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Content from './Content'
import Text from './Text'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route index element={<Content />} />
        <Route path='text' element={<Text />} />
    </Route>
))

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export default Router
