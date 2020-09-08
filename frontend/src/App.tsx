import React from 'react';

import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';
import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
