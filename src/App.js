import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Index from './pages/Index/Index';
import Job from './pages/Job/Job';
import Profile from './pages/Profile/Profile';
// import EditJob from './pages/EditJob/EditJob';
// import Modal from './components/ModalDelete/ModalDelete';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route exact path="/" component={Index}/>
          <Route exact path="/profiles" component={Profile} />
          <Route exact path="/add-jobs" component={Job} />
          <GlobalStyle />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
