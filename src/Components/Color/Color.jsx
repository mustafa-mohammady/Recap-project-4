import "./Color.css";

export default function Color({ role, hex, contrastText, onDeleteColor, id }) {
  return (
    <div
      className="card"
      style={{ backgroundColor: `${hex}`, color: `${contrastText}` }}
    >
      <h4>{hex}</h4>
      <p>Role: {role}</p>
      <p>Contrast: {contrastText}</p>
      <div className="action-buttons">
        <button>Update</button>
        <button onClick={onDeleteColor} id={id}>
          Delete
        </button>
      </div>
    </div>
  );
}
