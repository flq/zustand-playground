import styles from "./App.module.css";
import { HeaderDisplay } from "./HeaderDisplay";
import { Items } from "./Items";

function App() {
  return (
    <div className={styles.app}>
      <HeaderDisplay />
      <Items />
    </div>
  );
}

export default App;
