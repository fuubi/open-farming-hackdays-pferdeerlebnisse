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
  }
}



export const schema: Schema = {
  languages: ['en', 'de'],
  types: {
    user,
  },
}
