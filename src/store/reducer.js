const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_PERSON'){
        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'Aleks',
            age: Math.floor( Math.random() * 40 )
        }
        const newState = {
            ...state,
            persons: state.persons.concat(newPerson)
        }
        return newState;
    }
    if(action.type === 'DELETE_PERSON'){
        const updatedArray = state.persons.filter(result => result.id !== action.elId);
        return {
            ...state,
            persons: updatedArray
        };
    }
    return state;
};

export default reducer;