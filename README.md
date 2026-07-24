# 吕同学的个人网站

这是《Web 开发实训》作业中的个人展示网站，基于 Jekyll 和 `modern-resume-theme` 构建，已通过 GitHub Pages 发布并完成桌面端与移动端验收。

- 仓库：`824man824-bit/personal-resume`
- 站点地址：<https://824man824-bit.github.io/personal-resume/>
- 页面结构：Hero、About、Skills、Projects、Contact

## 主要修改

- 将模板的站点路径、姓名、个人定位和 GitHub 用户名替换为已确认信息。
- 用真实简介和技能分组替换模板人物与占位内容。
- 展示“粤港澳大湾区低空经济产业孵化与区域攀比政策分析”课程项目，并保留样本、模型和显著性限定。
- 移除模板电话、示例邮箱、无关社交账号、示例项目、示例链接和推荐人占位内容。
- 配置独立的 Contact 区域，只提供已确认的 GitHub 与邮箱入口。
- 完成桌面端、移动端、链接、图片、内容、隐私和横向溢出检查，并将验收截图保存在 `screenshots/`。

## 验收与报告

- 最终报告：[`report/final-report.md`](report/final-report.md)
- 验收清单：[`docs/checklist.md`](docs/checklist.md)
- 阶段记录：[`docs/progress.md`](docs/progress.md)
- 截图证据：`screenshots/homepage-desktop.png`、`screenshots/homepage-mobile.png`、`screenshots/github-pages.png`、`screenshots/checklist.png`

## 本地运行

需要 Ruby、Bundler 和项目依赖。

```powershell
bundle install
bundle exec jekyll serve
```

浏览器访问 <http://localhost:4000/personal-resume/>。修改 `_config.yml` 后需要重新启动 Jekyll 服务。

也可使用仓库内的 Docker Compose 配置：

```powershell
docker compose up
```

## 隐私说明

- 默认不公开手机号、出生日期、性别、政治面貌、本地文件路径或任何凭据。
- 网站只使用用户确认公开的称呼、定位、简介、技能、项目摘要、GitHub 和邮箱。
- 头像仅使用用户确认的简历头像居中裁剪版本；不提交原始简历页面，不进行生成式重绘、美颜、换脸或背景替换。
- 课程论文、原始数据和项目源代码只用于事实核对，未经单独授权不公开。

## 模板与许可

本项目保留原模板名称 `modern-resume-theme`。原模板仓库：<https://github.com/sproogen/modern-resume-theme>。

本项目沿用原模板的 [MIT License](LICENSE)。
