import { BasedFunction } from "@colombalink/based-functions/dist"
import { BasedServerFunctionClient } from "@colombalink/based-server-cloud"


const fn: BasedFunction<BasedServerFunctionClient, any, any> = async (based, payload, ctx) => {
  console.log(based)
  const { user } = await based.db.default.get({
    user: {
      $id: 'us001',
      $all: true,
    }
  })


  const { stay } = await based.db.default.get({
    stay: {
      $id: 'os001',
      $all: true,
    }
  })

  console.log(stay)

  const all = await based.db.default.get({
    $all: true,
    instances: {
      name: true,
      type: true,
      $list: {
        $find: {
          $traverse: 'children',
        },
      },
    }
  })
  return {
    user,
    all
  }
}

export default fn 