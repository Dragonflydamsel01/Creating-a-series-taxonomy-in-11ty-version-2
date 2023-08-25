module.exports = function (collection) {
  return collection
    .getFilteredByGlob(["./content/posts/*.html", "./content/posts/*.md"])
    .reverse();
};
