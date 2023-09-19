module.exports = {
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']],
    },
};