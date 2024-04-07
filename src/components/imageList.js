import React, { useEffect, useState } from 'react'
import { AlbumnForm } from './albumnForm'
import { getallAlbums } from '../firestore'

export const ImageList = (props) => {
  const [albumns, setAlbumns] = useState();
  useEffect(() => {
    getAlbumns();
  }, [])
  const getAlbumns = async () => {
    await setAlbumns(getallAlbums());
  }
  return (
    <div className='container'>
      {
        <AlbumnForm />
      }
      {
        albumns.map((element, index) => {
          return (
            < div className='headingContainer'>
              <div onClick={props?.setshowDetailimage(false)}>Back</div>
              <div>
                <h1>{element?.id}</h1>
              </div>
            </div>
          );
        })
      }
    </div >
  )
}
