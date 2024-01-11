import React, { useState } from 'react';

interface AppCardProps {
  app: {
    app_name: string;
    name: string;
    logo: string;
    description: string;
    screenshot: string;
  };
  onSelect?: (selectedApp: string) => void;
}

const AppCard: React.FC<AppCardProps> = ({ app, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelect = () => {
    setIsSelected(!isSelected);

    // Call the callback function to send the selected app to the parent
    if (onSelect) {
      onSelect(app.app_name);
    }
  };

  return (
    <div className="border p-4 rounded-md shadow-md ${isSelected ? 'bg-blue-100' : ''}">
      <img src={app.logo} alt={app.name} className="w-16 h-16 mx-auto mb-4" />
      <h3 className="text-lg font-semibold mb-2">{app.name}</h3>
      <p className="text-sm mb-4">{app.description}</p>
      <button type="button" onClick={handleSelect} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        {isSelected ? 'Désélectionner' : 'Sélectionner'}
      </button>
    </div>
  );
};

export default AppCard;