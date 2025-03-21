import { BasedFunction } from "@colombalink/based-functions/dist"
import { BasedServerFunctionClient } from "@colombalink/based-server-cloud"


const fn: BasedFunction<BasedServerFunctionClient, any, any> = async (based, payload, ctx) => {
  const userId = 'ug001'
  const { guest } = await based.db.default.get({
    guest: {
      $id: userId,
      $all: true,
      bookings: {
        $list: {},
        $all: true
      },
      currentBooking: {
        $all: true
      },
    }
  })

  return {
    guest,
  }
}

export default fn 