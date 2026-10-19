import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    role: "Primary Color",
    color: "#ffffff",
    contrast: "#dddddd",
  });

  function handleForm(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const form_values = Object.fromEntries(form);
    console.log(form_values);
  }

  return (
    <>
      <form className="theme-form" onSubmit={handleForm}>
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
                name="hexa"
                id="hexa"
                value={formData.color}
                onChange={(e) =>
                  setFormData({ ...formData, color: e.target.value })
                }
              />
              <input
                type="color"
                name="hexa-color"
                id="hexa-color"
                value={formData.color}
                onChange={(e) =>
                  setFormData({ ...formData, color: e.target.value })
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
                name="contract_text"
                id="contract_text"
                value={formData.contrast}
                onChange={(e) =>
                  setFormData({ ...formData, contrast: e.target.value })
                }
              />
              <input
                type="color"
                name="text-color"
                id="text_color"
                value={formData.contrast}
                onChange={(e) =>
                  setFormData({ ...formData, contrast: e.target.value })
                }
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
