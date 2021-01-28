import React from 'react';
import { TOKEN_POST } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);


  async function userLogin(email, password) {
    const { url, options } = TOKEN_POST({ email, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem('token', token);
    setData(token);
    setLogin(true);
  }

  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  );
};