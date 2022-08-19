export interface Data {
  header: { title: string };
  items: { text: string; checked: boolean }[];
}

export function data(): Data {
  return {
    header: { title: "Hello There" },
    items: Array.from(
      (function* () {
        for (let i = 0; i < 4000; i++) {
          yield { text: `Hello from ${i}`, checked: i % 3 === 0 };
        }
      })()
    ),
  };
}
