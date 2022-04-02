import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  counter: (count: number) => {
    return count + 1;
  },
  send: (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args);
  },
});