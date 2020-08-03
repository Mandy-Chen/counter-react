import {CREATECOUNTER} from "../Actions/CreatCounterAction";
const createCounter = (state = { value: 0 }, action) => {
    switch (action.type) {
        case CREATECOUNTER:
            return { ...state, value: state.value  };
        default:
            return state;
    }

}
export default createCounter;