chrome.contextMenus.create({
    id: "textTransformer",
    title: "Text Transformer",
    contexts: ["selection"]
});

chrome.contextMenus.create({
    id: "uppercaseAll",
    parentId: "textTransformer",
    title: "Uppercase All",
    contexts: ["selection"]
});

chrome.contextMenus.create({
    id: "sentenceCase",
    parentId: "textTransformer",
    title: "Sentence Case",
    contexts: ["selection"]
});

chrome.contextMenus.create({
    id: "titleCase",
    parentId: "textTransformer",
    title: "Title Case",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "uppercaseAll") {
        chrome.tabs.sendMessage(tab.id, { action: "transform", type: "uppercaseAll" });
    } else if (info.menuItemId === "sentenceCase") {
        chrome.tabs.sendMessage(tab.id, { action: "transform", type: "sentenceCase" });
    } else if (info.menuItemId === "titleCase") {
        chrome.tabs.sendMessage(tab.id, { action: "transform", type: "titleCase" });
    }
});