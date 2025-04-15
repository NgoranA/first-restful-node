// In-memory store (like a simple spreadsheet)
const db = {
  1: { id: 1, brand: 'Veloretti', color: 'green' },
  2: { id: 2, brand: 'Batavus', color: 'yellow' }
}

// Function to read a bicycle by its ID
export function read(id, cb) {
  // Use setImmediate to simulate asynchronous DB calls
  setImmediate(() => {
    const record = db[id];
    if (!record) {
      // If not found, return an error with a specific message
      return cb(new Error('not found'));
    }
    // If found, return the data (null error)
    cb(null, record);
  });
}



