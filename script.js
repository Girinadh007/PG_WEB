/* Matrix rain effect */
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

let cw = window.innerWidth;
let ch = window.innerHeight;

canvas.width = cw;
canvas.height = ch;

// Characters to use for the rain: mostly binary or hex, mixed with katakana for that classic feel
const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレゲゼデベペオォコソトノホモヨョロゴゾドボポヴッン'.split('');

const fontSize = 14;
let columns = Math.floor(cw / fontSize);

const drops = [];

// Initialize drops array
for (let x = 0; x < columns; x++) {
    drops[x] = Math.random() * ch; // Randomize start position so it doesn't all drop at once initially
}

// Window resize handler to rebuild columns
window.addEventListener('resize', () => {
    cw = window.innerWidth;
    ch = window.innerHeight;
    canvas.width = cw;
    canvas.height = ch;
    
    const newColumns = Math.floor(cw / fontSize);
    if (newColumns > columns) {
        // Add new columns if window got wider
        for (let i = columns; i < newColumns; i++) {
            drops[i] = Math.random() * ch;
        }
    }
    columns = newColumns;
});

function draw() {
    // Semi-transparent black background to create trail effect
    // 0.05 opacity = slower fade (longer trails)
    ctx.fillStyle = 'rgba(3, 3, 3, 0.05)';
    ctx.fillRect(0, 0, cw, ch);

    // Lime green text
    ctx.fillStyle = '#00ff41'; // Terminal green
    ctx.font = fontSize + 'px "JetBrains Mono", monospace';

    for (let i = 0; i < drops.length; i++) {
        // Pick a random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        ctx.fillText(text, x, y);

        // Reset drop to top randomly after it crosses the screen
        // Magic number 0.975 adds randomness so not all columns reset exactly at the bottom
        if (y > ch && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move drop down
        drops[i]++;
    }
}

// Run animation at ~30 FPS for a slightly retro feel
setInterval(draw, 33);
