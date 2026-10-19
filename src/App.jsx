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
            />
          </Fragment>
        ))}
      </main>
    </>
  );
}

export default App;
