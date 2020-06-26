import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-color: #333;
    --bg-color: #fff;
    --bg-layer-color: #f0f0f0;
    --border-color: #dadada;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: #ddd;
      --bg-color: #333;
      --bg-layer-color: #383838;
      --border-color: #565656;
    }
  }
  body {
    height: 100vh;
    padding: 0;
    margin: 0;
    font-family: system, -apple-system, ".SFNSDisplay-Regular", "Helvetica Neue", Helvetica, "Segoe UI", sans-serif;
    font-size: 13px;
    line-height: 1.2;
    word-break: break-all;
    color: var(--text-color);
    background-color: var(--bg-color);
    -webkit-app-region: drag;
  }
  #app {
    height: 100%;
  }
  a {
    color: #4ca3ec;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`
