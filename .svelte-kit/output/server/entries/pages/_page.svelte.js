import { f as ensure_array_like, h as attr, i as attr_class, e as escape_html } from "../../chunks/index.js";
import { H as Header } from "../../chunks/Header.js";
function _page($$payload) {
  const sections = [
    {
      name: "Projects",
      path: "/projects",
      class: "blue"
    },
    {
      name: "Languages",
      path: "/languages",
      class: "yellow"
    },
    {
      name: "Skills",
      path: "/skills",
      class: "pink"
    }
  ];
  const each_array = ensure_array_like(sections);
  Header($$payload, { path: "portfolio" });
  $$payload.out += `<!----> <main class="container"><h2>Jack's Portfolio</h2> <p>When it comes to computer science, I have a diverse skill-set...</p> <p>Learn more about my abilities by checking out my portfolio.</p> <div class="cards"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let section = each_array[$$index];
    $$payload.out += `<a${attr("href", section.path)}${attr_class("card " + section.class)}><h3>${escape_html(section.name)}</h3></a>`;
  }
  $$payload.out += `<!--]--></div></main>`;
}
export {
  _page as default
};
