import React, { useEffect, useState } from 'react';

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/api/items')
      .then(response => response.json())
      .then(setItems);
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setTimeout(() => setSelectedItem(null), 3000); // Hide popup after 3 seconds
  };

  return (
    <div>
      {selectedItem && (
        <div style={{
          position: 'fixed', top: '20%', left: '50%', transform: 'translateX(-50%)',
          padding: '20px', borderRadius: '10px', background: 'rgba(0,0,0,0.7)', color: 'white',
          zIndex: 1000
        }}>
          Selected Item: {selectedItem.name}
        </div>
      )}
      {items.map(item => (
        <div key={item._id} className="item" onClick={() => handleItemClick(item)}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
