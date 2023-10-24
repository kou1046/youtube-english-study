# youtube-english-study

専門英語学習で用いた html を生成するリポジトリです．
![images](https://github.com/kou1046/youtube-english-study/blob/images/output.gif)

## 事前準備

- node.js がホストマシンにインストールされていること．

## Quick Start

- リポジトリを以下のコマンドでクローン, もしくは zip でダウンロードします．

```
git clone https://github.com/kou1046/youtube-english-study.git
```

- プロジェクト直下に移動し，依存関係のインストール

```bash
npm install

# or ↓
# npm install -g yarn
# yarn
```

- ./public/videoInfo.json の videoId や flashCards プロパティを適宜追加，編集してください．

- 編集が終わったら以下のコマンドでビルドを行います．

```bash
npx webpack
# or yarn webpack
```

- dist フォルダに index.html が生成されています．
