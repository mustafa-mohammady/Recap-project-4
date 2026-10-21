import { useState } from "react";

function ThemeForm({
  themeName,
  action,
  onhandleHideThemeForm,
  onHandleUpdateTheme,
  onHandleAddTheme,
}) {
  const [theme_name, setTheme_name] = useState(themeName);

  return (
    <div style={{ display: "flex" }}>
      <form
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
        <button onClick={onhandleHideThemeForm}>Cancel</button>
      </form>
    </div>
  );
}

export default ThemeForm;
