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

const add = async scheme => {
  const [id] = await db('schemes').insert(scheme)
  const [newScheme] = await db('schemes').where({ id })
  return newScheme
}

const update = async (changes, id) => {
  await db('schemes').update(changes).where({ id })
  const [scheme] = await db('schemes').where({ id })
  return scheme
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
}
