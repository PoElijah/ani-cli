import {combineReducers} from "redux";
import {animeList} from "./animesReducer";


const rootReducer = combineReducers({
	animeList
});
export default rootReducer;