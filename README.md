# html-css-list-web

### 에러 해결
1. javascript에 json 파일 안불러와졌던 에러

- js 파일에
import cardData from '/utils/data/cardData.json' assert{ type: "json"} ;

- html 파일에
<script src="../javascript/main.js" type="module" defer></script>
<br/>
type="module" 추가
