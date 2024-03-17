export interface Wheel {
  move: (energy: string) => string;

  stop: () => string;
}
