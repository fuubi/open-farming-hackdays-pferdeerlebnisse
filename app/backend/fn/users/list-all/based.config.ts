import { BasedFunctionConfig } from '@colombalink/based-functions'
import fn from "./index.js"

export interface FnType {
  'backend:users:list-all': typeof fn
}

export default {
  name: 'backend:users:list-all',
  type: 'query',
} as BasedFunctionConfig<'query', keyof FnType>