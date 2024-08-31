import photo from "./assets/photo.jpg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='forget' element={<Forget />} />
          <Route
            path='/password-reset-confirm/:uid/:token'
            element={<Reset />}
          />
        </Routes>
      </Router>
      <div className='flex h-full flex-col w-1/4 border-red bg-green'>
        <div className='h-1/2'>
          <img src={photo} alt='' />
        </div>
      </div>
    </>
  );
}

export default App;
