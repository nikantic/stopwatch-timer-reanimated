export enum ICONS {
	PLAY = "play",
	PAUSE = "pause",
	RESET = "repeat",
	ADD = "plus",
	EDIT = "edit-2",
}

export enum BUTTON_TYPES {
	CIRCLE,
	RECTANGLE,
	TEXT,
}

export enum CLOCK_TYPES {
	STOPWATCH,
	TIMER,
}

export interface ITime {
	hours: number;
	minutes: number;
	seconds: number;
}

export interface IAppContext {
	play: boolean;
	reset: boolean;
}

export interface IControls {
	play: () => void;
	reset: () => void;
	new?: () => void;
	edit?: () => void;
}

export interface IContext {
	play: boolean;
	reset: boolean;
	controls: IControls;
}

export interface ITimeInput {
	hours: string;
	minutes: string;
	seconds: string;
}

export const inputTime: ITimeInput = {
	hours: "",
	minutes: "",
	seconds: "10",
};

export const initTime: ITime = {
	hours: 0,
	minutes: 0,
	seconds: 0,
};

export const initContext: IContext = {
	play: false,
	reset: false,
	controls: {
		play: () => {},
		reset: () => {},
		new: () => {},
	},
};

export class INTERVAL {
	private intervalRate = 1000;
	private interval = 0;

	public startInterval(callback: Function) {
		this.clearInterval();
		this.interval = window.setInterval(callback, this.intervalRate);
	}

	public clearInterval() {
		window.clearInterval(this.interval);
	}
}
