import { BasedFunctionConfig } from '@colombalink/based-functions'
import fn from "./index.js"

export interface FnType {
  'db:init': typeof fn
}

export default {
  name: 'db:init',
  type: 'function',
  path: '/db/init',
} as BasedFunctionConfig<'function', keyof FnType>