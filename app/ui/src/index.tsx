import { createRoot } from 'react-dom/client'
import './index.css'
import { BackendClient } from '@template/app-backend'

import based, { AuthState, BasedClient } from "@colombalink/based-client";
const client = based({ url: url.ws, env: 'app' }) as BackendClient


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
  return <div>hello ...</div>
}

const root = createRoot(rootEl)
root.render(<Root />)

