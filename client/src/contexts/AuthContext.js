import { createContext, useReducer } from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
    user: {
        _id: "60c41de459a6986f7deaee08",
        username: "jane",
        email: "889@gmail.com",
        profilePicture: "/person/1.jpeg",
        coverPicture: "",
        isAdmin: false,
        followers: [],
        followings: [1, 2],
    },
    isFetching: false,
    error: false,

}

export const AuthContext = createContext(INITIAL_STATE)

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}