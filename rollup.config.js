import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: {
    polyfill: "src/addon/polyfill.ts",
    backgroundWorker: "src/addon/worker.ts"
  },
  output: {
    entryFileNames: "[name].js",
    dir: "./out"
  },
  watch: process.env.BUILD === "development",
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    process.env.BUILD !== "development"
      ? terser({
          format: {
            comments: false
          }
        })
      : undefined
  ]
};
