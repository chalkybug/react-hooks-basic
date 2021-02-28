import { useState } from 'react';
import './App.scss';
import Hero from './components/Hero';

function App() {
  const [count, setCount] = useState(0);

  // sẽ sử dụng useCallback vs useMemo
  const handleHeroClick = () => { }

  return (
    <div className="app">
      <h1>React Hook - React.memo</h1>

      <p>{count}</p>

      <button onClick={() => { setCount(count + 1) }}>Increase</button>

      <Hero name="Hulk" onClick={handleHeroClick} />
    </div>
  );
}

export default App;
