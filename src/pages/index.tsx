import * as React from "react"
import * as ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { StoreProvider } from "../components/StoreProvider"
import { GlobalStyle } from "../components/GlobalStyle"

const mainElement = document.createElement("div")
document.body.appendChild(mainElement)

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <StoreProvider>
        <GlobalStyle />
        <div>index</div>
      </StoreProvider>
    </AppContainer>,
    mainElement
  )
}

render()
