import { AppRouter } from "./AppRouter";
import { useGetSession } from "./hooks/useGetSession";

function App() {
  const { isLoading } = useGetSession();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <AppRouter />;
}

export default App;
