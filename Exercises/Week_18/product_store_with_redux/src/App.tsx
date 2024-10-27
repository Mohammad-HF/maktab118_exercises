import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Products } from "./pages/Products";
import { Provider as ReduxProvider } from 'react-redux'
import { reduxStore } from "./redux/store";
const queryClient = new QueryClient();

function App() {
  return (
    <ReduxProvider store={reduxStore}>
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
