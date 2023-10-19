import Card from "./inventoryCard";
import "./inventoryCardList.css"

const InventoryCardList = ({ items }) => {
    return (
      <div className="cardList">
        {
          items.map((item, i) => {
            return (
              <Card
                title = {item.name}
                desc = {item.desc}
                image = {item.image}
                stock = {item.stock}
                link = {item.link}
                serialnumber={item.serialnumber}
              />
            );
          })
        }
      </div>
    );
  }
  
  export default InventoryCardList;