import { useState } from "react";

export default function Index({ onAddColor, cardData, mode, onUpdateColor }) {
  const [formData, setFormData] = useState({
    role: cardData ? cardData.role : "Primary Color",
    hex: cardData ? cardData.hex : "#ffffff",
    contrastText: cardData ? cardData.contrastText : "#dddddd",
  });

  function handleForm(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const form_values = Object.fromEntries(form);
    onAddColor(form_values);
  }
  function handleUpdate(e) {
    e.preventDefault();
    const updateForm = new FormData(e.target);
    const updateFormValues = Object.fromEntries(updateForm);
    onUpdateColor(updateFormValues);
  }

  return (
    <>
      <form
        className="theme-form"
        onSubmit={mode === "add" ? handleForm : handleUpdate}
      >
        <div className="form-element">
          <label htmlFor="role">Role</label>
          <div className="form-input">
            <input
              type="text"
              name="role"
              id="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="hexa">Hexa</label>
          <div className="form-input">
            <div className="input-group">
              <input
                type="text"
                name="hex"
                id="hex"
                value={formData.hex}
                onChange={(e) =>
                  setFormData({ ...formData, hex: e.target.value })
                }
              />
              <input
                type="color"
                name="hexa-color"
                id="hexa-color"
                value={formData.hex}
                onChange={(e) =>
                  setFormData({ ...formData, hex: e.target.value })
                }
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
                name="contrastText"
                id="contrastText"
                value={formData.contrastText}
                onChange={(e) =>
                  setFormData({ ...formData, contrastText: e.target.value })
                }
              />
              <input
                type="color"
                name="text-color"
                id="text_color"
                value={formData.contrastText}
                onChange={(e) =>
                  setFormData({ ...formData, contrastText: e.target.value })
                }
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </div>
        <div className="form-element">
          <button className="btn">{mode === "add" ? "Add" : "Update"}</button>
        </div>
      </form>
    </>
  );
}
