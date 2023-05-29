import tileGameReducer from "./tile-game-reducer";
import sliderGameReducer from "./slider-game-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  tileGamePlay: tileGameReducer,
  sliderGamePlay: sliderGameReducer
});

export default rootReducer;