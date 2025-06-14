function uppercaseAll(text) {
    return text.toUpperCase();
}

function sentenceCase(text) {
    const sentences = text.split(/([.!?]\s+)/);
    const modifiedSentences = [];
    for (let i = 0; i < sentences.length; i += 2) {
        const sentence = sentences[i];
        const punctuation = sentences[i + 1] || '';
        if (sentence.length > 0) {
            modifiedSentences.push(sentence[0].toUpperCase() + sentence.slice(1).toLowerCase() + punctuation);
        } else {
            modifiedSentences.push(punctuation);
        }
    }
    return modifiedSentences.join('');
}

const smallWords = ['a', 'an', 'the', 'and', 'but', 'or', 'nor', 'for', 'so', 'yet', 'in', 'on', 'at', 'by', 'with', 'from', 'of', 'to'];

function titleCase(text) {
    const words = text.split(/\s+/);
    const modifiedWords = words.map((word, index) => {
        if (index === 0 || index === words.length - 1 || !smallWords.includes(word.toLowerCase())) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word.toLowerCase();
        }
    });
    return modifiedWords.join(' ');
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "transform") {
        const activeElement = document.activeElement;
        if (activeElement.tagName === "TEXTAREA" || (activeElement.tagName === "INPUT" && activeElement.type === "text")) {
            const start = activeElement.selectionStart;
            const end = activeElement.selectionEnd;
            if (start !== undefined && end !== undefined) {
                const selectedText = activeElement.value.substring(start, end);
                let modifiedText;
                if (message.type === "uppercaseAll") {
                    modifiedText = uppercaseAll(selectedText);
                } else if (message.type === "sentenceCase") {
                    modifiedText = sentenceCase(selectedText);
                } else if (message.type === "titleCase") {
                    modifiedText = titleCase(selectedText);
                }
                activeElement.value = activeElement.value.substring(0, start) + modifiedText + activeElement.value.substring(end);
                activeElement.setSelectionRange(start, start + modifiedText.length);
            }
        } else {
            const selection = window.getSelection();
            if (selection.rangeCount > 0) {
                const range = selection.getRangeAt(0);
                const selectedText = selection.toString();
                let modifiedText;
                if (message.type === "uppercaseAll") {
                    modifiedText = uppercaseAll(selectedText);
                } else if (message.type === "sentenceCase") {
                    modifiedText = sentenceCase(selectedText);
                } else if (message.type === "titleCase") {
                    modifiedText = titleCase(selectedText);
                }
                range.deleteContents();
                range.insertNode(document.createTextNode(modifiedText));
                selection.removeAllRanges();
            }
        }
    }
});