import {
    INCREASE, REDUCE
} from "../Actions/Action";
const changeCount = (state = { value: 0 }, action) => {
    switch (action.type) {
        case INCREASE:
            return { ...state, value: state.value + 1 };
        case REDUCE:
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }

}
export default changeCount;