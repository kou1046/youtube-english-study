# youtube-english-study

専門英語学習で用いたスクリプト

## 事前準備

- node.js がホストマシンにインストールされていること．

## Quick Start

- リポジトリをクローン

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

- videoInfo.json の編集
- ビルド

```bash
npx webpack
# or yarn webpack
```

- dist フォルダに index.html が生成されています．
