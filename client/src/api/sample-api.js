const dataArray = [
  { id: 1, name: 'TTB' },
  { id: 2, name: 'ABC' },
  { id: 3, name: 'XYZ' },
  { id: 4, name: 'VKL' },
];

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(id) {
  const selected = dataArray.find((data) => data.id === Number(id))

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
