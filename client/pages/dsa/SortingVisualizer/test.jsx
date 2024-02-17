import React, { useState } from 'react';

function IntegerArrayInput() {
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [integerArray, setIntegerArray] = useState([]);

    const handleAddInputClick = () => {
        setInputVisible(true);
      };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const integers = inputValue.split(/[,\s]+/).map(str => parseInt(str, 10));
      setIntegerArray(integers.filter(num => !isNaN(num)));
      setInputValue('');
    };

  return (
    <div>
      {!inputVisible && (
        <button onClick={handleAddInputClick}>Add Integer Array</button>
      )}
      {inputVisible && (
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="Enter integer"
          />
          <button type='submit'>submit</button>
          <button onClick={() => setInputVisible(false)}>Cancel</button>
          <p>Array: {JSON.stringify(integerArray)}</p>
          <p>Array Length: {integerArray.length}</p>
        </form>
      )}
      
    </div>
  );
 
  
  }
 
export default IntegerArrayInput;