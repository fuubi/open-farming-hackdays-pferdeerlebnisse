import { BasedServerSpec, createClusterState } from '@colombalink/based-server-cloud'
import { startBasedServerInCluster } from '@colombalink/based-server-cloud'
import { waitForDbStartup } from '@colombalink/shared-dev-utils/server/waitForDbStartup.js'
import { resolve } from 'node:path/posix'

let basedServerSpec = new BasedServerSpec()
basedServerSpec.name = "app"
basedServerSpec.defaultDbName = "default"
basedServerSpec.port = 8001
await basedServerSpec.loadFunctions(resolve('./dist'))
await basedServerSpec.setFunctionsAuthAutomatically()
await basedServerSpec.generateTypes(resolve('./fn'), "Backend")
await basedServerSpec.generateKeys(process.env.APP_DATA_DIR)

const clusterState = await createClusterState()
await startBasedServerInCluster(clusterState, basedServerSpec)

const basedClient = clusterState.basedServers.get(basedServerSpec.name).client;

basedServerSpec.watchAndUpdate(resolve("./dist"), clusterState.basedServers.get(basedServerSpec.name))

await waitForDbStartup(basedClient)