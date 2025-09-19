import fs from 'fs'
import path from 'path'
import { glob } from 'glob'
import { fileURLToPath } from 'url'

import { removeTypes, tsConfig } from './utils.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.resolve(path.dirname(__filename), '..')

const tsFiles = glob.sync('src/**/*.ts', {
  ignore: ['src/**/*.d.ts', 'src/types/**/*']
})

console.log('Files:', tsFiles);

let combinedCode = ''

combinedCode += `
    import { Instance } from 'cs_script/point_script'
`

for (const file of tsFiles) {
  const fullPath = path.resolve(__dirname, file)

  const content = fs.readFileSync(fullPath, 'utf8')
  
  let cleanContent = removeTypes(content)
  
  combinedCode += `\n// === ${file} ===\n`
  combinedCode += cleanContent
  combinedCode += '\n'
}

const outputPath = path.resolve(tsConfig().compilerOptions?.outDir, 'bundle.js')
fs.mkdirSync(path.dirname(outputPath), { recursive: true })
fs.writeFileSync(outputPath, combinedCode)

console.log(`Build in: ${outputPath}`)