import axios from 'axios';

import { Link } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/welcomePage/WelcomePage';

function App() {
  let num1 = 1;
  let num2 = 1;
  console.log(num2 === num1);

  function name(randomNumber1, randomNumber2) {
    if (randomNumber1 === randomNumber2) {
      console.log('true');
    }
  }
  name(num2, num1);
  return <div className="App">hey</div>;
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
