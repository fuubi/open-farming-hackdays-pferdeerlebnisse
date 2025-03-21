import { BasedFunctionConfig } from '@colombalink/based-functions'
import fn from "./index.js"

export interface FnType {
  'db:get': typeof fn
}


export default {
  name: 'db:get',
  type: 'function',
  path: '/db/get',
} as BasedFunctionConfig<'function', keyof FnType>