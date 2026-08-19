function NumberField({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  required, 
  error,
  fieldType
}) {
  const handleChange = (e) => {
    const rawValue = e.target.value;
    
    const sanitized = rawValue.replace(/[^0-9.]/g, '');
    
    const parts = sanitized.split('.');
    const finalValue = parts.length > 2 
      ? parts[0] + '.' + parts.slice(1).join('') 
      : sanitized;
    onChange(finalValue);
  };

  return (
    <div className="field-container">
      <label className="field-label">
        {label}
        {fieldType && <span className="field-type-tag">({fieldType})</span>}
        {required && <span className="required-star">*</span>}
      </label>
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`field-input ${error ? 'field-error' : ''}`}
        autoComplete="off"
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default NumberField;