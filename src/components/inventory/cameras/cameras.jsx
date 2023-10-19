import InventoryCardList from '../util/inventoryCardList'
import './cameras.css'
import cameras from '../../../../public/data/cameras.json'

import React from 'react'

const Cameras = () => {
    return (
        <div id='camerasSec'>
            <div className="cameraFullContent">
                <h2 className="title">DSLR Cameras</h2>
                <div className="cameraDescription">
                Canon DSLR cameras are renowned for their exceptional image quality, versatility, and reliability. 
                These digital single-lens reflex cameras cater to a wide range of photographers, from amateurs to professionals.
                </div>
                <div className="cameraCards">
                    <InventoryCardList items = {cameras}/>
                </div>
            </div>
            
        </div>
    )
}

export default Cameras