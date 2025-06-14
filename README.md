# Text Transformer Chrome Extension

A lightweight and easy-to-use Chrome extension that adds powerful text transformation capabilities to your browser's context menu. Stop manually re-typing text to fix capitalization—simply select any text, right-click, and choose the format you need.

This tool is perfect for writers, developers, students, and anyone who works with text on the web. It works seamlessly in text editors like `<textarea>` and `<input>` fields, as well as on any selectable text on a webpage.

*(Recommendation: Create a short GIF showing the extension in action and replace this text with it.)*
`![Demo GIF](demo.gif)`

## Features

-   **Seamless Context Menu Integration**: Access transformations with a simple right-click on any selected text.
-   **Multiple Transformation Cases**:
    -   **Uppercase All**: Converts the entire selected text to UPPERCASE.
    -   **Sentence Case**: Capitalizes the first letter of each sentence and converts the rest to lowercase.
    -   **Title Case**: Intelligently capitalizes the main words in a title, keeping small words like "a," "an," "the," and "in" lowercase.
-   **Works Everywhere**:
    -   **In Text Fields**: Directly modifies text within `<textarea>` and `<input>` elements without losing focus.
    -   **On Any Webpage**: Transforms static text selected in paragraphs, headings, or other elements.
-   **Lightweight & Secure**: No external libraries and minimal permissions required (`contextMenus`, `activeTab`).

## Installation

You can install this extension in any Chromium-based browser (like Google Chrome, Microsoft Edge, Brave) by following these steps:

1.  **Download the code:**
    -   Clone the repository:
        ```bash
        git clone https://github.com/Unreliable-Support/Text-Transformer-Extension.git
        ```
    -   Or, download the ZIP file and extract it to a folder on your computer.

2.  **Open your browser's extensions page:**
    -   Navigate to `chrome://extensions` in your browser.

3.  **Enable Developer Mode:**
    -   In the top-right corner of the extensions page, turn on the **"Developer mode"** toggle switch.

4.  **Load the extension:**
    -   Click the **"Load unpacked"** button that appears.
    -   In the file selection dialog, choose the folder where you cloned or extracted the project files (the folder that contains `manifest.json`).

The "Text Transformer" extension should now appear in your list of extensions and be ready to use!

## How to Use

1.  Go to any webpage.
2.  Select a piece of text with your mouse.
3.  Right-click on the selected text.
4.  Hover over the "Text Transformer" menu item.
5.  Click on "Uppercase All," "Sentence Case," or "Title Case" to instantly transform the text.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.