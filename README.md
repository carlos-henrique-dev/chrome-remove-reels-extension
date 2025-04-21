# Remove Reels Extension

## Overview

This Chrome extension removes all elements on a webpage with specific class names or text content. It is designed to dynamically monitor and modify the DOM to enhance user experience by removing unwanted elements.

## Features

- Automatically removes elements with the classname `x1yztbdb x1n2onr6 xh8yej3 x1ja2u2z`.
- Dynamically monitors the DOM for new elements and removes them as they are added.
- Tracks and displays the number of removed elements in the extension popup.

## Installation

1. Clone this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top-right corner.
4. Click "Load unpacked" and select the `chrome-extension` folder.

## Usage

1. Navigate to any webpage.
2. The extension will automatically remove elements with the specified classname or text content.
3. Open the extension popup to view the counter for removed elements.

## Development

### Folder Structure

- `src/`: Contains the source code for the extension.
  - `background.js`: Handles background tasks and message passing.
  - `content.js`: Contains the logic for DOM manipulation.
  - `index.html`: The popup interface for the extension.
  - `manifest.json`: The configuration file for the Chrome extension.
  - `images/`: Contains icons for the extension.

### Scripts

- `content.js`: Monitors the DOM and removes elements dynamically.
- `background.js`: Manages the counter and communicates with the popup.

## Contributing

Feel free to fork this repository and submit pull requests for new features or bug fixes.

## License

This project is licensed under the MIT License.
