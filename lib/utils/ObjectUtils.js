const ObjectUtils = {
  readPropertyDeeply (object, path) {
    let current = object;
    path.split('.').forEach(p => {
      if (current != null) current = current[p];
    });
    return current;
  }
};

module.exports = ObjectUtils;
