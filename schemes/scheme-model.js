const db = require('../data/config')

const find = async () => {
  const schemes = await db('schemes')
  return schemes
}

const findById = async id => {
  const [scheme] = await db('schemes').where({ id })
  return scheme
}

const findSteps = async id => {
  const steps = (await db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .select('schemes.scheme_name', 'steps.*')
    .where({ scheme_id: id }))
    .sort((a, b) => a.step_number <= b.step_number ? -1 : 1)
  return steps
}

module.exports = {
  find,
  findById,
  findSteps,
}
