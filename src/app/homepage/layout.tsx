'use client'
import { store } from "@/store/store"
import { Container } from "@mui/material"
import { Provider } from "react-redux"

interface LayoutProps {
  children: React.ReactElement
}

export default function Layout({children}: LayoutProps):React.JSX.Element{
  return(
    <Provider store = {store}>
    <Container maxWidth='xl' sx={{px:'0px !important'}}>
      {children}
    </Container>
    </Provider>
  )
}
