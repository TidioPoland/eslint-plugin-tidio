const defaultTidioModules = [
  'store',
  'apiData',
  'swal',
  'helpers',
  'design',
  'utils',
  'track',
  'lang',
  'chatData',
  'botsSectionHelpers',
  'upgradeHelpers'
];

const isNodeTidioModule = (modules, nodeValue) => {
  let tidioModule = false;
  for (let i = 0; i < modules.length; i += 1) {
    if (nodeValue.startsWith(modules[i])) {
      tidioModule = true;
    }
  }
  return tidioModule;
};

module.exports = {
  defaultTidioModules,
  isNodeTidioModule
};
