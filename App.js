import React,{useReducer,createContext} from 'react';
import Routes from './src/navigation/Routes';
import { ThemeProvider } from './AppContext';
import { Provider } from 'react-redux';
import configureStore from './src/store';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();
const store = configureStore();

const App = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Routes/>
        </Provider>
    </ThemeProvider>
    
  );
};

export default App;
