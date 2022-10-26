import { Route, Routes } from 'react-router-dom';
import { Home } from './screen/Home';
import { userPost } from './screen/userPost';

const App = () => {

  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/user-post/:id' element={<userPost />}/> */}
      </Routes>
  )
}

export default App
