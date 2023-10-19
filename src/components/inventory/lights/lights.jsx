import InventoryCardList from '../util/inventoryCardList'
import './lights.css'
import studiolights from '../../../../public/data/studiolights.json'
import lightsaccess from '../../../../public/data/lightsaccess.json'

import React from 'react'

const Lights = () => {
    return (
        <div id='lightsSec'>
            <div className="lightsFullContent">
                <h2 className="title">Lights</h2>
                <div className="lightsDescription">
                    Studio lights are essential tools in the world of photography and videography, playing a pivotal role in achieving professional-quality results. 
                    These versatile lighting systems are designed to provide consistent and controllable illumination, 
                    allowing photographers and filmmakers to shape and enhance their subjects with precision.
                </div>
                <h3 className="lightsTypeTitle">Studio Lights:</h3>
                <div className="lightsCards">
                    <InventoryCardList items = {studiolights}/>
                </div>
                <h3 className="lightsTypeTitle">Lights Accessories:</h3>
                <div className="lightsCards">
                    <InventoryCardList items = {lightsaccess}/>
                </div>
            </div>
        </div>
    )
}

export default Lights