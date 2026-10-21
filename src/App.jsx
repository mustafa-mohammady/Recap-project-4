import { initialColors } from "./lib/colors";
import { initialThemes } from "./lib/themes";
import Color from "./Components/Color/Color";
import { Fragment, useState } from "react";
import Form from "./Components/Form";
import Confirmation from "./Components/Confirmation";
import DropDown from "./Components/DropDown";
import Options from "./Components/Options";
import ThemeForm from "./Components/Form/ThemeForm";
import useLocalStorageState from "use-local-storage-state";
import { v4 } from "uuid";
import "./App.css";

function App() {
  const [activeTheme, setActiveTheme] = useState("th01");
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  const [colors, setColor] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  const themeColors = colors.filter((res) => res.theme_id === activeTheme);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [delete_id, setDeleteID] = useState(null);
  const [edit_id, setEditID] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showThemeForm, setShowThemeForm] = useState({
    themeName: themes.find((e) => e.id === activeTheme).name,
    visible: false,
    action: "",
  });

  function handleAddColor(props) {
    const { id = v4(), role, hex, contrastText } = props;
    setColor([
      { id, role, hex, contrastText, theme_id: activeTheme },
      ...colors,
    ]);
  }

  function handleDeleteColor(e) {
    e.preventDefault();
    let color_id = e.target.id;
    const NEW_COLOR = colors.filter((newColor) => newColor.id !== color_id);
    setColor(NEW_COLOR);
  }

  function handleConfirmation(e) {
    e.preventDefault();
    setDeleteID(e.target.id);
    setShowConfirmation(true);
  }

  function handleCancelConfirmation() {
    setShowConfirmation(false);
  }

  function handleShowUpdateForm(e) {
    e.preventDefault();
    setEditID(e.target.id);
    setShowUpdateForm(true);
  }

  function handleUpdateColor(props) {
    const { role, hex, contrastText } = props;
    const newColors = colors.map((color) =>
      color.id === edit_id
        ? {
            ...color,
            role,
            hex,
            contrastText,
          }
        : color,
    );
    setColor(newColors);
    setShowUpdateForm(false);
  }

  function handleHideThemeForm() {
    setShowThemeForm({
      ...showThemeForm,
      visible: false,
    });
  }

  function handleUpdateTheme(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const form_data = Object.fromEntries(form);
    const oldTheme = themes.map((prev) =>
      prev.id === activeTheme ? { ...prev, name: form_data.themeName } : prev,
    );
    setThemes(oldTheme);
    setShowThemeForm(false);
  }

  function handleAddTheme(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const form_data = Object.fromEntries(form);
    const newTheme = { id: v4(), name: form_data.themeName };
    setThemes([...themes, newTheme]);
    setActiveTheme(newTheme.id);
    setShowThemeForm(false);
  }

  return (
    <>
      <main>
        <h1>Theme Creator</h1>
        {!showThemeForm.visible && (
          <div className="theme-container">
            <DropDown
              onChangeTheme={(e) => {
                setActiveTheme(e.target.value);
                setShowThemeForm({
                  ...showThemeForm,
                  themeName: themes.find((data) => data.id === e.target.value)
                    .name,
                });
              }}
              activeOption={activeTheme}
            >
              {themes.map((theme) => (
                <Options key={theme.id} themesList={theme} />
              ))}
            </DropDown>
            <button
              onClick={() => {
                setShowThemeForm({
                  visible: true,
                  action: "add",
                });
              }}
            >
              Add
            </button>
            <button
              onClick={() => {
                setShowThemeForm({
                  visible: true,
                  action: "edit",
                  themeName: themes.find((output) => output.id === activeTheme)
                    .name,
                });
              }}
            >
              Edit
            </button>
            <button>Delete</button>
          </div>
        )}
        {showThemeForm.visible && (
          <ThemeForm
            themeName={showThemeForm.themeName}
            action={showThemeForm.action}
            onhandleHideThemeForm={handleHideThemeForm}
            onHandleUpdateTheme={handleUpdateTheme}
            onHandleAddTheme={handleAddTheme}
          />
        )}
        <Form onAddColor={handleAddColor} mode="add" />
        {themeColors.length > 0 ? (
          themeColors.map((color) => (
            <Fragment key={color.id}>
              <Color
                role={color.role}
                hex={color.hex}
                contrastText={color.contrastText}
                id={color.id}
                onShowConfirmation={handleConfirmation}
                onShowUpdateForm={handleShowUpdateForm}
              >
                {showConfirmation && color.id === delete_id && (
                  <Confirmation
                    onDeleteColor={handleDeleteColor}
                    onCancel={handleCancelConfirmation}
                    id={color.id}
                  />
                )}
                {showUpdateForm && edit_id === color.id && (
                  <Form
                    onUpdateColor={handleUpdateColor}
                    mode="edit"
                    cardData={color}
                    id={color.id}
                  />
                )}
              </Color>
            </Fragment>
          ))
        ) : (
          <div className="card text-center">Please add new color</div>
        )}
      </main>
    </>
  );
}

export default App;
