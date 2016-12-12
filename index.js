const loadSchema = require('@creditkarma/graphql-loader')
const validator = require('@creditkarma/graphql-validator')

loadSchema.loadSchema('./test/schema/*.graphql', (err, schema) => {
  validator.validateQueryFiles('./test/queries/*.graphql', schema, (err, results) => {
    console.log('result', results);
  })
})