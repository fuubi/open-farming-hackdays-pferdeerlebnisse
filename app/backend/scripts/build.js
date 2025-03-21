import { BasedServerSpec } from '@colombalink/based-server-cloud'
import { attachToProcessStreams } from '@colombalink/nodejs-utils/process/attachChildToProcess.js';
import { exec } from 'child_process';
import { resolve } from 'node:path/posix'

let spec = new BasedServerSpec()
await spec.buildFunctions('./fn');
await spec.generateTypes(resolve('./fn'), "Backend")

attachToProcessStreams(exec("npx tsc"));