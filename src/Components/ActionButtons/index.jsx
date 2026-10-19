export default function Index({ onShowConfirmation, id }) {
  return (
    <div className="action-buttons">
      <button>Update</button>
      <button onClick={onShowConfirmation} id={id}>
        Delete
      </button>
    </div>
  );
}
