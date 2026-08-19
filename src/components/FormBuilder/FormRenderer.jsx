import { useState } from 'react';
import FieldFactory from '../fields/FieldFactory';
import { validateForm, validateField } from '../../utils/validation';

function FormRenderer({ 
  config, 
  onSubmit, 
  title, 
  description 
}) {
  
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  
  const handleChange = (fieldName, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    const field = config.find(f => f.name === fieldName);
    if (field) {
      const error = validateField(value, field);
      setErrors(prev => ({
        ...prev,
        [fieldName]: error
      }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData, config);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert('Please correct the errors before submitting.');
      return;
    }
    onSubmit(formData);
  };
  
  return (
    <div className="form-renderer">
      {title && <h2>{title}</h2>}
      {description && <p className="description">{description}</p>}
      
      <form onSubmit={handleSubmit} noValidate>
        {config.map((field, index) => {
          const fieldName = field.name;
          
          return (
            <div key={index} className="form-field">
             
              <div className="field-header">
                <span className="field-type-tag">{field.type}</span>
                {field.required && <span className="required-star">*</span>}
              </div>
              
              <FieldFactory
                type={field.type}
                label={field.label}        
                value={formData[fieldName] || ''}
                onChange={(value) => handleChange(fieldName, value)}
                placeholder={field.placeholder}
                required={field.required}
                options={field.options}
                error={errors[fieldName]}
              />
            </div>
          );
        })}
        
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default FormRenderer;