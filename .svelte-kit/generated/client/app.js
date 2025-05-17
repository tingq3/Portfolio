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
	() => import('./nodes/25')
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
		"/projects": [12],
		"/projects/minifolio": [13],
		"/skills": [14],
		"/skills/backend": [15],
		"/skills/concurrency": [16],
		"/skills/design-patterns": [17],
		"/skills/frontend": [18],
		"/skills/full-stack": [19],
		"/skills/object-oriented-programming": [20],
		"/skills/pathfinding": [21],
		"/skills/sql": [22],
		"/skills/test-driven-development": [23],
		"/skills/type-safety": [24],
		"/skills/version-control": [25]
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