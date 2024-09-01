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
          <Route
            path='/'
            element={<BusinessCard />}
          ></Route>
          {/* <Route
            path='BusinessCard'
            element={<BusinessCard />}
          /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
