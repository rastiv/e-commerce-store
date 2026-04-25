import { Provider } from "react-redux";

import { createStore, type StateSchema } from "@/app/store";

type StoreProviderProps = {
  children: React.ReactNode;
  initialState?: StateSchema;
};

export const StoreProvider = ({
  children,
  initialState = {} as StateSchema,
}: StoreProviderProps) => {
  const store = createStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
