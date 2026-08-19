import { useState } from 'react';
import FormRenderer from './components/FormBuilder/FormRenderer';
import FormBuilderUI from './components/FormBuilder/FormBuilderUI';
import formConfig from './utils/formConfig';
import './styles/global.css';

function App() {
  const [config, setConfig] = useState(formConfig);
  const [showBuilder, setShowBuilder] = useState(false);

  const handleSubmit = (formData) => {
    console.log('Data sent: ', formData);
    alert('Sent successfully. see console');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1> Form Builder</h1>
        <button onClick={() => setShowBuilder(!showBuilder)} className="toggle-btn">
          {showBuilder ? 'Go to  the form' : 'Go to manualy build'}
        </button>
      </header>
      <main className="app-main">
        {showBuilder ? (
          <FormBuilderUI onConfigChange={setConfig} initialConfig={config} />
        ) : (
          <FormRenderer 
        
            config={config}
            onSubmit={handleSubmit}
            title="Registeration form"
            description="Please fill in the following information"
          />
        )}
      </main>
    </div>
  );
}

export default App;