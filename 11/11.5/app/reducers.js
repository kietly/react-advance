let initialState = 0

function reducer(state=initialState, action) {
    switch(action.type) {
        case 'INCREMENT_COUNT':
            return state + 1
        default:
            return state
    }
}

module.exports = reducer
