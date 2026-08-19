function TextField({ 
  label,        
  value,        
  onChange,     
  placeholder,  
  required,     
  error         
}) {
  return (
    <div className="field-container">
      <label className="field-label">
        {label}
        {required && <span className="required-star">*</span>}
      </label>
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`field-input ${error ? 'field-error' : ''}`}
      />
      
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default TextField;