import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Index from './pages/Index/Index';
import Job from './pages/Job/Job';
import Profile from './pages/Profile/Profile';
import EditJob from './pages/EditJob/EditJob';


function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <ThemeProvider theme={theme}>
          <Route  path="/" exact component={Index}/>
          <Route  path="/profiles" component={Profile} />
          <Route  path="/add-jobs" component={Job} />
          <Route  path="/edit-jobs/:id" component={EditJob} />
          <GlobalStyle />
        </ThemeProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
