import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';

import './styles/Theme.css';
import './styles/Global.css';
import { MessagesContainer } from './components/MessagesContainer';
import { MainRouter } from './routers/MainRouter';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
