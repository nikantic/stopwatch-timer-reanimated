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

export enum CLOCK_TYPES {
	STOPWATCH,
	TIMER
}

export interface ITime {
	minutes: number;
	seconds: number;
	miliseconds: number;
}

export interface IAppContext {
	play: boolean;
	reset: boolean;
}

export interface IControls {
	play: () => void;
	reset: () => void;
	new?: () => void;
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
		window.clearInterval(this.interval);
	}
}
