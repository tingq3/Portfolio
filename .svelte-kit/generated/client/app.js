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
	() => import('./nodes/37')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/frameworks": [3],
		"/frameworks/sveltekit": [4],
		"/languages": [5],
		"/languages/c": [6],
		"/languages/html": [7],
		"/languages/javascript": [9],
		"/languages/java": [8],
		"/languages/python": [10],
		"/languages/r": [11],
		"/languages/typescript": [12],
		"/projects": [13],
		"/projects/2048": [14],
		"/projects/agent-search": [15],
		"/projects/dungeonmania": [16],
		"/projects/event-system": [17],
		"/projects/minifolio": [18],
		"/projects/train-sim": [19],
		"/skills": [20],
		"/skills/backend": [21],
		"/skills/concurrency": [22],
		"/skills/data-manipulation": [23],
		"/skills/data-visualization": [24],
		"/skills/design-patterns": [25],
		"/skills/event-driven-architecture": [26],
		"/skills/frontend": [27],
		"/skills/full-stack": [28],
		"/skills/game-development": [29],
		"/skills/modular-programming": [30],
		"/skills/object-oriented-programming": [31],
		"/skills/pathfinding": [32],
		"/skills/sql": [33],
		"/skills/statistical-analysis": [34],
		"/skills/test-driven-development": [35],
		"/skills/type-safety": [36],
		"/skills/version-control": [37]
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