export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\+/g, 'plus')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '');
}

// Build full URL based on category and tag
export function buildTagHref(category: string, tag: string): string {
  const base = {
    Languages: '/Portfolio/languages/',
    Frameworks: '/Portfolio/frameworks/',
    Skills: '/Portfolio/skills/'
  }[category] ?? '/Portfolio/skills/';

  return base + tagToSlug(tag);
}