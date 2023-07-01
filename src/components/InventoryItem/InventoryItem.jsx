import css from "./InventoryItem.module.css";

const InventoryItem = ({ name, price }) => {
  return (
    <div>
      <h3 className={css.InventoryItemName}>{name}</h3>
      <hr />
      <p className={css.InventoryItemPrice}>{price}</p>
    </div>
  );
};

export default InventoryItem;
