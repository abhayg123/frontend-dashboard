import React, { createContext, useState } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [categories, setCategories] = useState([
    {
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Cloud Accounts', content: 'Random text' },
        { id: 2, name: 'Cloud Account Risk Assessment', content: 'Random text' }
      ]
    },
    {
      name: 'CWPP Dashboard',
      widgets: [
        { id: 3, name: 'Top 5 Namespace Specific Alerts', content: 'Random text' },
        { id: 4, name: 'Workload Alerts', content: 'Random text' }
      ]
    },
    {
      name: 'Registry Scan',
      widgets: [
        { id: 5, name: 'Image Risk Assessment', content: 'Random text' },
        { id: 6, name: 'Image Security Issues', content: 'Random text' }
      ]
    }
  ]);

  const addWidget = (categoryName, widget) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.name === categoryName
          ? { ...cat, widgets: [...cat.widgets, widget] }
          : cat
      )
    );
  };

  const removeWidget = (categoryName, widgetId) => {
    setCategories(prev =>
      prev.map(cat =>
        cat.name === categoryName
          ? {
              ...cat,
              widgets: cat.widgets.filter(w => w.id !== widgetId)
            }
          : cat
      )
    );
  };

  return (
    <DashboardContext.Provider value={{ categories, addWidget, removeWidget }}>
      {children}
    </DashboardContext.Provider>
  );
};