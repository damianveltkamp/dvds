import { DEFAULT_EXTENSIONS } from "@babel/core";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

const packageJson = require("./package.json");

const config = {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  plugins: [
    babel({
      babelHelpers: "runtime",
      plugins: ["@babel/plugin-transform-runtime"],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    postcss(),
  ],
};

export default config;
