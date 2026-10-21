export default function Index({ children, onChangeTheme }) {
  return (
    <div>
      <select onChange={onChangeTheme}>{children}</select>
    </div>
  );
}
