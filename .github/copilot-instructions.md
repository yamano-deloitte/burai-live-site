# Copilot Instructions for BURAI LIVE Site

## 概要
このリポジトリは、Jekyllを用いた静的Webサイト（BURAI LIVE公式サイト）です。主な目的は企業情報・サービス紹介・問い合わせフォームの提供です。GitHub Pagesでホスティングされます。

## 主要構成
- `_config.yml`：Jekyll設定ファイル。サイト全体の構成・パス・メタ情報を管理。
- `index.md`/`about/`/`services/`/`contact/`：各ページはMarkdownで記述。JekyllがHTMLに変換。
- `_includes/`：共通パーツ（ヘッダー、フッター、フォーム等）。Liquidテンプレートで再利用。
- `_layouts/`：ページレイアウト定義。`default.html`が基本。
- `assets/`：CSS（`style.scss`）、JS（`auth.js`等）、画像。
- `_posts/`：ブログ記事（任意）。

## 開発・ビルド・デバッグ
- ローカル開発は以下で開始：
  ```bash
  bundle install
  bundle exec jekyll serve
  ```
- サイトは`http://localhost:4000`でプレビュー可能。
- CSSは`assets/css/style.scss`、JSは`assets/js/`配下で管理。
- Markdown→HTML変換はJekyllが自動で行う。

## パターン・慣習
- ページ追加は`<name>.markdown`または`<name>.md`で作成し、必要に応じて`_layouts`や`_includes`を利用。
- フォームやモーダルは`_includes`で定義し、各ページで`{% include %}`で呼び出し。
- Supabase連携は`assets/js/supabase-config.js`で設定。認証・会員機能は`auth.js`/`signup.js`/`protect.js`で実装。
- サイト多言語化は`en/`ディレクトリで英語ページを管理。

## 外部連携・依存
- Supabase：ユーザー認証・会員管理用。APIキー等は`supabase-config.js`参照。
- Ruby/Jekyll：Gemfileで依存管理。`bundle install`必須。
- GitHub Pages：デプロイは`main`ブランチにpush。

## 参考ファイル
- `README.md`：全体構成・開発手順の概要。
- `SUPABASE_SETUP.md`：Supabase設定手順。
- `_includes/contact-form.html`：問い合わせフォーム実装例。
- `assets/js/auth.js`：認証ロジック例。

## 注意事項
- 構成変更時は`_config.yml`を必ず更新。
- Liquidタグ（`{% ... %}`）やJekyllのFront Matter（`---`）記法を守る。
- MarkdownファイルはUTF-8で保存。

---

このガイドはAIエージェントが本リポジトリで即戦力となるための要点をまとめています。不明点や追加情報が必要な場合はREADME.mdや各設定ファイルを参照してください。
