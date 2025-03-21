import { BasedFunction } from "@colombalink/based-functions/dist"
import { BasedServerFunctionClient } from "@colombalink/based-server-cloud"


const fn: BasedFunction<BasedServerFunctionClient, any, any> = async (based, payload, ctx) => {
  console.log(based)



  await based.db.default.set({
    $id: 'bk001',
    from: 1000,
    to: 2000
  })

  await based.db.default.set({
    $id: 'rt001',
    name: "Route 1",
    stars: 4
  })


  const r = await based.db.default.set({
    $id: 'os001',
    name: "Place 1",
    roomCount: 4,
    bookings: [
      {
        $id: "bk001"
      }
    ],
    routes: [
      {
        $id: "rt001"
      }
    ]
  })

  console.log(r)

  await based.db.default.set({
    $id: "us001",
    name: "Dani",
    overnightStay: 'os001'
  })

  const luisa = await based.db.default.set({
    $id: "ug001",
    name: "Luisa",
    bookings: [
      { $id: "bk001" }
    ],
    currentBooking: "bk001"  
  }) 

  console.log("luisa", luisa)

  return {
    hello: "world"
  }
}

export default fn 