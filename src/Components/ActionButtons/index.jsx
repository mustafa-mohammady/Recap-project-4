export default function Index({ onShowConfirmation, id, onShowUpdateForm }) {
  return (
    <div className="action-buttons">
      <button onClick={onShowUpdateForm} id={id}>
        Update
      </button>
      <button onClick={onShowConfirmation} id={id}>
        Delete
      </button>
    </div>
  );
}
