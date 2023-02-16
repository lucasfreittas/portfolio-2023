import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './Pages/Home';

import { ThemeProvider } from 'styled-components';
import Global from './Styles/global';
import theme from './Styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global/>
        <Home />
    </ThemeProvider>
  </React.StrictMode>,
)
