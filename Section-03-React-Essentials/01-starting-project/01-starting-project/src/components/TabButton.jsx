export default function TabButton({ children, onSelect, isSelected }) {
  function handleClick() {
    console.log();
  }
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
