import { useState } from 'react';

function FormBuilderUI({ onConfigChange, initialConfig = [] }) {
  const [fields, setFields] = useState(initialConfig);
  
  const [newField, setNewField] = useState({
    type: 'text',
    label: '',
    name: '',
    placeholder: '',
    required: false,
    options: []
  });

  const [newOption, setNewOption] = useState({ value: '', label: '' });

  const addOption = () => {
    if (!newOption.value.trim() || !newOption.label.trim()) {
      alert('Please enter both value and label for the option.');
      return;
    }
    setNewField({
      ...newField,
      options: [...newField.options, { value: newOption.value, label: newOption.label }]
    });
    setNewOption({ value: '', label: '' });
  };

  const removeOption = (index) => {
    const updatedOptions = newField.options.filter((_, i) => i !== index);
    setNewField({ ...newField, options: updatedOptions });
  };

  const addField = () => {
    if (!newField.label.trim()) {
      alert('Please enter a label for the field.');
      return;
    }

    if (newField.type === 'select' && newField.options.length === 0) {
      alert('Please add at least one option for the select field.');
      return;
    }

    const fieldName = newField.name.trim() 
      ? newField.name.trim() 
      : newField.label.toLowerCase().replace(/\s+/g, '_');

    const fieldToAdd = {
      type: newField.type,
      label: newField.label,
      name: fieldName,
      placeholder: newField.placeholder || '',
      required: newField.required,
      ...(newField.type === 'select' && { options: newField.options })
    };

    const updatedFields = [...fields, fieldToAdd];
    setFields(updatedFields);
    onConfigChange(updatedFields);
    
    setNewField({
      type: newField.type,
      label: '',
      name: '',
      placeholder: '',
      required: false,
      options: []
    });
  };

  const removeField = (index) => {
    const updatedFields = fields.filter((_, i) => i !== index);
    setFields(updatedFields);
    onConfigChange(updatedFields);
  };

  return (
    <div className="form-builder-ui">
      <h2>Form Builder</h2>
      
      <div className="builder-form">
        <h2 style={{margin:"15px", display:"flex", justifyContent:"center"}}>Add new field</h2>
        
        <div className="form-group">
          <label>Type of field</label>
          <select
            value={newField.type}
            onChange={(e) => setNewField({ ...newField, type: e.target.value })}
          >
            <option value="text">text</option>
            <option value="email">email</option>
            <option value="number">number</option>
            <option value="textarea">textarea</option>
            <option value="select">select</option>
          </select>
        </div>

        <div className="form-group">
          <label>label</label>
          <input
            type="text"
            value={newField.label}
            onChange={(e) => setNewField({ ...newField, label: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>name (optional)</label>
          <input
            type="text"
            value={newField.name}
            onChange={(e) => setNewField({ ...newField, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>placeholder (optional)</label>
          <input
            type="text"
            value={newField.placeholder}
            onChange={(e) => setNewField({ ...newField, placeholder: e.target.value })}
            placeholder="guidance text"
          />
        </div>

        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              checked={newField.required}
              onChange={(e) => setNewField({ ...newField, required: e.target.checked })}
            />
            (required)
          </label>
        </div>

        {newField.type === 'select' && (
          <div className="form-group">
            <label>options</label>
            <div className="options-group">
              <input
                type="text"
                placeholder="value"
                value={newOption.value}
                onChange={(e) => setNewOption({ ...newOption, value: e.target.value })}
              />
              <input
                type="text"
                placeholder="label"
                value={newOption.label}
                onChange={(e) => setNewOption({ ...newOption, label: e.target.value })}
              />
              <button type="button" onClick={addOption}>Add option</button>
            </div>
            <div className="options-list">
              {newField.options.map((opt, idx) => (
                <span key={idx} className="option-tag">
                  {opt.label} ({opt.value})
                  <button onClick={() => removeOption(idx)}>✕</button>
                </span>
              ))}
            </div>
          </div>
        )}

        <button className="btn-add" onClick={addField}>Add field</button>
      </div>

      <div className="fields-list">
        <h3>The added fields ({fields.length})</h3>
        {fields.length === 0 && <p>There are no fields yet, add one!</p>}
        {fields.map((field, index) => (
          <div key={index} className="field-item">
            <div className="field-info">
              <span className="field-type-badge">{field.type}</span>
              <span className="field-label-display">{field.label}</span>
              {field.required && <span className="required-badge">required</span>}
            </div>
            <button onClick={() => removeField(index)} className="btn-remove">Delete</button>
          </div>
        ))}
      </div>

      <div className="json-preview">
        <h3>JSON Preview</h3>
        <pre>{JSON.stringify(fields, null, 2)}</pre>
      </div>
    </div>
  );
}

export default FormBuilderUI;