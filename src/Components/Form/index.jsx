export default function index() {
  function handleInput(e) {
    console.log(e.target.value);
  }
  function handleForm(e) {
    e.preventDefault();
  }
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
              <input type="text" name="hexa" id="hexa" onChange={handleInput} />
              <input
                type="color"
                name="hexa-color"
                id="hexa-color"
                style={{ width: "30%" }}
              />
            </div>
          </div>
        </div>
        <div className="form-element">
          <label htmlFor="contract_text">Contract Text</label>
          <div className="form-input">
            <div className="input-group">
              <input type="text" name="contract_text" id="contract_text" />
              <input
                type="color"
                name="text-color"
                id="text_color"
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
