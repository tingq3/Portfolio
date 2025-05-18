import { f as ensure_array_like, h as attr, i as attr_class, e as escape_html, j as stringify } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/Header.js";
function _page($$payload) {
  const sections = [
    {
      name: "SvelteKit",
      path: "/frameworks/sveltekit",
      class: "yellow",
      description: "SvelteKit is a concise and feature-rich framework for building powerful and fun web apps.",
      img: "/Sveltekit.png"
    }
  ];
  const each_array = ensure_array_like(sections);
  Header($$payload, { path: "frameworks" });
  $$payload.out += `<!----> <main class="container"><h2>Frameworks</h2> <p>These are the frameworks that I have experience with.</p> <div class="cards"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let section = each_array[$$index];
    $$payload.out += `<a${attr("href", section.path)}${attr_class("card " + section.class)}><img${attr("src", section.img)}${attr("alt", `${stringify(section.name)} icon`)}> <div class="card-content"><h3>${escape_html(section.name)}</h3> <p>${escape_html(section.description)}</p></div></a>`;
  }
  $$payload.out += `<!--]--></div></main>`;
}
export {
  _page as default
};
