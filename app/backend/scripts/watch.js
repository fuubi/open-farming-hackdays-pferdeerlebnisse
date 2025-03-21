import { BasedServerSpec } from '@colombalink/based-server-cloud'

let spec = new BasedServerSpec()
await spec.watchAndBuild('./fn');
