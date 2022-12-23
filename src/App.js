
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home
  from './test/Home';

import MapWrapper from './test/Test';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/test"} element={<MapWrapper />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
