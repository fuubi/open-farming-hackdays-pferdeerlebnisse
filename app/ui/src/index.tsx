import { createRoot } from 'react-dom/client'
import './index.css'
import { BackendClient } from '@ofhp/app-backend'

import based, { AuthState, BasedClient } from "@colombalink/based-client";

let rootEl = document.getElementById('root')
if (!rootEl) {
  rootEl = document.createElement('div')
  rootEl.id = 'root'
  document.body.appendChild(rootEl)
}

// const Root = () => {
//   return (
//       <ClientsContext options={config} >
//         <Authorizer FallbackPublicRoutes={PublicFallback}>

//         </Authorizer>
//       </ClientsContext>
//   )
// }

const Root = () => {
  return <div>hello .</div>
}

const root = createRoot(rootEl)
root.render(<Root />)


const client = based({ url: "ws://localhost:8001", env: 'app' }, {maxCacheSize: 0}) as BackendClient
client.queries['db:getAll'].query({}).subscribe((data) => {
  console.log(data)
})