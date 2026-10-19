import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import { Fragment, useState } from "react";
import Form from "./Components/Form";
import { v4 } from "uuid";
import "./App.css";

function App() {
  const [colors, setColor] = useState(initialColors);

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

  return (
    <>
      <main>
        <Form onAddColor={handleAddColor} />
        {colors.map((color) => (
          <Fragment key={color.id}>
            <Color
              role={color.role}
              hex={color.hex}
              contrastText={color.contrastText}
              onDeleteColor={handleDeleteColor}
              id={color.id}
            />
          </Fragment>
        ))}
      </main>
    </>
  );
}

export default App;
