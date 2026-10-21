import { useState } from "react";

function ThemeForm({
  themeName = "",
  action,
  onHandleHideThemeForm,
  onHandleUpdateTheme,
  onHandleAddTheme,
}) {
  const [theme_name, setTheme_name] = useState(themeName);

  return (
    <form
      style={{ display: "flex" }}
      onSubmit={action === "edit" ? onHandleUpdateTheme : onHandleAddTheme}
    >
      <input
        type="text"
        name="themeName"
        autoFocus
        value={theme_name}
        onChange={(e) => setTheme_name(e.target.value)}
      />
      <button type="submit">{action === "edit" ? "Update" : "Save"}</button>
      <button type="button" onClick={onHandleHideThemeForm}>
        Cancel
      </button>
    </form>
  );
}

export default ThemeForm;
