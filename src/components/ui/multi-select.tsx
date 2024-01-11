import React, { useState, useEffect } from 'react';

interface Option {
    value: string;
    label: string;
}

interface MultiSelectProps {
    options: Option[];
    onSelectionChange?: (selectedOptions: string[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ options, onSelectionChange }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [searchInput, setSearchInput] = useState<string>('');

    const handleCheckboxChange = (value: string) => {
        const updatedSelection: string[] = selectedOptions.includes(value)
            ? selectedOptions.filter((option) => option !== value)
            : [...selectedOptions, value];

        setSelectedOptions(updatedSelection);

        if (onSelectionChange) {
            onSelectionChange(updatedSelection);
        }
    };

    useEffect(() => {
        if (onSelectionChange) {
            onSelectionChange(selectedOptions);
        }
    }, [selectedOptions, onSelectionChange]);

    const filteredOptions = options.filter((option) => option.label.toLowerCase().includes(searchInput.toLowerCase()));

    return (
        <div>
            <input
                type="text"
                placeholder="Rechercher une application..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="block w-full mt-1 mb-2 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />

            <div className="mt-2 bg-white border border-gray-300 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white max-h-52 overflow-y-auto">
                {filteredOptions.map((option) => (
                    <label key={option.value} className="block px-4 py-2 text-sm">
                        <input
                            type="checkbox"
                            checked={selectedOptions.includes(option.value)}
                            onChange={() => handleCheckboxChange(option.value)}
                            className="mr-2 text-blue-500"
                        />
                        {option.label}
                    </label>
                ))}
            </div>
        </div>
    );
};

export default MultiSelect;
