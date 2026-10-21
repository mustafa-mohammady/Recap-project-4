function ThemeActionButtons({
  showInsertForm,
  showEditForm,
  activeTheme,
  showDeleteThemeConfirmation,
}) {
  return (
    <div>
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
