import fs from 'fs'
import path from 'path'

export const tsConfig = () => {
    const tsconfigPath = path.resolve("tsconfig.json")
    const raw = fs.readFileSync(tsconfigPath, "utf-8")
    const tsconfig = JSON.parse(raw)

    return tsconfig
}

export const removeTypes = (code) => {
  code = code.replace(/^import\s+.*?from\s+['"].*?['"]?\s*$/gm, '')

  code = code.replace(/^export\s+const\s+/gm, 'const ')
  code = code.replace(/^export\s+function\s+/gm, 'function ')
  code = code.replace(/^export\s+class\s+/gm, 'class ')
  code = code.replace(/^export\s+let\s+/gm, 'let ')
  code = code.replace(/^export\s+var\s+/gm, 'var ')
  code = code.replace(/^export\s+default\s+/gm, '')
  code = code.replace(/^export\s*\{[^}]*\}.*?\s*$/gm, '')
  
  code = code.replace(/:\s*[A-Za-z_$][A-Za-z0-9_$<>,\[\]\s]*(?=\s*[=,\)\{])/g, '')
  code = code.replace(/:\s*[A-Za-z_$][A-Za-z0-9_$<>,\[\]\s]*(?=\s*$)/gm, '')
  
  code = code.replace(/^interface\s+.*?^\}/gms, '')
  code = code.replace(/^type\s+.*?$/gm, '')
  
  code = code.replace(/^\s*$/gm, '')
  code = code.replace(/\n\n+/g, '\n')
  
  return code
}