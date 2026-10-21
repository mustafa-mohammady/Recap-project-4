function ThemeDeleteConfirmation({
  onDeleteTheme,
  theme_id,
  closeConfirmation,
}) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <button type="button" onClick={onDeleteTheme} id={theme_id}>
        Yes Delete
      </button>
      <button type="button" onClick={closeConfirmation}>
        Cancel
      </button>
    </div>
  );
}

export default ThemeDeleteConfirmation;
