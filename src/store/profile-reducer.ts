//Types
export type ProfileReducerACTypes =  ReturnType<typeof SomeProfileAC>
export type ProfileStateType = {
    name: string
}


let initialState: ProfileStateType = {
    name: 'some user'
}

export const profileReducer = (state:ProfileStateType  = initialState, action: ProfileReducerACTypes) => {
    switch (action.type) {

        default:
            return state
    }
}

//ActionCreators
export const SomeProfileAC = () => {
    return {type: 'SOME-TYPE'}
}
//ThunkCreators

