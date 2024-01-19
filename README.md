# html-css-list-web

### Trouble shootings
<hr />
1. javascript에 json 파일 안불러와졌던 에러

- js 파일에
   import cardData from '/utils/data/cardData.json' assert{ type: "json"} ;

- html 파일에
   <script src="../javascript/main.js" type="module" defer></script>
   <br/>
   type="module" 추가

   <br/>

   그냥 파일 index.html 불러오면 cors 에러 남.
   -> 라이브 서버로 돌려야 json 파일 불러와짐

   <img width="539" alt="스크린샷 2024-01-19 오후 2 23 23" src="https://github.com/heeeesoo/html-css-list-web/assets/73633272/fcdfc2a7-cb9d-4224-aa00-e56e211e3cad">

2. word cloud에 한글 안나오는 문제
   <br/>
   정규 표현식 변경
   <br/>
   /\b\w+\b/g
   <br/>

   /[\wㄱ-ㅎ가-힣]+/g
   <br/>

  <img width="354" alt="스크린샷 2024-01-19 오후 4 06 45" src="https://github.com/heeeesoo/html-css-list-web/assets/73633272/72400ced-ab79-42bf-b8f8-bbe476789e33">

