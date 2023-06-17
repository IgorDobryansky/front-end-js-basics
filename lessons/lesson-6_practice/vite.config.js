import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // main config object
  root: "src/", // change root path from 'project root' to 'project root/src'
  build: {
    // configure build options
    outDir: "../build", // change build folder to 'docs
    minify: "esbuild" // minify build with 'esbuild
  },
  server: {
    // configure dev server
    open: true, // open on start
    port: 3000 // port
  }
});
