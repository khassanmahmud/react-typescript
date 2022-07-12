import { combineReducers, legacy_createStore as createStore } from "redux";

const store = combineReducers({});

export type RootState = ReturnType<typeof store>;
export default createStore(store);
