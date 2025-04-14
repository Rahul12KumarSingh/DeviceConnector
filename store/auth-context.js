import { createContext, useState } from "react";

export const  authContext = createContext({
  isAuthenticated : false ,
  user: null,
  token: null,
  authenticate : (user , token) => {},
  logout: () => {},
});


function AuthContextProvider({ children }) {
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const [user , setUser] = useState(null);
    const [token , setToken] = useState(null);
    
    function authenticate(user , token) {
        setIsAuthenticated(true);
        setToken(token);
        setUser(user);

        //save to the async storage...
        AsyncStorage.setItem("token", token);
        AsyncStorage.setItem("userData", JSON.stringify(user));
    }


    function logout(){
        setIsAuthenticated(false);
        setUser(null);
        setToken(null);

        //remove from the async storage...
        AsyncStorage.removeItem("userData");
        AsyncStorage.removeItem("token");
    }

    const value = {
        isAuthenticated ,
        user,
        token,
        authenticate,
        logout,
    }
      
    return (
        <authContext.Provider value={value}>
           {children}
        </authContext.Provider>
    )
}


export default AuthContextProvider ;








