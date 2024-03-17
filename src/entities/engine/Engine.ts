export interface Engine {
  start: () => string;

  run: () => string;

  shutDown: () => string;
}
