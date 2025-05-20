import { f as ensure_array_like, h as attr, e as escape_html, k as bind_props, c as pop, p as push } from "./index.js";
function Header($$payload, $$props) {
  push();
  let segments;
  let path = $$props["path"];
  const buildHref = (arr, i) => "/Portfolio/" + arr.slice(0, i + 1).join("/");
  segments = path.split("/").filter(Boolean);
  const each_array = ensure_array_like(segments);
  $$payload.out += `<header><h1><a href="/Portfolio/" class="header-link svelte-1u6cfue">Jack's</a> `;
  if (segments.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<span class="header-span svelte-1u6cfue">/</span>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let segment = each_array[i];
    if (i < segments.length - 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", buildHref(segments, i))} class="header-link svelte-1u6cfue">${escape_html(segment.charAt(0).toUpperCase() + segment.slice(1))}</a> <span class="header-span svelte-1u6cfue">/</span>`;
    } else {
      $$payload.out += "<!--[!-->";
      $$payload.out += `<span class="inactive svelte-1u6cfue">${escape_html(segment.charAt(0).toUpperCase() + segment.slice(1))}</span>`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></h1></header>`;
  bind_props($$props, { path });
  pop();
}
export {
  Header as H
};
