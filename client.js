import esbuild from 'esbuild'
import packages from './package.json' assert { type: 'json' }

esbuild.build({
    entryPoints: ['app/index.js'],
    bundle: true,
    outfile: `${packages.name}/index.js`,
    platform: 'node',
    format: 'esm',
    minify: true,
    define: {
        'process.env.NODE_ENV': '"production"'
    }
}).then(() => {
    console.log('esbuild success');
}).catch(() => process.exit(1))


