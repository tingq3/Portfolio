import { f as ensure_array_like, e as escape_html, h as attr, c as pop, p as push } from "../../../../chunks/index.js";
import { H as Header } from "../../../../chunks/Header.js";
import { b as buildTagHref } from "../../../../chunks/paths.js";
function _page($$payload, $$props) {
  push();
  const project = {
    title: "Minifolio",
    description: "Minifolio is my content management system for my portfolio site, which I use to showcase my work.",
    goals: "Minifolio is designed to store your data in a flexible manner, with the full site configuration being a Git repository to allow it to be backed up easily from any system. All the portfolio data files are human-readable.",
    dev: "This project is performed on all pull requests using GitHub Actions for continuous integration.",
    tags: {
      Languages: ["JavaScript", "HTML"],
      Frameworks: ["SvelteKit"],
      Skills: ["Type safety", "Full stack", "Frontend"],
      Status: "Active"
    },
    links: {
      github: "https://github.com/tingq3/Portfolio",
      gitpage: "https://tingq3.github.io/Portfolio"
    }
  };
  const each_array = ensure_array_like(Object.entries(project.tags));
  Header($$payload, { path: "projects/minifolio" });
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
      $$payload.out += `<span class="pill status">${escape_html(value)}</span>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--> <div class="links"><div><img src="/Portfolio/github.png" alt="GitHub"> <p><strong>View the code on GitHub</strong><br> <a${attr("href", project.links.github)} target="_blank">Tingq/Minifolio</a></p></div> <div><img src="/Portfolio/globe.png" alt="Minifolio"> <p><strong>Minifolio Website</strong><br> <a${attr("href", project.links.gitpage)} target="_blank">${escape_html(project.links.gitpage)}</a></p></div></div></main>`;
  pop();
}
export {
  _page as default
};
