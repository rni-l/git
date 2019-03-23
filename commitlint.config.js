module.exports = {
  extends: ['@commitlint/config-angular'],
  rules: {
    // Place your rules here
    'scope-enum': [2, 'always', ['all', 'b']] // scope，规定范围只能在数组内的文案
  }
}
