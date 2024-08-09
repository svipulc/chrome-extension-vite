# Chrome Extension Boilerplate with React, TypeScript, and Vite

This project is a boilerplate for creating Chrome extensions using React, TypeScript, and Vite. It provides a modern development environment with hot module replacement (HMR) for a smoother development experience.

## Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React** - A popular library for building user interfaces
- 🔷 **TypeScript** - For type-safe code
- 🧩 **Chrome Extension Manifest V3** - The latest manifest version for Chrome extensions

## Prerequisites

- Node.js (version 14 or newer)
- npm or yarn
- Google Chrome browser

## Getting Started

1. Clone this repository:

   ```markdown
   git clone https://github.com/svipulc/chrome-extension-vite.git
   ```

2. Navigate to the project directory:

   ```markdown
   cd chrome-extension-boilerplate
   ```

3. Install dependencies:

   ```markdown
   npm install
   ```

   or

   ```markdown
   yarn
   ```

4. Start the development server:

   ```markdown
   npm run dev
   ```

   or

   ```markdown
   yarn dev
   ```

5. Load the extension in Chrome:
   - Open Chrome and navigate to `chrome://extensions`
   - Enable "Developer mode" in the top right corner
   - Click "Load unpacked" and select the `dist` folder in your project directory

## Project Structure

```markdown
├── public/
│ ├── manifest.json
│ └── icon.png
├── src/
│ ├── popup/
│ │ ├── Popup.tsx
│ │ └── index.html
│ ├── options/
│ │ ├── Options.tsx
│ │ └── index.html
│ ├── background/
│ │ └── index.ts
│ ├── components/
│ ├── utils/
│ └── content/
│ └── index.ts
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Building for Production

To create a production build, run:

```markdown
npm run build
```

or

```markdown
yarn build
```

This will generate a `dist` folder with your compiled extension, ready to be published to the Chrome Web Store.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details. converte thi
