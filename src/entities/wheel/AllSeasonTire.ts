import { injectable } from 'tsyringe';

import { Wheel } from './Wheel';

@injectable()
export class AllSeasonTire implements Wheel {
    constructor() {}

    public move: (energy: string) => string = (energy) => {
        return `${energy} and moving the all season tire!`;
    }

    public stop: () => string = () => {
        return "Stopping the all season tire!";
    }
}