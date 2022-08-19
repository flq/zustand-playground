import create from "zustand";
import { data } from "./data";

type Store = {
  header: ReturnType<typeof data>["header"];
  items: ReturnType<typeof data>["items"];
  changeHeader(title: string): void;
  toggleCheckedItemAt(index: number): void;
};

export const useAppStore = create<Store>((set, get) => ({
  ...data(),
  changeHeader(title) {
    const { header } = get();
    set({ header: { ...header, title } });
  },
  toggleCheckedItemAt(index) {
    const { items } = get();
    const item = items[index];
    set({
      items: [
        ...items.slice(0, index),
        { ...item, checked: !item.checked },
        ...items.slice(index + 1),
      ],
    });
  },
}));
