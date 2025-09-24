import alias from '@rollup/plugin-alias';
import typescript from '@rollup/plugin-typescript';
import tsConfig from '../tsconfig.json' with { type: 'json' };

console.log(
  tsConfig.compilerOptions.paths
    ? Object.entries(tsConfig.compilerOptions.paths).map(([key, value]) => {
        const find = key.replace('/*', '');
        const replacement = value[0].replace('/*', '');
        return { find, replacement };
      })
    : [],
);

/** @type {import('rollup').RollupOptions} */
const options = {
  input: 'src/index.ts',
  output: {
    file: `${tsConfig.compilerOptions.outDir}/bundle.js`,
    format: 'es',
  },
  external: ['@cs_script/point_script'],
  plugins: [
    typescript(),
    alias({
      entries: tsConfig.compilerOptions.paths
        ? Object.entries(tsConfig.compilerOptions.paths).map(([key, value]) => {
            const find = key.replace('/*', '');
            const replacement = value[0].replace('/*', '');
            return { find, replacement };
          })
        : [],
    }),
  ],
};

export default options;
