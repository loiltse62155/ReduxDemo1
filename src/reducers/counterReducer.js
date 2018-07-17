import { INCREASE, DECREASE, MULTIPLE2, DIVIDE2 } from '../actions/type';
const initialState = 0;

export default function (state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1
        case MULTIPLE2:
            return state * 2;
        case DIVIDE2:
            return state / 2;
        default:
            return state;
    }
}