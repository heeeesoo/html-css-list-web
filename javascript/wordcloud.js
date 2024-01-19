const text = `
    Congresswoman Marjorie Taylor Greene was furious on Thursday after Congress passed a '
    bill that will prevent a partial government shutdown.
    shutdown shutdown shutdown shutdown
    shutdown shutdown shutdown shutdown shutdown
    shutdown shutdown shutdown shutdown shutdown

    Ms Greene told The Independent that she opposed enacting a continuing resolution — necessary 
    to avoid this weekend's deadline to have budgets in place — based on her opposition to US funding for Ukraine in its defence against Russia.

    The Democratic-led Senate voted 77-18, and the Republican-led House follo
    She then claimed the war in Ukraine was "pretty much over."

    The vote split the House GOP in half, with 107 members voting for the bill, and 106 opposing its passage.
    Republicans have long opposed continuing resolutions and a handful of conservatives joined a motion to 
    vacate former speaker Kevin McCarthy when he passed a continuing resolution in September. In response, his replacement, Speaker Mike Johnson, 
    pledged that he would not govern through continuing resolutions.
    Rather, shortly after his election, Mr Johnson shepherded the passage of a “laddered CR” where part of the 
    government spending would lapse on 19 January and the other half on 2 February.wed suit, voting 314-108, in favour of the bill.
`;

// Function to process the text and create a word frequency map
function generateWordFrequency(text) {
const words = text.toLowerCase().match(/\b\w+\b/g);
const frequencyMap = {};

words.forEach(word => {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
});

return frequencyMap;
}

// Function to render the word cloud on the canvas
function renderWordCloud(canvasId, wordFrequency) {
const canvas = document.getElementById(canvasId);
const ctx = canvas.getContext('2d');

// Clear the canvas
ctx.clearRect(0, 0, canvas.width, canvas.height);

// Set font and other styles
const maxFont = 30;
const minFont = 10;

const maxFrequency = Math.max(...Object.values(wordFrequency));
const minFrequency = Math.min(...Object.values(wordFrequency));

for (const [word, frequency] of Object.entries(wordFrequency)) {
    const font = minFont + (maxFont - minFont) * (frequency - minFrequency) / (maxFrequency - minFrequency);
    ctx.font = `${font}px Arial`;

    // Random color
    const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    ctx.fillStyle = color;

    // Draw the word
    ctx.fillText(word, Math.random() * canvas.width, Math.random() * canvas.height);
}
}

// Generate word frequency map
const wordFrequencyMap = generateWordFrequency(text);

// Render the word cloud
renderWordCloud('wordCloudCanvas', wordFrequencyMap);