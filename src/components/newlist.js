import React, { useState } from 'react';

function NewList({ addNewListName }) {
  const [newListName, setNewListName] = useState('');

  const handleTitleSubmit = (event) => {
    event.preventDefault();
    addNewListName(newListName.trim());
    setNewListName('');
  };

  const handleTitleChange = (event) => {
    setNewListName(event.target.value);
  };

  return (
    <form onSubmit={handleTitleSubmit}>
      <input
        className='list-name-input'
        placeholder='Enter Your List Name'
        type="text"
        onChange={handleTitleChange}
        value={newListName}
      />
      <button type='submit'>Enter</button>
    </form>
  );
}

export default NewList;
