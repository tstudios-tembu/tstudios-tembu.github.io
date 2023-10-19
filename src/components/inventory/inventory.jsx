import Cameras from './cameras/cameras'
import './inventory.css'

import React from 'react'
import Lens from './lens/lens'

const Inventory = () => {

    return (
        <div id='inventorySec'>
            <Cameras/>
            <Lens/>
            
            
        </div>
    )
}

export default Inventory