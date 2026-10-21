function ThemeActionButtons({
  showInsertForm,
  showEditForm,
  activeTheme,
  showDeleteThemeConfirmation,
}) {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <button onClick={showInsertForm}>Add</button>
      <button disabled={activeTheme === "th01"} onClick={showEditForm}>
        Edit
      </button>
      <button
        disabled={activeTheme === "th01"}
        onClick={showDeleteThemeConfirmation}
      >
        Delete
      </button>
    </div>
  );
}

export default ThemeActionButtons;
