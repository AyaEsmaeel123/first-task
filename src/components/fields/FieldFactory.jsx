import TextField from './TextField';
import EmailField from './EmailField';
import NumberField from './NumberField';
import TextareaField from './TextareaField';
import SelectField from './SelectField';

function FieldFactory({ 
  type,     
  ...props  
}) {
  
  
  switch (type) {
    case 'email':
      return <EmailField {...props} />;
      
    case 'number':
      return <NumberField {...props} />;
      
    case 'select':
      return <SelectField {...props} />;
      
    case 'textarea':
      return <TextareaField {...props} />;
      
    case 'text':
    default:
      return <TextField {...props} />;  
  }
}

export default FieldFactory;