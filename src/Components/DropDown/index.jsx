export default function Index({ children, onChangeTheme, activeOption }) {
  return (
    <div>
      <select onChange={onChangeTheme} value={activeOption}>
        {children}
      </select>
    </div>
  );
}
