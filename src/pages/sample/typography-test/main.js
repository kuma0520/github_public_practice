const ratio = 1.15;
const levels = 12;
const baseLineHeight = 1.75;

function setModularScale(base, ratio, levels, baseLineHeight) {
    for (let i = 2; i >= 1; i--) {
        const fontSize = base / Math.pow(ratio, i);
        let lineHeight = baseLineHeight * (fontSize / base);
        lineHeight = Math.max(lineHeight, baseLineHeight); // line-heightがbaseLineHeightを下回らないようにする
        document.documentElement.style.setProperty(`--font-size-${3 - i}`, `${fontSize}px`);
        document.documentElement.style.setProperty(`--line-height-${3 - i}`, lineHeight.toFixed(4));
    }
    document.documentElement.style.setProperty('--font-size-3', `${base}px`);
    document.documentElement.style.setProperty('--line-height-3', baseLineHeight.toFixed(4));

    for (let i = 1; i <= levels - 3; i++) {
        const fontSize = base * Math.pow(ratio, i);
        let lineHeight = baseLineHeight * (fontSize / base);
        lineHeight = Math.min(lineHeight, baseLineHeight * 1.5); // line-heightがbaseLineHeightの1.5倍を超えないようにする
        document.documentElement.style.setProperty(`--font-size-${i + 3}`, `${fontSize}px`);
        document.documentElement.style.setProperty(`--line-height-${i + 3}`, lineHeight.toFixed(4));
    }
    updateFontSizeDisplay();
}

function updateFontSizeDisplay() {
    for (let i = 1; i <= levels; i++) {
        const element = document.querySelector(`.font-size-${i}`);
        if (element) {
            const fontSize = getComputedStyle(document.documentElement).getPropertyValue(`--font-size-${i}`).trim();
            element.textContent = `${fontSize} .font-size-${i} This is a paragraph using modular scale for typography.`;
        }
    }
}

document.getElementById('base-font-size').addEventListener('input', (event) => {
    const newBaseFontSize = parseFloat(event.target.value);
    setModularScale(newBaseFontSize, ratio, levels, baseLineHeight);
});

// 初期設定
setModularScale(16, ratio, levels, baseLineHeight);
