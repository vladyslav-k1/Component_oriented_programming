function StarButton({ isActive, label, onClick, showLabel = false }) {
  return (
    <button
      type="button"
      className={`star-button ${isActive ? 'star-button--active' : ''}`}
      aria-pressed={isActive}
      aria-label={label}
      title={label}
      onClick={onClick}
    >
      <span aria-hidden="true">{isActive ? '★' : '☆'}</span>
      {showLabel && <span className="star-button__label">{label}</span>}
    </button>
  );
}

export default StarButton;
