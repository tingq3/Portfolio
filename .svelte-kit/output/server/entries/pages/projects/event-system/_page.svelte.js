import { f as ensure_array_like, e as escape_html, h as attr, c as pop, p as push } from "../../../../chunks/index.js";
import { H as Header } from "../../../../chunks/Header.js";
import { b as buildTagHref } from "../../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  const project = {
    title: "Event-Driven Kafka-like Simulation",
    goals: "The system models topics, producers, consumers, partitions, and consumer groups. It supports message publishing, partition balancing, and consumer assignment logic—mirroring real-world message queue behavior.",
    dev: "This project enforces rigorous Git practices, including detailed commit messages, frequent pushes, and strict branch management. All functionality is developed and tested incrementally via structured command-line interactions simulating real-world distributed systems.",
    tags: {
      Languages: ["Javascript", "Typescript"],
      Skills: [
        "Event-Driven-Architecture",
        "Concurrency",
        "Backend",
        "Test-Driven-Development",
        "Version-Control"
      ],
      Status: "Complete"
    }
  };
  const each_array = ensure_array_like(Object.entries(project.tags));
  Header($$payload, { path: "projects/event-system" });
  $$payload.out += `<!----> <main class="container"><h2>${escape_html(project.title)}</h2> <p>A terminal-based simulation inspired by Kafka’s event-streaming model, built for <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2024/COMP1531" target="_blank">COMP1531 group assignment</a>.</p> <h3>Project goals</h3> <p>${escape_html(project.goals)}</p> <h3>Developing</h3> <p>${escape_html(project.dev)}</p> <p>As this project was a university project, the source code is not public. However, I am able to grant access to potential employers on request.</p> <!--[-->`;
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
      $$payload.out += `<span class="pill status complete">${escape_html(value)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
