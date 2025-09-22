import React, { useState, useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const AddWidgetForm = ({ categoryName }) => {
  const { addWidget } = useContext(DashboardContext);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleAdd = () => {
    if (name && content) {
      const newWidget = {
        id: Date.now(),
        name,
        content
      };
      addWidget(categoryName, newWidget);
      setName('');
      setContent('');
    }
  };

  return (
    <div className="add-widget-form">
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Content"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button onClick={handleAdd}>+ Add Widget</button>
    </div>
  );
};

export default AddWidgetForm;