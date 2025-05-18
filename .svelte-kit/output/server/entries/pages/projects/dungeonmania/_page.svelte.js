import { f as ensure_array_like, e as escape_html, h as attr, c as pop, p as push } from "../../../../chunks/index.js";
import { H as Header } from "../../../../chunks/Header.js";
import { b as buildTagHref } from "../../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  const project = {
    title: "Dungeon Mania",
    tags: {
      Languages: ["Java"],
      Skills: [
        "Object-Oriented-Programming",
        "Design-Patterns"
      ],
      Status: "Complete"
    }
  };
  const each_array = ensure_array_like(Object.entries(project.tags));
  Header($$payload, { path: "projects/dungeonmania" });
  $$payload.out += `<!----> <main class="container"><h2>${escape_html(project.title)}</h2> <p>Dungeon Mania is a project I created in <a href="https://www.handbook.unsw.edu.au/undergraduate/courses/2021/COMP2511" target="_blank">UNSW Comp2511 Course</a>, It is a complex dungeon crawler game which I completed as the leader of a small team of students. The game’s rules were designed to challenge our design skills, with extremely complex requirements for player and enemy movement.</p> <p>In order to implement this project, we made heavy use of design patterns and the object-oriented paradigm to encapsulate complex behaviours in simple interfaces.</p> <p>As this project was a university project, the source code is not public. However, I am able to grant access to potential employers on request.</p> <!--[-->`;
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
