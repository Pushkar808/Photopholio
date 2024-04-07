import React, { useEffect, useState } from 'react'
import { AlbumnForm } from './albumnForm'
import { ImageList } from './imageList';
import { ImageTile } from './imageTile';

export const AlbumnsList = () => {
  const [showAlbumform, setShowAlbumform] = useState(false);
  const [showDetailimage, setShowDetailimage] = useState(false);

  useEffect(() => console.log(showDetailimage), [showDetailimage])
  return (
    <>
      {!showDetailimage &&
        <>
          {showAlbumform &&
            <AlbumnForm />
          }
          <div className='container'>
            <div className='headingContainer'>
              <div>
                <h1>Your albumns</h1>
              </div>
              {
                !showAlbumform &&
                <div className='Addalbumnbutton' onClick={() => setShowAlbumform(true)}>
                  <button>Add albumn</button>
                </div>
              }
              {
                showAlbumform &&
                <div className='Cancelalbumnbutton' onClick={() => setShowAlbumform(false)}>
                  <a href="#">Cancel</a>
                </div>

              }
            </div>
          </div>
          <ImageTile setshowDetailimage={setShowDetailimage} />
        </>
      }
      {
        showDetailimage &&
        <ImageList setshowDetailimage={setShowDetailimage} />
      }
    </>
  )
}
