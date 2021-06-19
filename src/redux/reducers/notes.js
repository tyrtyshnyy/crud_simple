const initialState = {
    notes: []
}


function notes(state = initialState, action) {
    switch (action.type) {
        case 'ADD_NOTE': {
            const notes = [...state.notes]
            notes.push(action.payload)
                return {
                    notes
                }
            }
        case 'UPDATE_NOTE': {
            const notes = [...state.notes]
            const {index, note} = action.payload
            notes[index] = note
            return {
                notes
            }
        }
        case 'DELETE_NOTE': {
            
        const notes = [];
        state.notes.forEach((note, i) => {
        if(action.payload !== i) {
          notes.push(note)
        }
         })
            return {
                notes
            }
        }
        default: {
            return state
        }
    }
    
}

export default notes
