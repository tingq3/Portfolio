function tagToSlug(tag) {
  return tag.toLowerCase().replace(/&/g, "and").replace(/\+/g, "plus").replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}
function buildTagHref(category, tag) {
  const base = {
    Languages: "/Portfolio/languages/",
    Frameworks: "/Portfolio/frameworks/",
    Skills: "/Portfolio/skills/"
  }[category] ?? "/Portfolio/skills/";
  return base + tagToSlug(tag);
}
export {
  buildTagHref as b
};
