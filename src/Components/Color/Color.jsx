import ActionButtons from "../ActionButtons";
import "../Color/Color.css";

export default function Color({
  role,
  hex,
  contrastText,
  onShowConfirmation,
  onShowUpdateForm,
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
        {!children[0] && !children[1] && (
          <ActionButtons
            onShowConfirmation={onShowConfirmation}
            id={id}
            onShowUpdateForm={onShowUpdateForm}
          />
        )}
        {children}
      </div>
    </div>
  );
}
