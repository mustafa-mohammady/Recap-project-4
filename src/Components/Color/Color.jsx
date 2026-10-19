import "./Color.css";

export default function Color({
  role,
  hex,
  contrastText,
  onShowConfirmation,
  id,
  children,
}) {
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
        <button onClick={onShowConfirmation} id={id}>
          Delete
        </button>
        {children}
      </div>
    </div>
  );
}
