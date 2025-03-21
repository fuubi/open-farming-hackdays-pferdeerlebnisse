import { parseDbSchema, saveOnShutdown, SelvaClusterSpec, startSelvaCluster } from '@colombalink/based-server-cloud'

const spec = new SelvaClusterSpec()
spec.dir = './.tmp'
spec.registryPort = 9000
const server = await startSelvaCluster(spec)

await server.startOrigin("default")
const db = await server.getDb("default")

const { schema } = await parseDbSchema("./db.schema.ts");
await db.updateSchema(schema)

saveOnShutdown(server.getOrigin("default"))