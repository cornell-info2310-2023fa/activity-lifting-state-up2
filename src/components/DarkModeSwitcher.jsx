import './DarkModeSwitcher.css';

export default function DarkModeSwitcher({ onSwitchDarkMode }) {
  return (
    <div className="darkModeSwitcher">
      <button onClick={() => onSwitchDarkMode(true)}>Dark Mode</button>
      <button onClick={() => onSwitchDarkMode(false)}>Light Mode</button>
    </div>
  );
}
