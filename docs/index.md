# 编码规范工程化

## 不同场景使用规范工具

1. React、Vue、JS、TS：`eslint`
2. CSS、CSS预处理工具：`stylelint`
3. 提交代码：`commitlint、husky`
4. markdown：`markdownlint`

提供CLI工具，收敛上述lint工具集，使得一键接入、一键升级、一键扫描。
## 技术选型

- 多包：`monorepo、lerna`
- 包管理：`pnpm`
- lint工具：`markdownlint`、`commitlint`、`stylelint`、`eslint`、`prettier`
- Cli能力
- 测试：`Jest、mocha`