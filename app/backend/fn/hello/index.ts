import { BasedFunction } from "@colombalink/based-functions/dist"
import { BasedServerFunctionClient } from "@colombalink/based-server-cloud"
import { z } from "zod"

type Output = {
  hello: any
}

const zPayload = z.object({
  filter: z.string().optional(),
})

type Payload = typeof zPayload._type



const fn: BasedFunction<BasedServerFunctionClient, Payload, Output> = async (based, payload, ctx) => {
  console.log(payload)
  return {
    hello: "world"
  }
}

export default fn 