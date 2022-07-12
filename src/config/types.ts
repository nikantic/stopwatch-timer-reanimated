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

export enum COLOR_TYPES {
	WHITE = "#fff",
	BLACK = "#000",
	PRIMARY = "#9c27b0",
	SECONDARY = "#e91e63",
	INACTIVE = "#232323",
	DARK = "#111",
	GRAY = "#ccc",
}

export interface ITimerInput {
	hours: number;
	minutes: number;
	seconds: number;
	miliseconds: number;
}

export interface IControls {
	play: () => void;
	reset: () => void;
	new?: () => void;
	edit?: (newTime: number) => void;
	openModal?: (open: boolean) => void;
}

export interface IContext {
	play: boolean;
	reset: number;
	saved?: number[];
	elapsed?: {
		current: number;
	};
	controls: IControls;
}
