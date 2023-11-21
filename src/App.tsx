import './styles/global.css'
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import { PlayerComponent } from './pages/Player';

export function App() {
  return (
    <ReduxProvider store={store}>
      <PlayerComponent />
    </ReduxProvider>
  )
}
