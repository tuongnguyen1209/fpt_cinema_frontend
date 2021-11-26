import saveTicketReducer from "./saveTicket";
import FindIdMovieReducer from "./findIdMovie";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    saveTicket: saveTicketReducer,
    findIdMovie: FindIdMovieReducer
}) 

export default rootReducer;