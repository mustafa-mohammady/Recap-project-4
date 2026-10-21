export default function Index({ themesList }) {
  return <option value={themesList.id}>{themesList.name}</option>;
}
