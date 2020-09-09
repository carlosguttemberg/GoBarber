import React from 'react';

import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
