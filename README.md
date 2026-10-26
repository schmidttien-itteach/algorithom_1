# 演算法特工訓練營

供台灣國中七至九年級使用的繁體中文演算法互動教材。作答、代號、教師設定與任務進度儲存在目前瀏覽器的 `localStorage`，不需要帳號、資料庫或外部 API。

## 本機啟動

需求：Node.js 20.19+ 或 22.12+。

```bash
npm install
npm run start
```

Vite 會顯示本機網址（通常是 `http://localhost:5173`）。

## Production build

```bash
npm run build
npm run preview
```

正式檔案輸出至 `dist/`。部署 GitHub Pages 時，若網站發布於 `https://<帳號>.github.io/<專案>/`，請在 `vite.config.js` 設定 `base: '/<專案>/'`；若發布於網域根目錄，維持 `base: './'`。部署後需確認主機支援 SPA 靜態資源路徑；目前所有頁面由單一 HTML 入口呈現。

## 主要功能

- 特工代號設定、四頁任務簡報與階段進度。
- 關卡一日常流程題、摺紙兩輪活動與三分鐘計時器。
- 可編輯、增刪、排序及預覽的摺紙步驟編輯器。
- 五把演算法鑰匙與兩道延伸挑戰，選項即時回饋。
- 經驗值、徽章、本機自動保存、教師跳關／答案檢視／課程時間設定。
- 能力參與報告、版本切換與瀏覽器列印／另存 PDF。
- 響應式版面、鍵盤焦點狀態與減少動畫設定。

## 專案結構

- `index.html`：頁面入口與中繼資料。
- `src/main.js`：頁面呈現、狀態管理及互動控制。
- `src/data.js`：題目、回饋、簡報、徽章及報告文案。
- `src/styles.css`：響應式 UI、列印樣式及動畫。
- `vite.config.js`：Vite 靜態部署基底路徑。
- `npm test`：執行題庫結構、答案索引、徽章／簡報資料及鼓勵式回饋文案測試。
- `npm run check`：執行 TypeScript 編譯器檢查設定。

## 在 Windows 使用 Chrome 開啟

不要直接雙擊 `index.html`；Chrome 會以 `file://` 開啟，而 ES module 的安全限制會阻止程式載入。請雙擊專案中的 `開啟網站.bat`，它會啟動本機 Vite 網站並開啟瀏覽器。也可以在專案資料夾的終端機執行 `npm install`，再執行 `npm run start -- --open`。
