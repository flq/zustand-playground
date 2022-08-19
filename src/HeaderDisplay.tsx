import React from "react";
import { useAppStore } from "./AppStore";
import styles from "./App.module.css";

export function HeaderDisplay() {
  const { header, changeHeader } = useAppStore();
  return (
    <header className={styles.header}>
      <label>This is the data header:</label>
      <input
        type="text"
        value={header.title}
        onChange={(e) => changeHeader(e.target.value)}
      />
    </header>
  );
}
