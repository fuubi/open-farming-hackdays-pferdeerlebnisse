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
    name: "Stone Ranch",
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
    ],

    location: {
      lon: 2638332.313276,
      lat: 1261373.902711
    }
  })


  await based.db.default.set({
    $id: 'os002',
    name: "Brogli Horsefarm Schweiz",
    roomCount: 3,
    bookings: [
    ],
    routes: [
    ],
    location: {
      lon: 2650144.905130,
      lat: 1259839.399965
    }
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


  // routes
  await based.db.default.set({
    $id: "r1001",
    target: "os001",
  })

  await based.db.default.set({
    $id: "r1002",
    target: "os002",
  })


  await based.db.default.set({
    $id: "r0001",
    file: "stone-1.gpx"
  })


  await based.db.default.set({
    $id: 'rt001',
    segments: [
      { $id: "r1001" },
      { $id: "r0001" },
      { $id: "r1001" },
    ]
  }
  )

  return {
    hello: "world"
  }
}

export default fn 