import { BasedQueryFunction } from "@colombalink/based-functions/dist"
import { BasedServerFunctionClient } from "@colombalink/based-server-cloud"
import { z } from "zod"

type Output = any

const zPayload = z.object({
  filter: z.string().optional(),
})

type Payload = typeof zPayload._type


const query: BasedQueryFunction<BasedServerFunctionClient, Payload, Output> = async (based, payload, update, error) => {
  const x = await based.db.default.get({
    $list: {
      $find: {
        $traverse: 'children'
      }
    },
  })
  console.log(update)
  console.log(x)
  update(x)
  return () => { }
}

export default query 