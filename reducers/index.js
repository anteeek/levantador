import { combineReducers } from "redux";

import alarms from "./alarms/";
import settings from "./settings/";

export default combineReducers({alarms, settings})