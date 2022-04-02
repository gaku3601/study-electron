export declare global {
  interface Window {
    myAPI: {
      counter: (count: number) => number;
      send: (channel: string, ...args: any[]) => void;
    };
  }
}