import { useDispatch, useSelector } from "react-redux";

import type { StateSchema } from "./config/StateSchema";
import type { AppDispatch } from "./config/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<StateSchema>();
