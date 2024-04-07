import React from 'react'

export const ImageTile = (props) => {
    return (
        <div className='container'>
            <div className='imageContainer' onClick={() => props?.setshowDetailimage(true)}>
                <div className='image'>
                    <img src="https://mellow-seahorse-fc9268.netlify.app/assets/photos.png" width={50} height={50} alt="" />
                </div>
                <div className='heading'>
                    <h3>Sample 1</h3>
                </div>
            </div>
        </div>
    )
}
