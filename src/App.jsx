import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import { Fragment } from "react";
import Form from "./Components/Form";
import Card from "./Components/Card";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <Form />
        {initialColors.map((initialColor) => (
          <Fragment key={initialColor.id}>
            <Card
              role={initialColor.role}
              hex={initialColor.hex}
              contrastText={initialColor.contrastText}
            />
          </Fragment>
        ))}
      </main>
    </>
  );
}

export default App;
