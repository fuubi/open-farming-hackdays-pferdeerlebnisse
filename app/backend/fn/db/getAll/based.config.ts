import { BasedFunctionConfig } from '@colombalink/based-functions'
import fn from "./index.js"

export interface FnType {
  'db:getAll': typeof fn
}

export default {
  name: 'db:getAll',
  type: 'query',
} as BasedFunctionConfig<'query', keyof FnType>