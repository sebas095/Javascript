const getDependencies = (tree, result = []) => {
  let dependencies = tree && tree.dependencies || [];

  Object.keys(dependencies).forEach(dep => {
    const key = `${dep}@${tree.dependencies[dep].version}`;
    if (result.indexOf(key) === -1) result.push(key);
    getDependencies(tree.dependencies[dep], result);
  });

  return result.sort();
};

module.exports = getDependencies;
