//Types
export type AuthReducerACTypes =  ReturnType<typeof SomeAuthAC>
export type AuthStateType = {
    isLoggedIn: boolean
}


let initialState: AuthStateType = {
    isLoggedIn: false
}

export const authReducer = (state:AuthStateType  = initialState, action: AuthReducerACTypes) => {
    switch (action.type) {

        default:
            return state
    }
}

//ActionCreators
export const SomeAuthAC = () => {
    return {type: 'SOME-TYPE'}
}

//ThunkCreators

