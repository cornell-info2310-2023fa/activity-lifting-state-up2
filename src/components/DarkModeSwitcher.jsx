import './DarkModeSwitcher.css';

import { useState } from 'react';

export default function DarkModeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="darkModeSwitcher" style={{backgroundColor: (isDarkMode ? 'black' : 'white')}}>
      <button onClick={() => setIsDarkMode(true)}>Dark Mode</button>
      <button onClick={() => setIsDarkMode(false)}>Light Mode</button>
    </div>
  );
}
