import React, { useContext } from 'react';
import { DashboardContext } from '../context/DashboardContext';

const Widget = ({ widget, categoryName }) => {
  const { removeWidget } = useContext(DashboardContext);

  return (
    <div className="widget">
      <h4>{widget.name}</h4>
      <p>{widget.content}</p>
      <button onClick={() => removeWidget(categoryName, widget.id)}>❌</button>
    </div>
  );
};

export default Widget;