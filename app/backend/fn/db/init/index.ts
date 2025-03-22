import { BasedFunction } from "@colombalink/based-functions/dist"
import { BasedServerFunctionClient } from "@colombalink/based-server-cloud"


const fn: BasedFunction<BasedServerFunctionClient, any, any> = async (based, payload, ctx) => {

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

  await based.db.default.set({
    $id: 'rt002',
    name: "Route 2",
    stars: 3
  })

  await based.db.default.set({
    $id: 'rt003',
    name: "Route 3",
    stars: 3
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
        $id: "rt001",
      },
      {
        $id: "rt002",
      },
      {
        $id: "rt003",
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
      {
        $id: "rt003",
      }
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

  await based.db.default.set({
    $id: "r0002",
    file: "stone-2.gpx"
  })

  await based.db.default.set({
    $id: 'rt002',
    segments: [
      { $id: "r1001" },
      { $id: "r0002" },
      { $id: "r1001" },
    ]
  }
  )

  await based.db.default.set({
    $id: "r0003",
    file: "stone-3.gpx"
  })

  await based.db.default.set({
    $id: 'rt003',
    segments: [
      { $id: "r1001" },
      { $id: "r0003" },
      { $id: "r1002" },
    ]
  }
  )

  return {
    hello: "world"
  }
}

export default fn 