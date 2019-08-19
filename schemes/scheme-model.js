const db = require('../data/config')

const find = async () => {
  const schemes = await db('schemes')
  return schemes
}

const findById = async id => {
  const [scheme] = await db('schemes').where({ id })
  return scheme
}

module.exports = {
  find,
  findById,
}
