import { BasedFunctionConfig } from '@colombalink/based-functions'
import fn from "./index.js"

export interface FnType {
  'backend:hello': typeof fn
}

export default {
  name: 'backend:hello',
  type: 'function',
  path: '/backend/:hello',
} as BasedFunctionConfig<'function', keyof FnType>