module.exports = {
  extends: [
      './eslint-config/base',
      './eslint-config/import',
      './eslint-config/unicorn'
  ],
  rules: {
    'no-undef': 'off',
    'import/no-named-as-default-member': 'off'
  }
};
