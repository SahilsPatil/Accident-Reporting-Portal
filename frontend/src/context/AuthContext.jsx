// import React, { createContext, useState, useContext, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [userAllData, setUserAllData] = useState(null);
    
//     const decodeJWT = (token) => {
//         const base64Url = token.split('.')[1];
//         const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
//         const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) =>
//             '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
//         ).join(''));

//         return JSON.parse(jsonPayload);
//     };

//     const login = (userData, token, userAllData) => {
//         localStorage.setItem('jwtToken', token); // Save token to localStorage
//         setUser(userData); // Set user data
//         setUserAllData(userAllData)        
//     };

//     const logout = () => {
//         localStorage.removeItem('jwtToken'); // Clear token
//         setUser(null);
//     };

//     const checkTokenExpiry = () => {
//         const token = localStorage.getItem('jwtToken');
//         if (token) {
//             const decoded = decodeJWT(token);
//             const now = Date.now() / 1000;
//             if (decoded.exp < now) {
//                 logout();
//                 alert('Session expired. Please log in again.');
//             }
//         }
//     };

//     useEffect(() => {
//         checkTokenExpiry(); // Initial check on load
//         const token = localStorage.getItem('jwtToken');
//         if (token) {
//             const decoded = decodeJWT(token);
//             const userData = decoded; // Assuming you store user data in the token payload
//             setUser(userData); // Set user data from the token
//         }
        
//         const interval = setInterval(checkTokenExpiry, 5 * 60 * 1000); // Check every 5 minutes

//         return () => clearInterval(interval); // Cleanup on unmount
//     }, []);


//     return (
//         <AuthContext.Provider value={{ user, login, logout,userAllData }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userAllData, setUserAllData] = useState(null);

    const decodeJWT = (token) => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map((c) =>
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        ).join(''));

        return JSON.parse(jsonPayload);
    };

    const login = (userData, token, allUserData) => {
        localStorage.setItem('jwtToken', token); // Save token to localStorage
        setUser(userData); // Set user data
        setUserAllData(allUserData); // Set full user data
    };

    const logout = () => {
        localStorage.removeItem('jwtToken'); // Clear token
        setUser(null);
        setUserAllData(null); // Reset user data
    };

    const checkTokenExpiry = () => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const decoded = decodeJWT(token);
            const now = Date.now() / 1000;
            if (decoded.exp < now) {
                logout();
                alert('Session expired. Please log in again.');
            }
        }
    };

    useEffect(() => {
        checkTokenExpiry(); // Initial check on load
        const token = localStorage.getItem('jwtToken');
        if (token) {
            const decoded = decodeJWT(token);
            const userData = decoded; // Assuming you store user data in the token payload
            setUser(userData); // Set user data from the token
            setUserAllData(userData); // Set full user data (if needed)
        }
        
        const interval = setInterval(checkTokenExpiry, 5 * 60 * 1000); // Check every 5 minutes

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, userAllData }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
