import './AccordionPanel.css';

export default function AccordionPanel({
  title,
  isDarkMode,
  isExpanded,
  onShow,
  children
}) {
  return (
    <section>
      <h3 style={{ color: (isDarkMode ? 'white' : 'black') }} onClick={onShow}>{(isExpanded ? '⮟' : '⮞') + ' ' + title}</h3>
      {isExpanded && (<p style={{ color: (isDarkMode ? 'white' : 'black') }}>{children}</p>)}
    </section>
  );
}
