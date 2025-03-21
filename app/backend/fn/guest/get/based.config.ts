import { BasedFunctionConfig } from '@colombalink/based-functions'
import fn from "./index.js"

export interface FnType {
  'guest:get': typeof fn
}


export default {
  name: 'guest:get',
  type: 'function',
  path: '/guest/get',
} as BasedFunctionConfig<'function', keyof FnType>