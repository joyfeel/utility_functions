function getUrlSlug(words) {
  return words
    .replace(/\s+/g,'-')
    .toLowerCase()
}
