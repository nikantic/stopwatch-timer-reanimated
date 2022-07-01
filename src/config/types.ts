export enum ICONS {
	PLAY = "play",
	PAUSE = "pause",
	RESET = "repeat",
	ADD = "plus",
}

export enum BUTTON_TYPES {
	CIRCLE,
	RECTANGLE,
}

export interface ITime {
	minutes: number;
	seconds: number;
	miliseconds: number;
}

export const initTime: ITime = {
	minutes: 0,
	seconds: 0,
	miliseconds: 0,
};

export class INTERVAL {
	private intervalRate = 1000 / 60;
	private interval = 0;

	public startInterval(callback: Function) {
		this.clearInterval();
		this.interval = window.setInterval(callback, this.intervalRate);
	}

	public clearInterval() {
		console.log("clear", this.interval);
		window.clearInterval(this.interval);
	}
}
