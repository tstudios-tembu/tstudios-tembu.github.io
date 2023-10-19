import InventoryCardList from '../util/inventoryCardList'
import './cameras.css'
import cameras from '../../../../public/data/cameras.json'

import React from 'react'

const Cameras = () => {
    return (
        <div id='camerasSec'>
            <div className="cameraFullContent">
                <h2 className="title">Cameras and Camera Bodies</h2>
                <div className="cameraDescription">
                    TStudios offers a large selection of cameras for Tembusians to borrow.
                    Canon DSLR cameras are renowned for their exceptional image quality, versatility, and reliability. Note that each Canon camera body must be paired with a compatible lens.
                </div>
                <div className="cameraCards">
                    <InventoryCardList items = {cameras}/>
                </div>
            </div>
        </div>
    )
}

export default Cameras