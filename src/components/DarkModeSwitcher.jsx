import './DarkModeSwitcher.css';

import { useState } from 'react';

export default function DarkModeSwitcher() {
  return (
    <div className="darkModeSwitcher" style={{backgroundColor: ('red')}}>
      <button>Dark Mode</button>
      <button>Light Mode</button>
    </div>
  );
}
