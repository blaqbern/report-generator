import camelCase from 'camelcase'

const camelCaseDbFields = (/* store */) => next => action => {
  if (!action.meta || !action.meta.receiveDbFields) {
    return next(action)
  }

  function updateKeys(obj) {
    if (typeof obj === 'object') {
      return Object.keys(obj).reduce((acc, key) => ({
        ...acc,
        [camelCase(key)]: obj[key],
      }), {})
    }
  }

  const { json } = action.payload
  const updatedJson = Array.isArray(json)
    ? json.map(item => updateKeys(item))
    : updateKeys(json)

  return next({
    ...action,
    payload: {
      ...action.payload,
      json: updatedJson,
    },
  })

  /**
   * Object spread operator seems appropriate here, and it's just too tasty to
   * pass up. That said, I'm opposed in general to using unofficial syntax, so
   * I've included the Object.assign version below. Just remove the return
   * statement above and uncomment the snippet below. Be sure to remove the
   * babel transform-object-rest-spread plugin from .babelrc and node_modules
   * if you don't wish to use the object-spread syntax.
   */
  // const { payload } = action
  // const updatedPayload = Object.assign({}, payload, {
  //   folders: payload.folders.map(folder =>
  //     Object.keys(folder)
  //       .reduce((acc, key) => (
  //         Object.assign({}, acc, { [camelCase(key)]: folder[key] })
  //       ), {})
  //   ),
  // })
  //
  // return next(Object.assign({}, action, { payload: updatedPayload }))
}

export default camelCaseDbFields
