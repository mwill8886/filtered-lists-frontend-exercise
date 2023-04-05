import React, { useEffect, useState } from 'react';
import { getStatesData, Country } from './data';
import { StateData } from './types';

const StateList = () => {
  const [sort, setSort] = useState('name');
  const [selectedCountry, setSelectedCountry] = useState<Country>('US');
  const initialData: Array<StateData> = getStatesData(selectedCountry);
  const [filteredData, setFilteredData] =
    useState<Array<StateData>>(initialData);
  console.log(filteredData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.trim().toLowerCase(); // remove white space, make all lower case
    console.log('input: ', inputValue);
    // don't filter on empty
    if (inputValue == '') {
      setFilteredData(initialData);
    }
    const filteredList = initialData.filter((state: StateData) => {
      // check to see if the state name includes the input value
      if (state.name.toLowerCase().includes(inputValue)) {
        return state;
      }
    });

    setFilteredData(filteredList);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue: Country = e.target.value as Country;
    console.log('select val: ', inputValue);
    setSelectedCountry(inputValue);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = e.target.value;
    setSort(inputValue);
  };

  useEffect(() => {
    setFilteredData(initialData);
  }, [selectedCountry]);
  return (
    <div>
      <select onChange={handleSelectChange}>
        <option value="US">United States</option>
        <option value="Canada">Canada</option>
        <option value="India">India</option>
      </select>
      <select onChange={handleSortChange}>
        <option value="name">Name</option>
        <option value="population">Population</option>
        <option value="squareMiles">Square Miles</option>
      </select>
      <input type="text" onChange={handleInputChange} />
      {/* render your states here */}
      <ul>
        {filteredData
          .sort((a: StateData, b: StateData) => {
            if (a[sort as keyof StateData] > b[sort as keyof StateData]) {
              if (sort == 'name') {
                return 1;
              }
              return -1;
            } else if (
              a[sort as keyof StateData] < b[sort as keyof StateData]
            ) {
              if (sort == 'name') {
                return -1;
              }
              return 1;
            } else {
              return 0;
            }
          })
          .map((state: StateData) => {
            return (
              <li key={`state-${state.name}`}>
                State: {state.name}, pop: {state.population}, area:{' '}
                {state.squareMiles}sq/mi
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default StateList;
