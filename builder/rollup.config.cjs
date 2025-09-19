const fs = require('fs')
const path = require('path')
const typescript = require('@rollup/plugin-typescript')
const alias = require('@rollup/plugin-alias')

const tsConfig = () => {
    const tsconfigPath = path.resolve("tsconfig.json")
    const raw = fs.readFileSync(tsconfigPath, "utf-8")
    const tsconfig = JSON.parse(raw)

    return tsconfig
}

module.exports = {
  input: 'src/main.ts',
  output: {
    file: `${tsConfig().compilerOptions?.outDir}/bundle.js`,
    format: 'es',
  },
  external: ['cs_script/point_script'],
  plugins: [
    typescript(),
    alias({
      entries: [
        { find: '@cs2builder', replacement: path.resolve(__dirname, 'src/builder/@cs2builder') }
      ]
    }),
  ],
}
