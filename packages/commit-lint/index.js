/*
 * @Author: MoBenShiWu
 * @Date: 2023-09-19 22:43:00
 * @LastEditors: MoBenShiWu
 * @LastEditTime: 2023-10-28 23:55:12
 * @FilePath: /fe-engineer/lerna-demo/packages/commit-lint/index.js
 */
module.exports = {
    // 配置用于解析提交消息的preset
    parserPreset: 'conventional-changelog-conventionalcommits',
    rules: {
        'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore']],
    },
};