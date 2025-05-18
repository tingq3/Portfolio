import { f as ensure_array_like, e as escape_html, h as attr, c as pop, p as push } from "../../../../chunks/index.js";
import { H as Header } from "../../../../chunks/Header.js";
import { b as buildTagHref } from "../../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  const project = {
    title: "Javascript",
    description: "JavaScript (JS) is a versatile, lightweight, interpreted programming language primarily used to create interactive effects within web browsers. It is one of the core technologies of the World Wide Web, alongside HTML and CSS, and is used by 99% of websites on the client-side for webpage behavior.",
    tags: {
      Skills: ["Frontend", "Full stack", "Backend"]
    }
  };
  const each_array = ensure_array_like(Object.entries(project.tags));
  Header($$payload, { path: "languages/javascript" });
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
      $$payload.out += `<span class="pill status">${escape_html(value)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
