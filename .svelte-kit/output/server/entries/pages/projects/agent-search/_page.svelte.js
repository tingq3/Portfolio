import { f as ensure_array_like, e as escape_html, h as attr, c as pop, p as push } from "../../../../chunks/index.js";
import { H as Header } from "../../../../chunks/Header.js";
import { b as buildTagHref } from "../../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  const project = {
    title: "Search Agent 2D",
    description: "A Python-based project where an autonomous agent navigates a 2D grid, collecting items and reaching a designated goal.",
    goals: "The agent is required to explore the environment intelligently using pathfinding algorithms, manage unknown terrain, and avoid getting trapped in dead ends. The ultimate goal is to reach the target state efficiently while handling obstacles and dynamic updates.",
    dev: "This Python project involved building a search agent from scratch to explore a 2D grid environment. The agent is designed to collect items, avoid dead ends, handle unknown terrain, and reliably navigate toward the goal state using algorithms like BFS. Careful attention was paid to preventing infinite loops, logical bugs, and inefficient pathfinding.",
    tags: {
      Languages: ["Python"],
      Skills: ["Search Algorithms", "Pathfinding"],
      Status: "Inactive"
    },
    links: {
      github: "https://github.com/tingq3/searchAgent2D"
    }
  };
  const each_array = ensure_array_like(Object.entries(project.tags));
  Header($$payload, { path: "projects/agent-search" });
  $$payload.out += `<!----> <main class="container"><h2>${escape_html(project.title)}</h2> <p>${escape_html(project.description)}</p> <h3>Project goals</h3> <p>${escape_html(project.goals)}</p> <h3>Developing</h3> <p>${escape_html(project.dev)}</p> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
    let [key, value] = each_array[$$index_1];
    $$payload.out += `<h3>${escape_html(key)}</h3> <div class="tags">`;
    if (Array.isArray(value)) {
      $$payload.out += "<!--[-->";
      const each_array_1 = ensure_array_like(value);
      $$payload.out += `<!--[-->`;
      for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
        let tag = each_array_1[$$index];
        $$payload.out += `<a${attr("href", buildTagHref(key, tag))} class="pill">${escape_html(tag)}</a>`;
      }
      $$payload.out += `<!--]-->`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span class="pill status incomplete">${escape_html(value)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--> <div class="links"><div><img src="/github.png" alt="GitHub"> <p><strong>View the code on GitHub</strong><br> <a${attr("href", project.links.github)} target="_blank">your-user/search-agent</a></p></div></div></main>`;
  pop();
}
export {
  _page as default
};
