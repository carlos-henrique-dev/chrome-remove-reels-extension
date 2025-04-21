# Chrome Extension to Remove Elements by Class Name

This Chrome extension removes all elements from a webpage that have the classname "x1yztbdb x1n2onr6 xh8yej3 x1ja2u2z".

## Installation

1. Clone this repository to your local machine:
   ```
   git clone <repository-url>
   ```

2. Navigate to the `chrome-extension` directory:
   ```
   cd chrome-extension
   ```

3. Open Chrome and go to `chrome://extensions/`.

4. Enable "Developer mode" by toggling the switch in the top right corner.

5. Click on "Load unpacked" and select the `src` directory of the cloned repository.

## Usage

Once the extension is installed, it will automatically remove all elements with the specified classname from any webpage you visit.

## Files Overview

- **src/background.js**: Background script that manages events and communication.
- **src/content.js**: Content script that contains the logic to remove elements by classname.
- **src/manifest.json**: Manifest file that defines the extension's metadata and permissions.

## License

This project is licensed under the MIT License.