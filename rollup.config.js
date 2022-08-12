import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

const dirname = (file) => {
  const [root, folder] = file.split("/");
  return `${root}/${folder}`;
};

const config = {
  input: "src/index.ts",
  output: [
    {
      dir: dirname(packageJson.main),
      format: "cjs",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
    {
      dir: dirname(packageJson.module),
      format: "esm",
      preserveModules: true,
      preserveModulesRoot: "src",
      sourcemap: true,
    },
  ],
  plugins: [external(), resolve(), commonjs(), typescript(), postcss()],
};

export default config;
