import { selectIsUserLoading } from "./model/selectors/selectIsUserLoading";
import { selectUser } from "./model/selectors/SelectUser";
import { initUserData } from "./model/services/initUserData";
import { userActions, userReducer } from "./model/slices/userSlice";
import type { User, UserShema } from "./model/types/UserSchema";

export {
  userActions,
  userReducer,
  initUserData,
  selectIsUserLoading,
  selectUser,
};
export type { User, UserShema };
