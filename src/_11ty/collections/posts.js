module.exports = function (collection) {
  return collection
    .getFilteredByGlob(["./src/content/posts/*.html", "./src/content/posts/*.md"])
    .reverse();
};
