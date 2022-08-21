import React from "react";
import { useAppStore } from "./AppStore";
import styles from "./App.module.css";
import { Data } from "./data";

export function Items() {
  const items = useAppStore(s => s.items);
  return (
    <ul className={styles.items}>
      {items.map((item, index) => (
        <Item key={index} index={index} item={item} />
      ))}
    </ul>
  );
}

function Item({ index, item }: { index: number; item: Data["items"][number] }) {
  const toggleCheckedItemAt = useAppStore(s => s.toggleCheckedItemAt);
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
