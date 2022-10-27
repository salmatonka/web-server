import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';

   const auth =getAuth(app)
   
   export  const AuthContext = createContext()

   const UserContext = ({children}) => {

    const provider = new GoogleAuthProvider();
     
    const [user,setUser] =useState({})
    const [loader,setLoader] =useState(true)

   const createUser= (email,password)=>{
     setLoader(true)
     return createUserWithEmailAndPassword(auth,email,password)

  }

   const updateName = (name) =>{
    setLoader(true)

    return updateProfile(auth.currentUser,{displayName:name})
   }

    const verifyEmail =()=>{
      setLoader(true)

        return sendEmailVerification(auth.currentUser)
    }

     const signInGoogle = () =>{
      setLoader(true)

        return signInWithPopup(auth,provider)
     }

     const logout = ()=>{
      setLoader(true)

         return signOut(auth)
     }

      const signIn =(email,password)=>{
      setLoader(true)
        
        return signInWithEmailAndPassword(auth,email,password)
      }

     const resetPassword =(email)=>{
      setLoader(true)

        return sendPasswordResetEmail(auth,email)
         
     }

     
      useEffect (()=>{

        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
         setUser(currentUser)
         setLoader(false)
        })
         
        return () =>{
            unsubscribe()
            
        }
      },[])

      const authInfo ={user,
        createUser,
        updateName,
      verifyEmail,
      signInGoogle,
      logout,
      signIn,
      resetPassword,
      loader
    }

    return <AuthContext.Provider value={authInfo}> 
       {children}

    </AuthContext.Provider>
};

export default UserContext;