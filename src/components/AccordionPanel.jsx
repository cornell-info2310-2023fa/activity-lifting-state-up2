import { useState } from 'react';

import './AccordionPanel.css';

export default function AccordionPanel({ title, children }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section>
      <h3 onClick={() => setIsExpanded(!isExpanded)}>
        {(isExpanded ? '⮟' : '⮞') + ' ' + title}
      </h3>

      {isExpanded && (<p>{children}</p>)}
    </section>
  );
}
