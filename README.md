# 環境構築
https://zenn.dev/niwaringo/articles/af693596ef948e  
を参考にelectron環境を構築しただけのリポジトリ

## 上記の資料を参考にした際の注意点

tsconfig.jsonのesnextをes5に変更する必要がある。  
※こうしないとerrorになる。esnextにしたい場合babelを利用する必要がある？

```
{
  "compilerOptions": {
  "target": "es5",　// ★ ここをes5に修正する
  "module": "commonjs",
  "sourceMap": true,
  "outDir": "../build",
  "rootDir": "../"
},
  "include": ["*"]
}

```