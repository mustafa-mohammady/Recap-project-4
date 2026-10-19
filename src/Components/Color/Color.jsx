import "./Color.css";

export default function Color({ role, hex, contrastText }) {
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
        <button>Delete</button>
      </div>
    </div>
  );
}
