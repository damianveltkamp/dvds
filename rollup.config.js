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
      dir: packageJson.main,
      exports: "named",
      preserveModules: true,
      preserveModulesRoot: "src",
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
    typescript(),
    postcss(),
    commonjs(),
  ],
};

export default config;
