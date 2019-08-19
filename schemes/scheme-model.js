const db = require('../data/config')

const find = async () => {
  const schemes = await db('schemes')
  return schemes
}

module.exports = {
  find,
}
