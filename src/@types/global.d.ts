import { preloadObject } from '../../electron/preload';
export declare global {
  interface Window {
    api: typeof preloadObject;
  }
}