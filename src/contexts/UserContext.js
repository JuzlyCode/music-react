import React, { createContext, useEffect, useState } from 'react';
import request from 'utils/request';

export const UserContext = createContext()

const GetDataUser = () => {
    const [currentUser, setCurrentUser] = useState();
    useEffect(()=>{
        request({
            url: '/userData'
        }).then(res=>{
            if(!res.data){
                localStorage.removeItem("token");
                setCurrentUser();
                return;
            }
            setCurrentUser(res.data)
        }).catch(e=>{
            localStorage.removeItem("token");
            setCurrentUser();
        })
    },[])

    return {currentUser, setCurrentUser};
}

export const UserProvider = ({children}) =>{
    return (
        <UserContext.Provider value={{...GetDataUser()}}>
         {children}
        </UserContext.Provider>
    )
}

export const useCurrentUser = () => React.useContext(UserContext)
