import { Route, Routes } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import { Home } from './screen/Home/Home';
import { User } from './screen/User/User';
import { NotFound } from './screen/NotFound';


const App = () => {

  

  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/user/:username' element={<User />}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ContextProvider>
      
  )
}

export default App;
