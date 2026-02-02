export {};

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any; // We can be more specific if we want, but 'any' allows flexibility for now
  }
}
