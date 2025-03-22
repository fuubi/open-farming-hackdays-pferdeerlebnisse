import { BasedFunction } from "@colombalink/based-functions/dist"
import { BasedServerFunctionClient } from "@colombalink/based-server-cloud"


const fn: BasedFunction<BasedServerFunctionClient, any, any> = async (based, payload, ctx) => {
  const id = 'os001'
  const { stay } = await based.db.default.get({
    stay: {
      $id: id,
      $all: true,
      bookings: {
        $list: {},
        $all: true
      },
      routes: {
        $list: {},
        $all: true,
        segments: {
          $list: {},
          $all: true,
          target: {
            $all: true,
          }
        }
      }
    }
  })

  return {
    stay,
  }
}

export default fn 