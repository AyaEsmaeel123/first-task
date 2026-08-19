export const validateField = (value, field) => {
 
  if (!field.required && !value) return '';

  
  if (field.required && !value) {
    return `${field.label} is required`;
  }

  
  switch (field.type) {
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address';
      }
      break;

    case 'number':
      if (isNaN(Number(value))) {
        return 'Must be a number';
      }
      if (Number(value) < 0) {
        return 'Number must be positive';
      }
      break;

    case 'text':
      if (value.length < 2) {
        return 'Text must be at least 2 characters';
      }
      break;

    default:
      break;
  }

  return ''; 
};


export const validateForm = (formData, fields) => {
  const errors = {};
  fields.forEach(field => {
    const fieldName = field.name;
    const value = formData[fieldName] || '';
    const error = validateField(value, field);
    if (error) {
      errors[fieldName] = error;
    }
  });
  return errors;
};