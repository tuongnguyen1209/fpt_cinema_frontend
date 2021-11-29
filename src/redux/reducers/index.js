import saveTicketReducer from "./saveTicket";
import FindIdMovieReducer from "./findIdMovie";
import { combineReducers } from "redux";
import UserReducer from "./user.reducer";

const rootReducer = combineReducers({
  saveTicket: saveTicketReducer,
  findIdMovie: FindIdMovieReducer,
  user: UserReducer,
});

export default rootReducer;
