function TextareaField({ 
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
      
      <textarea  
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`field-textarea ${error ? 'field-error' : ''}`}
        rows={4}  
      />
      
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default TextareaField;