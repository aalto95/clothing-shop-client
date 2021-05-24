const ON_LOGIN_CHANGE = 'ON-LOGIN-CHANGE'
const ON_PASSWORD_CHANGE = 'ON-PASSWORD-CHANGE'
const ON_FORM_SUBMIT = 'ON-FORM-SUBMIT'
const LOGOUT = 'LOGOUT'

let initialState = {
    login: '',
    password: '',
    isLogged: false
}

const loginReducer = (state = initialState, action) => {
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
                console.log('you are logged in')
                return {
                    ...state,
                    isLogged: true,
                    login: '',
                    password: ''
                }
            }
            return {
                ...state
            }
        case LOGOUT:
            return {
                ...state,
                isLogged: false
            }
        default:
            return state
    }
}

export let onLoginChange = (e) => ({type: ON_LOGIN_CHANGE, login: e.target.value})
export let onPasswordChange = (e) => ({type: ON_PASSWORD_CHANGE, password: e.target.value})
export let onFormSubmit = (e) => ({type: ON_FORM_SUBMIT, e})
export let logout = () => ({type: LOGOUT})

export default loginReducer