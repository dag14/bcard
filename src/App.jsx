import photo from "./assets/photo.jpg";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<BusinessCard />}>
            {/* <Route
            path='BusinessCard'
            element={<BusinessCard />}
          /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
