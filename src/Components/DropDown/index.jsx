export default function Index({ children, onChangeTheme, activeOption }) {
  return (
    <select onChange={onChangeTheme} value={activeOption}>
      {children}
    </select>
  );
}
