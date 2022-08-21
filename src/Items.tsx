import React from "react";
import { useAppStore } from "./AppStore";
import styles from "./App.module.css";

export function Items() {
  const items = useAppStore(
    (s) => s.items,
    (prev, curr) => prev.length === curr.length
  );
  return (
    <ul className={styles.items}>
      {items.map((_, index) => (
        <Item key={index} index={index} />
      ))}
    </ul>
  );
}

function Item({ index }: { index: number }) {
  const { toggleCheckedItemAt, item } = useAppStore(
    ({ toggleCheckedItemAt, items: { [index]: item } }) => ({
      toggleCheckedItemAt,
      item,
    }),
    ({ item: prev }, { item: curr }) => prev === curr
  );
  return (
    <li className={styles.item}>
      <h3>{item.text}</h3>
      <label>Is Checked:</label>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => toggleCheckedItemAt(index)}
      />
    </li>
  );
}
