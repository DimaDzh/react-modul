import React from "react";

type MenuItemProps = {
  itemData: any[];
};

const MenuItem = ({ itemData }: MenuItemProps) => {
  return (
    <ul className="list">
      {itemData.map((item, index) => {
        return (
          <li className="list__item" key={index + Date.now()}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuItem;
