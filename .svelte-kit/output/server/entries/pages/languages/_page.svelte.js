import { f as ensure_array_like, h as attr, i as attr_class, e as escape_html, j as stringify } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/Header.js";
function _page($$payload) {
  const sections = [
    {
      name: "Python",
      path: "/languages/python",
      class: "yellow",
      description: "General-purpose language with simple syntax.",
      img: "/python.png"
    },
    {
      name: "JavaScript",
      path: "/languages/javascript",
      class: "pink",
      description: "Used for dynamic web applications.",
      img: "/javascript.png"
    },
    {
      name: "Java",
      path: "/languages/java",
      class: "orange",
      description: "Object-oriented programming language for enterprise apps.",
      img: "/java.png"
    },
    {
      name: "C",
      path: "/languages/c",
      class: "blue",
      description: "Low-level language for systems and performance.",
      img: "/C.png"
    },
    {
      name: "R",
      path: "/languages/r",
      class: "red",
      description: "R is a powerful language for statistical computing and graphics",
      img: "/R.png"
    },
    {
      name: "HTML",
      path: "/languages/html",
      class: "skyblue",
      description: "HTML is the standard markup language used to create web pages",
      img: "/HTML.png"
    },
    {
      name: "TypeScript",
      path: "/languages/typescript",
      class: "green",
      description: "Typescript is designed for developing large applications and transpiles to JavaScript",
      img: "/typescript.png"
    }
  ];
  const each_array = ensure_array_like(sections);
  Header($$payload, { path: "Portfolio/languages" });
  $$payload.out += `<!----> <main class="container"><h2>Languages</h2> <p>These are the programming languages I use regularly.</p> <div class="cards"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let section = each_array[$$index];
    $$payload.out += `<a${attr("href", section.path)}${attr_class("card " + section.class)}><img${attr("src", section.img)}${attr("alt", `${stringify(section.name)} icon`)}> <div class="card-content"><h3>${escape_html(section.name)}</h3> <p>${escape_html(section.description)}</p></div></a>`;
  }
  $$payload.out += `<!--]--></div></main>`;
}
export {
  _page as default
};
