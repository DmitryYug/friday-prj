import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import thunk, { ThunkAction } from 'redux-thunk'
import {authReducer, AuthReducerACTypes} from "./auth-reducer";
import {profileReducer, ProfileReducerACTypes} from "./profile-reducer";

//Types
export type AllActionsType =
    | AuthReducerACTypes
    | ProfileReducerACTypes;
export type  AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AllActionsType>


const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer
})

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const store: Store<AppRootStateType, AnyAction> & { dispatch: any } = createStore(rootReducer, applyMiddleware(thunk));

