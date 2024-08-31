## 快读开始

第一步，安装依赖：

```
pnpm install
```

第二步，将 `.env.example` 文件重命名为 `.env`，并输入你的 `OpenAI` `API_KEY`。

```
OPENAI_API_KEY=your-api-key
```

第三步，生成 `./data` 目录中文档的 Embedding：

```
pnpm run generate
```

最后，运行开发服务器：

```
pnpm run dev
```

用浏览器打开 [http://localhost:3000](http://localhost:3000) 查看结果。

## 了解更多

要了解有关前端 AI 的更多信息，请查看以下资源：

[《AI赋能前端研发》](https://ai.iamlv.cn/me.html)
