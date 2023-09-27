import { useEffect } from "react";
import React from 'react'
import { Route, Navigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { Checkbox } from "flowbite-react";
import Checkout from './Checkout'
 
  const ProtectedRoute = ({ component: Component, ...rest }) => {
    useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyDacCMh0IFhFZmDs8uTseuLwMcXs7RZDV8",
      authDomain: "urpr-e74ab.firebaseapp.com",
      projectId: "urpr-e74ab",
      storageBucket: "urpr-e74ab.appspot.com",
      messagingSenderId: "683963509393",
      appId: "1:683963509393:web:df5fc02c58dc08f99ead30",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
   
  }, []); const user = app.auth().currentUser;
   return (
    <Route
         {...rest}
         render={() =>
           user ? <Checkout/> : <Navigate to="/login" />
         }
       />
  )
}
 

export default ProtectedRoute
