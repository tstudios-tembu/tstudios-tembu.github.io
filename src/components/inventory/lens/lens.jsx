import InventoryCardList from '../util/inventoryCardList'
import './lens.css'
import lensEF from '../../../../public/data/lensEF.json'
import lensEFS from '../../../../public/data/lensEFS.json'

import React from 'react'

const Lens = () => {
    return (
        <div id='lensSec'>
            <div className="lensFullContent">
                <h2 className="title">Canon DSLR Camera Lenses</h2>
                <div className="lensDescription">
                Canon's EF (Electro-Focus) lenses are compatible with a wide range of Canon DSLRs, including both full-frame and APS-C sensor cameras. 
                EF-S (Short Back Focus) lenses are specifically designed for Canon's APS-C sensor cameras. 
                </div>
                <h3 className="lensTypeTitle">EF Lens - Compatible with all our Canon camera bodies:</h3>
                <div className="lensCards">
                    <InventoryCardList items = {lensEF}/>
                </div>
                <h3 className="lensTypeTitle">EF-S Lens - Compatible with only our APS-C Canon camera bodies:</h3>
                <div className="lensCards">
                    <InventoryCardList items = {lensEFS}/>
                </div>
            </div>
            
        </div>
    )
}

export default Lens