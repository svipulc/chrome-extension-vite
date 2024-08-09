import { defineConfig } from "vite"; // Import the defineConfig function from Vite
import react from "@vitejs/plugin-react"; // Import the React plugin for Vite
import { resolve } from "path"; // Import the resolve function from the path module
import { viteStaticCopy } from "vite-plugin-static-copy"; // Import the static copy plugin
import { createHtmlPlugin } from "vite-plugin-html"; // Import the HTML plugin for Vite

// Export the Vite configuration
export default defineConfig({
  plugins: [
    react(), // Add the React plugin to handle React files
    viteStaticCopy({
      // Configure the static copy plugin
      targets: [
        {
          src: resolve(__dirname, "src/static"), // Specify the source directory for static files
          dest: "", // Specify the destination directory (root of output)
        },
      ],
    }),
    createHtmlPlugin({
      // Configure the HTML plugin to generate HTML files
      pages: [
        {
          filename: "popup.html", // Name of the output HTML file
          template: "src/popup/popup.html", // Path to the HTML template
          injectOptions: {
            // Options for injecting scripts into the HTML
            data: {
              injectScript: `<script type="module" src="/popup.js"></script>`, // Script to inject into the HTML
            },
          },
        },
        {
          filename: "options.html", // Name of the output HTML file for options
          template: "src/options/options.html", // Path to the options HTML template
          injectOptions: {
            // Options for injecting scripts into the options HTML
            data: {
              injectScript: `<script type="module" src="/options.js"></script>`, // Script to inject into the options HTML
            },
          },
        },
      ],
    }),
  ],
  build: {
    rollupOptions: {
      // Configuration options for Rollup
      input: {
        // Specify entry points for the application
        popup: resolve(__dirname, "src/popup/popup.tsx"), // Entry point for the popup
        options: resolve(__dirname, "src/options/options.tsx"), // Entry point for the options page
        background: resolve(__dirname, "src/background/background.ts"), // Entry point for the background script
      },
      output: {
        // Configuration for output file naming
        entryFileNames: "[name].js", // Naming pattern for entry files
        chunkFileNames: "[name].[hash].js", // Naming pattern for chunk files with hash
        assetFileNames: "[name].[ext]", // Naming pattern for asset files
      },
    },
    outDir: "dist", // Specify the output directory for the build
  },
  resolve: {
    alias: {
      // Configure path aliases
      "@": resolve(__dirname, "src"), // Alias "@" to the "src" directory
    },
    extensions: [".tsx", ".ts", ".js"], // File extensions to resolve
  },
  css: {
    preprocessorOptions: {
      // Options for CSS preprocessor
      css: {
        additionalData: `@import "./src/styles/global.css";`, // Import global CSS file in every CSS file
      },
    },
  },
});
