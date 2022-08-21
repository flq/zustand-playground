import React from "react";
import { useAppStore } from "./AppStore";
import styles from "./App.module.css";

export function HeaderDisplay() {
  const { title } = useAppStore(a => a.header);
  const changeHeader = useAppStore(a => a.changeHeader);
  return (
    <header className={styles.header}>
      <label>This is the data header:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => changeHeader(e.target.value)}
      />
    </header>
  );
}
