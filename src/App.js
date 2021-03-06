import React, { useEffect } from 'react';
import './App.css';
import Telegram from './components/Telegram';
import { login, selectUser, logout } from './features/userSlice';
import {useDispatch ,useSelector} from "react-redux";
import Login from "./components/Login";
import {auth} from "./firebase";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch((
          login({
            uid: authUser.uid,
            phot: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        ))
      }else{
        dispatch(logout());
      }
    });
  }, [dispatch])

  return (
    <div className="app">
      {user ? <Telegram /> : <Login />}
    </div>
  );
}

export default App;
