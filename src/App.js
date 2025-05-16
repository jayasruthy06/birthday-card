import './App.css';
import Slider from "./SliderPage/Slider";
import Cake from "./CakePage/Cake";
import Msg from "./BirthdayMsg/Msg";
import {Routes, Route, useNavigate, useLocation} from 'react-router-dom';
import {useEffect} from 'react';

function App() {
  
  const navigate = useNavigate();
  const location = useLocation();

  //force navigation to first page on every refresh
  useEffect(() => {
    if (window.performance.navigation.type === 1 && location.pathname !== '/') {
      navigate('/');
    }
  }, []);

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/msg" element={<Msg />} />
      </Routes>
    </div>
  );
}

export default App;
