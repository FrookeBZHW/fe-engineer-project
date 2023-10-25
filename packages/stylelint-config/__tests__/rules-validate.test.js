/*
 * @Author: MoBenShiWu
 * @Date: 2023-10-04 21:02:37
 * @LastEditors: MoBenShiWu
 * @LastEditTime: 2023-10-18 20:50:42
 * @FilePath: /fe-engineer/lerna-demo/packages/stylelint-config/__tests__/rules-validate.test.js
 */
const assert = require('assert');
const stylelint = require('stylelint');
const path = require('path')

console.log('用户包管理信息', process.env.npm_config_user_agent);

describe('test/rules-validate.test.js', () => {
    it('Validate css', async () => {
        // 找到待测试css文件
        const filePaths = [path.join(__dirname, './fixtures/index.css')];
        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../index.js'),
            files: filePaths,
            fix: false, // 开启为一键修复可自动修复的内容
        });

        console.log(result);

        // defaultSeverity/*  */ warning时errored为false
        if (result?.errored) {
            // 如果有错 查看output中警告内容
            const filesResult = JSON.parse(result.output || '[]') || [];
            console.log('filesResult===');
            console.log(filesResult);

            filesResult.forEach(fileResult => {
                console.log(`========= ${filePaths} ==========`);
                console.log(fileResult.warnings);
            })
            // > 0 表示符合预期
            assert.ok(filesResult.length > 0);
        }

    })

    it('Validate scss', async () => {
        const filePaths = [path.join(__dirname, './fixtures/index.scss')];
        const result = await stylelint.lint({
            configFile: path.join(__dirname, '../index.js'),
            files: filePaths,
            fix: false
        })
        console.log('scss============');
        console.log(result);

        // defaultSeverity warning时errored为false
        if (result?.errored) {
            const filesResult = JSON.parse(result.output || '[]') || [];
            console.log('scss filesResult===');
            console.log(filesResult);

            filesResult.forEach(fileResult => {
                console.log(fileResult.warnings);
            })
        }
    })
})