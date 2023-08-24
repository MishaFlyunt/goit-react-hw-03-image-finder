import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import 'sanitize.css';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

p:last-child {
  margin-bottom: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  color: currentColor;
  text-decoration: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;

export const Container = styled.div`
  /* width: 1100px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgb(112, 144, 321); */
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
`;
