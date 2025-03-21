import { watch } from "@colombalink/shared-dev-build"

const rootSrcDir = `./src`;

await watch({
    mode: 'dev',
    rootSrcDir,
    distDir: './dist',
    copy: {
        resolveFrom: 'cwd',
        assets: [
            {
                from: [`${rootSrcDir}/index.html`],
                to: [`./dist/index.html`]
            },
            {
                from: [`${rootSrcDir}/public/*`],
                to: [`./dist/`]
            }
        ]
    }
})