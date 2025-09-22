import React from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Category = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} categoryName={category.name} />
      ))}
      <AddWidgetForm categoryName={category.name} />
    </div>
  );
};

export default Category;