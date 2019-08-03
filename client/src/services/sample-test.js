const dataArray = [
  { _id: 1, text: 'TTB' },
  { _id: 2, text: 'ABC' },
  { _id: 3, text: 'XYZ' },
  { _id: 4, text: 'VKL' },
];

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(_id) {
  const selected = dataArray.find((data) => data._id === Number(_id))

  if (!selected) {
    throw new Error('Cannot find user')
  }

  return selected
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
  // Throw an error, just for example.
  if (!Array.isArray(dataArray)) {
    throw new Error('Cannot find users')
  }

  return dataArray
}
