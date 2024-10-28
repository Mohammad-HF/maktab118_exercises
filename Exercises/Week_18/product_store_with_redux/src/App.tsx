import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Products } from "./pages/Products";
import { Provider as ReduxProvider } from "react-redux";
import { reduxStore } from "./redux/store";
import { MainLayout } from "./layout/MainLayout";
const queryClient = new QueryClient();

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Products />
        </MainLayout>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export default App;
