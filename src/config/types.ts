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

export interface IControls {
	play: () => void;
	reset: () => void;
	new?: () => void;
	edit?: (newTime: ITime) => void;
	openModal?: (open: boolean) => void;
}

export interface IContext {
	play: boolean;
	reset: number;
	controls: IControls;
}

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
