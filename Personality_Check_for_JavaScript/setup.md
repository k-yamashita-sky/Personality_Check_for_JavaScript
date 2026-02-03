React 環境構築手順（Node.js版）
この手順では、Node.js をインストールし、Reactのサンプルアプリケーションを起動するまでの流れを解説します。

1. Node.js のインストール
Reactを動かすための実行環境である Node.js をインストールします。

公式サイトへアクセス

Node.js Download (en)

インストーラーのダウンロード

「Prebuilt Installer」セクションから Windows Installer (.msi) を選択してダウンロードします。

インストール

ダウンロードしたファイルを実行し、基本的にはすべて [Next]（次へ）を選択して完了させてください。

2. React プロジェクトの作成
Node.jsがインストールできたら、Reactの雛形（サンプルコード）を作成します。 ※ターミナル（PowerShellやコマンドプロンプト）を開いて実行してください。

Bash
# Reactプロジェクトの新規作成
# (react-sample-app という名前のフォルダが自動で作られます)
npx create-react-app react-sample-app
3. アプリケーションの起動
作成したプロジェクトに移動し、ローカルサーバーを起動して画面を確認します。

Bash
# 作成されたプロジェクトディレクトリへ移動
cd react-sample-app

# 開発用サーバーの起動
npm start