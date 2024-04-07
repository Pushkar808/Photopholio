import React, { useRef } from 'react'
import { addAlbum } from '../firestore'
export const AlbumnForm = () => {
  const textHolder = useRef(null);
  const addData = async (e) => {
    e.preventDefault();
    await addAlbum(textHolder.current.value)
  }
  return (
    <div className='container'>
      <div className='albumForm'>
        <h2>Create an albumn</h2>
        {
          <form className='formContainer' onSubmit={addData}>
            <input type="text" placeholder='Albumn Name' ref={textHolder} />
            <button type="reset" style={{ backgroundColor: 'red' }}>Clear</button>
            <button type="submit" style={{ backgroundColor: 'Blue' }}>Create</button>
          </form>
        }
      </div >
    </div>
  );
}
