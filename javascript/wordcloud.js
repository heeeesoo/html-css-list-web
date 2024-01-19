
function generateWordFrequency(canvasId) {

    const detailContentsDiv = document.querySelector('.detail-contents');
    const detailContentsDivComment = document.querySelector('.comment-display');

    // Retrieve data from session storage
    const storedData = sessionStorage.getItem('formData');
    
    // Parse the JSON string to get an array
    const dataArray = storedData ? JSON.parse(storedData) : [];
    const commentValues = dataArray.map(item => item.comment);

    // 공백으로 구분된 문자열로 변환
    const resultString = commentValues.join(' ');

    // text 가져오기
    const textContent = canvasId === 'wordCloudCanvas' ? detailContentsDiv.textContent : resultString;

    const words = textContent.toLowerCase().match(/\b\w+\b/g);
    const frequencyMap = {};

    words.forEach(word => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });


    return frequencyMap;
}

// canvas에 word cloud 그리기
function renderWordCloud(canvasId) {
    const wordFrequencyMap = generateWordFrequency(canvasId);
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    // canvas 초기화
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const maxFont = 30;
    const minFont = 10;

    const maxFrequency = Math.max(...Object.values(wordFrequencyMap));
    const minFrequency = Math.min(...Object.values(wordFrequencyMap));

    for (const [word, frequency] of Object.entries(wordFrequencyMap)) {
        const font = minFont + (maxFont - minFont) * (frequency - minFrequency) / (maxFrequency - minFrequency);
        ctx.font = `${font}px Arial`;

        // 랜덤 색
        const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        ctx.fillStyle = color;

        // word 그리기
        ctx.fillText(word, Math.random() * canvas.width, Math.random() * canvas.height);
    }
}



renderWordCloud('wordCloudCanvas');
renderWordCloud('wordCloudCanvasComment');