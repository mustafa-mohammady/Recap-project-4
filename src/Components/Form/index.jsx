import { useState } from "react";

export default function Index() {
  const [color, setColor] = useState(0);
  const [contrast, setContrast] = useState(0);

  function handleColor(e) {
    setColor(e.target.value);
  }
  function handleContrast(e) {
    setContrast(e.target.value);
  }
  function handleForm(e) {
    e.preventDefault();
  }

  console.log(color);

  return (
    <>
      <form className="theme-form" onSubmit={handleForm}>
        <div className="form-element">
          <label htmlFor="role">Role</label>
          <div className="form-input">
            <input type="text" name="role" id="role" />
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="hexa">Hexa</label>
          <div className="form-input">
            <div className="input-group">
              <input
                type="text"
                name="hexa"
                id="hexa"
                value={color}
                onChange={handleColor}
              />
              <input
                type="color"
                name="hexa-color"
                id="hexa-color"
                value={color}
                onChange={handleColor}
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="contract_text">Contract Text</label>
          <div className="form-input">
            <div className="input-group">
              <input
                type="text"
                name="contract_text"
                id="contract_text"
                value={contrast}
                onChange={handleContrast}
              />
              <input
                type="color"
                name="text-color"
                id="text_color"
                value={contrast}
                onChange={handleContrast}
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </div>
        <div className="form-element">
          <button className="btn">Add</button>
        </div>
      </form>
    </>
  );
}
