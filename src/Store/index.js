import { createStore } from "redux";
import userProfileReducer from "../Components/Profile/reducer";

const store = createStore(userProfileReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;