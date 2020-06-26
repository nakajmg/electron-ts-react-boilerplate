import React from "react"
import ReactDom from "react-dom"
import styled from "styled-components"
import { StoreProvider } from "../components/StoreProvider"
import { GlobalStyle } from "../components/GlobalStyle"

const Component: React.FC<PropsForStyled> = ({ className, children }) => {
  return (
    <div className={className}>
      <header className={`${className}__header`}>
        <div className={`${className}__header_title`}>Preference</div>
      </header>
      <section className={`${className}__main`}>{children}</section>
    </div>
  )
}

const StyledComponent = styled(Component)`
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__header {
    top: 0;
    -webkit-app-region: drag;
    -webkit-user-select: none;
    min-height: 24px;
    color: var(--text-color);
    background-color: var(--bg-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__header_title {
    text-align: center;
  }

  &__main {
    max-height: calc(100vh - 76px);
    /*overflow-y: scroll;*/
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`

const mainElement = document.createElement("div")
document.body.appendChild(mainElement)

ReactDom.render(
  <StoreProvider>
    <GlobalStyle />
    <StyledComponent>
      <div>preference</div>
    </StyledComponent>
  </StoreProvider>,
  mainElement
)
