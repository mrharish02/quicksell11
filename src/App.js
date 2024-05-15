import { useState } from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext/ThemeContext';
import Header from './components/header';
import Main from './components/main';
import KanbanContextProvider from './kanbanContext/KanbanContextProvider';

function App() {
  const [theme,setThemeMode] = useState("light");
  const toggleTheme =()=>{
      if(theme==="light"){
        setThemeMode("dark")
      }
      else{
        setThemeMode("light")
      }
  }
  return (
    <ThemeProvider value={{theme,toggleTheme}}>
    <KanbanContextProvider>
    <div className="App h-[100vh] bg-zinc-950 text-white">
      <Header/>
      <Main/>
    </div>
    </KanbanContextProvider>
    </ThemeProvider>
  );
}

export default App;
