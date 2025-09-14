
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/frameworks" | "/frameworks/nextjs" | "/frameworks/sveltekit" | "/languages" | "/languages/c" | "/languages/html" | "/languages/javascript" | "/languages/java" | "/languages/python" | "/languages/r" | "/languages/typescript" | "/projects" | "/projects/F1pred" | "/projects/agent-search" | "/projects/dungeonmania" | "/projects/event-system" | "/projects/minifolio" | "/projects/train-sim" | "/skills" | "/skills/backend" | "/skills/concurrency" | "/skills/data-manipulation" | "/skills/data-visualization" | "/skills/design-patterns" | "/skills/event-driven-architecture" | "/skills/frontend" | "/skills/full-stack" | "/skills/game-development" | "/skills/modular-programming" | "/skills/object-oriented-programming" | "/skills/pathfinding" | "/skills/sql" | "/skills/statistical-analysis" | "/skills/test-driven-development" | "/skills/type-safety" | "/skills/version-control";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/frameworks": Record<string, never>;
			"/frameworks/nextjs": Record<string, never>;
			"/frameworks/sveltekit": Record<string, never>;
			"/languages": Record<string, never>;
			"/languages/c": Record<string, never>;
			"/languages/html": Record<string, never>;
			"/languages/javascript": Record<string, never>;
			"/languages/java": Record<string, never>;
			"/languages/python": Record<string, never>;
			"/languages/r": Record<string, never>;
			"/languages/typescript": Record<string, never>;
			"/projects": Record<string, never>;
			"/projects/F1pred": Record<string, never>;
			"/projects/agent-search": Record<string, never>;
			"/projects/dungeonmania": Record<string, never>;
			"/projects/event-system": Record<string, never>;
			"/projects/minifolio": Record<string, never>;
			"/projects/train-sim": Record<string, never>;
			"/skills": Record<string, never>;
			"/skills/backend": Record<string, never>;
			"/skills/concurrency": Record<string, never>;
			"/skills/data-manipulation": Record<string, never>;
			"/skills/data-visualization": Record<string, never>;
			"/skills/design-patterns": Record<string, never>;
			"/skills/event-driven-architecture": Record<string, never>;
			"/skills/frontend": Record<string, never>;
			"/skills/full-stack": Record<string, never>;
			"/skills/game-development": Record<string, never>;
			"/skills/modular-programming": Record<string, never>;
			"/skills/object-oriented-programming": Record<string, never>;
			"/skills/pathfinding": Record<string, never>;
			"/skills/sql": Record<string, never>;
			"/skills/statistical-analysis": Record<string, never>;
			"/skills/test-driven-development": Record<string, never>;
			"/skills/type-safety": Record<string, never>;
			"/skills/version-control": Record<string, never>
		};
		Pathname(): "/" | "/frameworks" | "/frameworks/" | "/frameworks/nextjs" | "/frameworks/nextjs/" | "/frameworks/sveltekit" | "/frameworks/sveltekit/" | "/languages" | "/languages/" | "/languages/c" | "/languages/c/" | "/languages/html" | "/languages/html/" | "/languages/javascript" | "/languages/javascript/" | "/languages/java" | "/languages/java/" | "/languages/python" | "/languages/python/" | "/languages/r" | "/languages/r/" | "/languages/typescript" | "/languages/typescript/" | "/projects" | "/projects/" | "/projects/F1pred" | "/projects/F1pred/" | "/projects/agent-search" | "/projects/agent-search/" | "/projects/dungeonmania" | "/projects/dungeonmania/" | "/projects/event-system" | "/projects/event-system/" | "/projects/minifolio" | "/projects/minifolio/" | "/projects/train-sim" | "/projects/train-sim/" | "/skills" | "/skills/" | "/skills/backend" | "/skills/backend/" | "/skills/concurrency" | "/skills/concurrency/" | "/skills/data-manipulation" | "/skills/data-manipulation/" | "/skills/data-visualization" | "/skills/data-visualization/" | "/skills/design-patterns" | "/skills/design-patterns/" | "/skills/event-driven-architecture" | "/skills/event-driven-architecture/" | "/skills/frontend" | "/skills/frontend/" | "/skills/full-stack" | "/skills/full-stack/" | "/skills/game-development" | "/skills/game-development/" | "/skills/modular-programming" | "/skills/modular-programming/" | "/skills/object-oriented-programming" | "/skills/object-oriented-programming/" | "/skills/pathfinding" | "/skills/pathfinding/" | "/skills/sql" | "/skills/sql/" | "/skills/statistical-analysis" | "/skills/statistical-analysis/" | "/skills/test-driven-development" | "/skills/test-driven-development/" | "/skills/type-safety" | "/skills/type-safety/" | "/skills/version-control" | "/skills/version-control/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/C.png" | "/dungeonmania.png" | "/favicon.png" | "/github.png" | "/globe.png" | "/HTML.png" | "/java.png" | "/javascript.png" | "/minifolio.png" | "/python.png" | "/quiz.png" | "/R.png" | "/RBCar.png" | "/search_agent.jpg" | "/Sveltekit.png" | "/train_sim.png" | "/train_sim_tick_diagram.png" | "/typescript.png" | string & {};
	}
}