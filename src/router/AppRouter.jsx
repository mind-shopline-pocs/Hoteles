import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { StoreRoutes } from '../tienda/router/StoreRoutes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={ <StoreRoutes/>} />
        </Routes>
    </>
  )
}
