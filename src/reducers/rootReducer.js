const initState = {
    blurApplied: false
}



const rootReducer = (state = initState, action) => {
    if (action.type === 'UPDATE_BLUR_VAR') {
        return {
            ...state,
            blurApplied: action.value
        }
    }
    return state;
}

export default rootReducer