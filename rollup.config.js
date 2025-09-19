import fs from 'fs'
import path from 'path'
import typescript from '@rollup/plugin-typescript'

export const tsConfig = () => {
    const tsconfigPath = path.resolve("tsconfig.json")
    const raw = fs.readFileSync(tsconfigPath, "utf-8")
    const tsconfig = JSON.parse(raw)

    return tsconfig
}

export default {
  input: 'src/main.ts',
  output: {
    file: `${tsConfig().compilerOptions?.outDir}/bundle.js`,
    format: 'es',
  },
  external: ['cs_script/point_script'],
  plugins: [typescript()],
}
