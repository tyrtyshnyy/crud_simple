const initialState = {
    id: -1,
    name: '',
    surname: '',
    position: '',
    visible: false
}

function inputs(state = initialState, action) {
    switch (action.type) {
        case 'SET_ADD_NAME': {
            return {
                ...state,
                name: action.payload
            }
        }
        case 'SET_ADD_SURNAME': {
            return {
                ...state,
                surname: action.payload
            }
        }
        case 'SET_ADD_POSITION': {
            return {
                ...state,
                position: action.payload
            }
        }

        case 'RESET_INPUTS': {
            return  initialState
            
        }

        case 'SET_ADD_ID': {
            return   {
                ...state,
                id: action.payload
            }
            
        }
        case 'SET_VISIBLE_MODAL': {
            return   {
                ...state,
                visible: action.payload
            }
            
        }


        default: {
            return state
        }
    }
}

export default inputs
