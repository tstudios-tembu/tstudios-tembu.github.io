import Cameras from './cameras/cameras'
import './inventory.css'

import React from 'react'
import Lens from './lens/lens'
import Lights from './lights/lights'

const Inventory = () => {

    return (
        <div id='inventorySec'>
            <Cameras/>
            <Lens/>
            <Lights/>
            
        </div>
    )
}

export default Inventory