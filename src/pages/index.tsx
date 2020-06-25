import * as React from "react"
import * as ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"

const mainElement = document.createElement("div")
document.body.appendChild(mainElement)

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <div>index</div>
    </AppContainer>,
    mainElement
  )
}

render()
