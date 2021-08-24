import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainNavbar from './components/UI/navbar/MainNavbar';
import { AuthContext } from './context';
import AppRouter from './router/AppRouter';
import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <div className="App">
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth
      }}>
        <BrowserRouter>
          <MainNavbar />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
