// App.tsx
import FrontPage from "./components/FrontPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import Weather from "./components/Weather";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/weather-app" element={<FrontPage />}/>
        <Route path="/weather-app/city/:cityName" element={<Weather />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </Router>
  );
}

export default App;


// slow loading enter a valid city
// image loading slow
// page reload not directing
// content fit to height of side-content