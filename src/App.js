import Views from "./views";
import { BrowserRouter as Router } from "react-router-dom";
import { BackTop } from 'antd';

function App() {
  return (
    <Router>
      <Views />
      <BackTop />
    </Router>
    
  );
}

export default App;
