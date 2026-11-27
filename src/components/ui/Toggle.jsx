function Toggle({ checked, onChange, offLabel, onLabel }) {
  return (
    <div className="toggle">
      <span className={!checked ? 'toggle__label--active' : ''}>{offLabel}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        className={`toggle__switch ${checked ? 'toggle__switch--on' : ''}`}
        onClick={() => onChange(!checked)}
      >
        <span className="toggle__thumb" />
      </button>
      <span className={checked ? 'toggle__label--active' : ''}>{onLabel}</span>
    </div>
  );
}

export default Toggle;
