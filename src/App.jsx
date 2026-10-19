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

  return (
    <>
      <main>
        <Form onAddColor={handleAddColor} />

        {colors.length > 0 ? (
          colors.map((color) => (
            <Fragment key={color.id}>
              <Color
                role={color.role}
                hex={color.hex}
                contrastText={color.contrastText}
                id={color.id}
                onShowConfirmation={handleConfirmation}
              >
                {showConfirmation && color.id === delete_id && (
                  <Confirmation
                    onDeleteColor={handleDeleteColor}
                    onCancel={handleCancelConfirmation}
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
