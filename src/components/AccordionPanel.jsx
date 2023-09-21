import { useState } from 'react';

import './AccordionPanel.css';

export default function AccordionPanel({ title, isDarkMode, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section>
      <h3 onClick={() => setIsExpanded(!isExpanded)} style={{ color: (isDarkMode ? 'white' : 'black') }}>
        {(isExpanded ? '⮟' : '⮞') + ' ' + title}
      </h3>

      {isExpanded && (<p style={{ color: (isDarkMode ? 'white' : 'black') }}>{children}</p>)}
    </section>
  );
}
