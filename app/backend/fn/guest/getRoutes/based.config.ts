import { BasedFunctionConfig } from '@colombalink/based-functions'
import fn from "./index.js"

export interface FnType {
  'user:getRoutes': typeof fn
}


export default {
  name: 'user:getRoutes',
  type: 'function',
  path: '/user/getRoutes',
} as BasedFunctionConfig<'function', keyof FnType>