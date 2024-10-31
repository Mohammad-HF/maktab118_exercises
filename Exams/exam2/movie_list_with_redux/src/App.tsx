import { Provider as ReduxProvider } from "react-redux"
import { Main } from "./pages/Main"
import { reduxStore } from "./redux/store"

function App() {

  return <ReduxProvider store={reduxStore}>
    <Main/>
  </ReduxProvider>


}

export default App
