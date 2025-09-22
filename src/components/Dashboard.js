import React, { useContext, useState } from 'react';
import { DashboardContext } from '../context/DashboardContext';
import Category from './Category';

const Dashboard = () => {
  const { categories } = useContext(DashboardContext);
  const [search, setSearch] = useState('');

  const filteredCategories = categories.map(cat => ({
    ...cat,
    widgets: cat.widgets.filter(w =>
      w.name.toLowerCase().includes(search.toLowerCase())
    )
  }));

  return (
    <div>
      <input
        type="text"
        placeholder="Search widgets..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {filteredCategories.map(cat => (
        <Category key={cat.name} category={cat} />
      ))}
    </div>
  );
};

export default Dashboard;