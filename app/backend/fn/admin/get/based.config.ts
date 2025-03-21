import { BasedFunctionConfig } from '@colombalink/based-functions'
import fn from "./index.js"

export interface FnType {
  'admin:get': typeof fn
}


export default {
  name: 'admin:get',
  type: 'function',
  path: '/admin/get',
} as BasedFunctionConfig<'function', keyof FnType>