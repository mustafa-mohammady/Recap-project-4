import ActionButtons from "../ActionButtons";
import "../Color/Color.css";
import ContrastChecker from "./ContrastChecker";
import CopyToClipboard from "../CopyToClipBoard";

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
      <h5 className="color-card-headline hex-label">
        {hex}
        <CopyToClipboard hex={hex} />
      </h5>
      <p>Role: {role}</p>
      <p>Contrast: {contrastText}</p>
      <ContrastChecker hex={hex} contrastText={contrastText} />
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
