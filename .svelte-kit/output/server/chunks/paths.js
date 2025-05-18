function tagToSlug(tag) {
  return tag.toLowerCase().replace(/&/g, "and").replace(/\+/g, "plus").replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}
function buildTagHref(category, tag) {
  const base = {
    Languages: "/languages/",
    Frameworks: "/frameworks/",
    Skills: "/skills/"
  }[category] ?? "/skills/";
  return base + tagToSlug(tag);
}
export {
  buildTagHref as b
};
