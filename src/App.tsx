import {BrowserRouter, HashRouter, Link, Route, Routes} from "react-router-dom";
import SecondPage from "./SecondPage.tsx";
import FirstPage from "./FirstPage.tsx";

function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SecondPage />}></Route>
              <Route path="/firstPage" element={<FirstPage />}></Route>
          </Routes>
      </BrowserRouter>
  )
}

export default App
