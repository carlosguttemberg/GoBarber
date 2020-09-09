import React from 'react';

import SignIn from './pages/SingIn';
import SignUp from './pages/SingUp';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/AuthContext';
import ToastContainer from './components/ToastContainer';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
