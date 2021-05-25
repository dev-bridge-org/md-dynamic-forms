module.exports = {
  packages: {
    'md-dynamic-forms-material': {
      ignorableDeepImportMatchers: [
        /md-dynamic-forms-core\//,
      ]
    },
    'md-dynamic-forms-clarity': {
      ignorableDeepImportMatchers: [
        /md-dynamic-forms-core\//,
      ]
    },
    '@clr/angular': {
      ignorableDeepImportMatchers: [
        /@cds\/core\//,
      ]
    },
  },
};
