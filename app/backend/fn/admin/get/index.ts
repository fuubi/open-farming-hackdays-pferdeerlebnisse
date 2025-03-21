import { BasedFunction } from "@colombalink/based-functions/dist"
import { BasedServerFunctionClient } from "@colombalink/based-server-cloud"


const fn: BasedFunction<BasedServerFunctionClient, any, any> = async (based, payload, ctx) => {
  const userId = 'us001'
  const { user } = await based.db.default.get({
    user: {
      $id: userId,
      $all: true,
      overnightStay: {
        $all: true,
        bookings: {
          $list: {},
          $all: true
        },
        routes: {
          $list: {},
          $all: true
        }
      },
    }
  })

  return {
    user,
  }
}

export default fn 