import { f as ensure_array_like, e as escape_html, h as attr, c as pop, p as push } from "../../../../chunks/index.js";
import { H as Header } from "../../../../chunks/Header.js";
import { b as buildTagHref } from "../../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  const project = {
    title: "2048",
    description: "This is a small project of me and my friend recreating 2048 in C using terminal graphics, movement logic, random tile generation, and scoring.",
    tags: {
      Languages: ["C"],
      Skills: ["Modular-Programming"],
      Status: "Complete"
    },
    links: { github: "https://github.com/poko0320/2048" }
  };
  const each_array = ensure_array_like(Object.entries(project.tags));
  Header($$payload, { path: "projects/2048" });
  $$payload.out += `<!----> <main class="container"><h2>${escape_html(project.title)}</h2> <p>${escape_html(project.description)}</p> <!--[-->`;
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
  $$payload.out += `<!--]--> <div class="links"><div><img src="/github.png" alt="GitHub"> <p><strong>View the code on GitHub</strong><br> <a${attr("href", project.links.github)} target="_blank">Tingq/2048</a></p></div></div></main>`;
  pop();
}
export {
  _page as default
};
