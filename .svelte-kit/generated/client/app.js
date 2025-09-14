export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/frameworks": [3],
		"/frameworks/nextjs": [4],
		"/frameworks/sveltekit": [5],
		"/languages": [6],
		"/languages/c": [7],
		"/languages/html": [8],
		"/languages/javascript": [10],
		"/languages/java": [9],
		"/languages/python": [11],
		"/languages/r": [12],
		"/languages/typescript": [13],
		"/projects": [14],
		"/projects/F1pred": [18],
		"/projects/agent-search": [15],
		"/projects/dungeonmania": [16],
		"/projects/event-system": [17],
		"/projects/minifolio": [19],
		"/projects/train-sim": [20],
		"/skills": [21],
		"/skills/backend": [22],
		"/skills/concurrency": [23],
		"/skills/data-manipulation": [24],
		"/skills/data-visualization": [25],
		"/skills/design-patterns": [26],
		"/skills/event-driven-architecture": [27],
		"/skills/frontend": [28],
		"/skills/full-stack": [29],
		"/skills/game-development": [30],
		"/skills/modular-programming": [31],
		"/skills/object-oriented-programming": [32],
		"/skills/pathfinding": [33],
		"/skills/sql": [34],
		"/skills/statistical-analysis": [35],
		"/skills/test-driven-development": [36],
		"/skills/type-safety": [37],
		"/skills/version-control": [38]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';