import React from "react";

import inits from "./inits";
import { IContext } from "./types";

const AppContext = React.createContext(inits.context as IContext);

export default AppContext;
