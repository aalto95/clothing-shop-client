const ON_LOGIN_CHANGE = 'ON-LOGIN-CHANGE'
const ON_PASSWORD_CHANGE = 'ON-PASSWORD-CHANGE'
const ON_FORM_SUBMIT = 'ON-FORM-SUBMIT'
const LOGOUT = 'LOGOUT'

let initialState = {
    login: null as string | null,
    password: null as string | null,
    isLogged: false as boolean,
    isAdmin: false as boolean
}

export type InitialStateType = typeof initialState

const loginReducer = (state = initialState, action : any) : InitialStateType => {
    switch(action.type) {
        case ON_LOGIN_CHANGE:
            return {
                ...state,
                login: action.login
            }
        case ON_PASSWORD_CHANGE:
            return {
                ...state,
                password: action.password
            }
        case ON_FORM_SUBMIT:
            if (state.login === 'admin' && state.password === 'admin') {
                console.log('you are logged in as admin')
                return {
                    ...state,
                    isLogged: true,
                    isAdmin: true,
                    login: null,
                    password: null
                }
            }
            else if (state.login === 'user' && state.password === 'user') {
                console.log('you are logged in as user')
                return {
                    ...state,
                    isLogged: true,
                    isAdmin: false,
                    login: null,
                    password: null
                }
            }
            return {
                ...state
            }
        case LOGOUT:
            return {
                ...state,
                isLogged: false,
                isAdmin: false
            }
        default:
            return state
    }
}

type OnLoginChangeActionType = {
    type: typeof ON_LOGIN_CHANGE
    login: string
}

type OnPasswordChangeActionType = {
    type: typeof ON_PASSWORD_CHANGE
    password: string
}

type OnFormSubmitActionType = {
    type: typeof ON_FORM_SUBMIT
    e: any
}

type LogoutActionType = {
    type: typeof LOGOUT
}

export let onLoginChange = (e : any) : OnLoginChangeActionType => ({type: ON_LOGIN_CHANGE, login: e.target.value})
export let onPasswordChange = (e : any) : OnPasswordChangeActionType => ({type: ON_PASSWORD_CHANGE, password: e.target.value})
export let onFormSubmit = (e : any) : OnFormSubmitActionType => ({type: ON_FORM_SUBMIT, e})
export let logout = () : LogoutActionType => ({type: LOGOUT})

export default loginReducer
