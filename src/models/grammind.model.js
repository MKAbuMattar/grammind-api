const mongoose = require('mongoose')

const grammindSchema = new mongoose.Schema({
  slug: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },

  pattern: {
    type: String,
    require: true,
  },

  pattern_no: {
    type: String,
    require: true,
  },

  type: {
    type: String,
    require: true,
  },

  programing_language: {
    type: String,
    require: true,
  },

  code: {
    type: String,
    require: true,
  },

  code_input_filter: {
    type: String,
    require: true,
  },

  onlinegdb_id: {
    type: String,
    require: true,
  },

  onlinegdb_id_input_filter: {
    type: String,
    require: true,
  },

  example_user_input: {
    type: Number,
    default: 5,
  },

  example_output: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('grammind', grammindSchema)
