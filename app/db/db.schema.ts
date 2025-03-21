import { array, boolean, digest, email, int, json, number, object, reference, references, Schema, string, text, timestamp, TypeSchema } from '@colombalink/based-db-schema'

const user: TypeSchema = {
  prefix: 'us',
  meta: {
    deletePolicy: {
      deleteItSelf: true,
      deleteRelated: [], 
    }
  },
  fields: {
    name: string, // user name used as alias "users/{name}"
    firstName: string,
    lastName: string,
    email: email, // unique
    password: digest,
    overnightStay: reference(['overnightStay'], '', "") 
  }
}


const overnightStay: TypeSchema = {
  prefix: 'os',
  meta: {
    deletePolicy: {
      deleteItSelf: true,
      deleteRelated: [], 
    }
  },
  fields: {
    name: string, // user name used as alias "users/{name}"
    roomCount: number,
    routes: references(['route'], 'Route', ""),
    bookings: references(['booking'], 'Bookings', "") 
  }
}


const gust: TypeSchema = {
  prefix: 'ug',
  meta: {
    deletePolicy: {
      deleteItSelf: true,
      deleteRelated: [], 
    }
  },
  fields: {
    name: string, // user name used as alias "users/{name}"
    firstName: string,
    lastName: string,
    email: email, // unique
    password: digest,
    bookings: references(['booking'], 'Bookings', ""), 
    currentBooking: reference(['booking'], '', "") 
  }
}




const booking: TypeSchema = {
  prefix: 'bk',
  meta: {
    deletePolicy: {
      deleteItSelf: true,
      deleteRelated: [], 
    }
  },
  fields: {
    name: string, // user name used as alias "users/{name}"
    stay: references(['overnightStay'], 'overnightStay', ""),
    from: timestamp,
    to: timestamp,
    guest: references(['guest'], '', "")
  }
}


const route: TypeSchema = {
  prefix: 'rt',
  meta: {
    deletePolicy: {
      deleteItSelf: true,
      deleteRelated: [], 
    }
  },
  fields: {
    name: string, // user name used as alias "users/{name}"
    stars: number, // 1 - 5  
    path: string
  }
}


// Rooms & Occupancy
// Meal Plan, Full or Half Board
// Number of Beds / Capacity
// Blocked Days
// Stabling
// Type of Stabling
// Number of Spaces
// With / Without Service
// Blocked Days
// Maps 1-n
// Riding Trails on Site / Circular Routes
// Carriage Routes on Site / Circular Routes
// Riding Trails / Stages to X
// Carriage Routes / Stages to X
// Costs
// Fees / Prices
// Parking
// Number of Parking Spaces


export const schema: Schema = {
  languages: ['en', 'de'],
  types: {
    user,
    overnightStay,
    gust,
    booking,
    route
  },
}
