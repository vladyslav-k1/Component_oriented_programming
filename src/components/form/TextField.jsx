function TextField({ id, label, value, onChange, type = 'text', placeholder, error, ...inputProps }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        onChange={(event) => onChange(event.target.value)}
        {...inputProps}
      />
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
}

export default TextField;
