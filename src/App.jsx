import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import { Fragment, useState } from "react";
import Form from "./Components/Form";
import Confirmation from "./Components/Confirmation";
import { v4 } from "uuid";
import "./App.css";

function App() {
  const [colors, setColor] = useState(initialColors);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [delete_id, setDeleteID] = useState(null);
  const [edit_id, setEditID] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  function handleAddColor(props) {
    const { id = v4(), role, hex, contrastText } = props;
    setColor([{ id, role, hex, contrastText }, ...colors]);
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
    console.log("Hello", edit_id);
    const newColors = colors.map((color) =>
      color.id == edit_id ? { id: edit_id, role, hex, contrastText } : color,
    );
    setColor(newColors);
    setShowUpdateForm(false);
  }

  return (
    <>
      <main>
        <Form onAddColor={handleAddColor} buttonText="Add" />

        {colors.length > 0 ? (
          colors.map((color) => (
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
                    buttonText="Update"
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
