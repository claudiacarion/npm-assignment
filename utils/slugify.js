export const slugify = (str) =>
  str
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')