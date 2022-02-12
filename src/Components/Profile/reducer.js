import { CHECK_BOX } from "./actions";

const initialState = { checked: false, name: '', };

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_BOX:
            return {
                ...state,
                checked: !state.checked,
            }
        default:
            return state;
    }
}

export default userProfileReducer;