# Asfallen Logo

Asfallen Logo is a lightweight RedM resource designed to add a server logo with visual effects to your RedM server.

## Features

- Displays a customizable server logo in the top-right corner of the screen.
- Animated logo effects including rotation and sepia filter transitions.
- Easy integration with RedM servers.

## Installation

1. **Download the resource:**
   Ensure you have the following files in the resource directory:
   - `fxmanifest.lua`
   - `nui/index.html`
   - `nui/style.css`
   - `nui/script.js`
   - `nui/logo.png` (replace with your desired logo image).

2. **Add the resource to your RedM server:**
   - Place the `asfallen-logo` folder in your server's `resources` directory.

3. **Update your server configuration:**
   - Add the following line to your server configuration file (`server.cfg`):
     ```plaintext
     ensure asfallen-logo
     ```

4. **Customize if needed:**
   - Replace the `logo.png` file in the `nui` directory with your custom logo image.
   - Edit `style.css` and `script.js` to adjust animations or styles as desired.

## File Overview

### fxmanifest.lua
The manifest file for RedM specifying resource details and dependencies.

### nui/index.html
Defines the HTML structure for the UI, including the container for the server logo.

### nui/style.css
Contains CSS styles and animations for the logo.

### nui/script.js
Implements JavaScript for dynamic animations on the logo.

### nui/logo.png
Placeholder image for the server logo. Replace with your custom image.

## Compatibility

- RedM (RDR3)
- Requires `cerulean` fx_version.

## Author

- Created by **Asfallen**.

## License

This project is licensed under the MIT License. Feel free to modify and distribute as needed.

---

For any issues or suggestions, feel free to contact the author or open an issue on the project's repository.
