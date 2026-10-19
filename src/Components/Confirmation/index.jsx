function Index({ onDeleteColor, id, onCancel }) {
  return (
    <div>
      <h5 className="color-card-headline">Do you want to delete this color?</h5>
      <div className="actions-button-container">
        <button className="btn yes-btn" onClick={onDeleteColor} id={id}>
          Yes
        </button>
        <button className="btn no-btn" onClick={onCancel}>
          No
        </button>
      </div>
    </div>
  );
}

export default Index;
