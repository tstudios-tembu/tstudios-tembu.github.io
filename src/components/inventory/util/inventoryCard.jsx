import React from 'react'
import './inventoryCard.css'
// import "../../../assets/"

const InventoryCard = ({ title, stock, desc, image, link, serialnumber }) => {
    return (
        <a className="inventoryCard" href={link} target="_blank" rel="noreferrer noopener">
          <div className="cardImageSection">
              <img src={"images" + "/" + image} className="cardImage" alt="Icon" />
          </div>
  
          <div className="cardContent">
              <div className="cardTitleSection">
                  <h3 className="titleOfCard">{title}</h3>
              </div>
              <div className="cardDescSection">
                <div className="cardDescSec1">
                    <p className="stockOfCard"><b>Stock:</b> {stock}</p>
                    <p className="snOfCard"><b>S/N:</b> {serialnumber}</p>
                </div>
                <div className="cardDescSec2">
                    <p className="descOfCard">{desc}</p>
                </div>
              </div>
          </div>
        </a>
      );
}

export default InventoryCard