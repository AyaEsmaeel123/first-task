function SelectField({ 
  label, 
  value, 
  onChange, 
  options,      
  required, 
  error 
}) {
  return (
    <div className="field-container">
      <label className="field-label">
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`field-select ${error ? 'field-error' : ''}`}
      >
        <option value="">choose...</option> 
        
        {options.map((option) => (  
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default SelectField;