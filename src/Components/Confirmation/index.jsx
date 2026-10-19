function Index({ onDeleteColor, id, onCancel }) {
  return (
    <div>
      <h5>Are you want to delete this color?</h5>
      <button className="btn" onClick={onDeleteColor} id={id}>
        Yes
      </button>
      <button className="btn" onClick={onCancel}>
        No
      </button>
    </div>
  );
}

export default Index;
