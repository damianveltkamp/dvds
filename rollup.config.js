import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import svgr from "@svgr/rollup";

// Import your package json
const packageJson = require("./package.json");

// Extract directory name from string
const dirname = (file) => {
  const [root, folder] = file.split("/");
  return `${root}/${folder}`;
};

const config = {
  // Define entry point
  input: "src/index.ts",
  // Define output directories and options
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
  // Add all dependencies as external so they do not compile into the bundle
  external: Object.keys(packageJson.dependencies),
  // Initialise your plugins
  plugins: [
    external(),
    resolve(),
    commonjs(),
    typescript(),
    svgr({ typescript: true }),
    postcss(),
  ],
};

export default config;
