import axios from 'axios';

import { Link } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/welcomePage/WelcomePage';

function App() {
  return (
    <div className="App">
      {/* <WelcomePage /> */}
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}
      >
        <Link to="/WelcomePage">welcomePage</Link>
      </nav>
    </div>
  );
}

export default App;
//  <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<WelcomePage />}>
//           <Route index element={<Home />} />
//           <Route path="blogs" element={<Blogs />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
