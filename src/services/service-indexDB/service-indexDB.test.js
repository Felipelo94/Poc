import {
  openDB,
  addHostUser,
  getDataIb,
  updateHostUser,
  getAndDisplayNotes,
  deleteDataBases,
  updateIndexDB
} from './service-indexDB'
import { IDBFactory, IDBKeyRange, reset } from 'shelving-mock-indexeddb'

// Create an IDBFactory at window.indexedDB so your code can use IndexedDB.
window.indexedDB = new IDBFactory()

// Make IDBKeyRange global so your code can create key ranges.
window.IDBKeyRange = IDBKeyRange

// Reset the IndexedDB mock before/after tests.
// This will clear all object stores, indexes, and data.
beforeEach(() => reset())
afterEach(() => reset())

// The IndexedDB mock uses setTimeout() to simulate the asyncronous API.
// Add fake timers before/after tests to ensure the asyncronous responses are received by the test.
beforeEach(() => jest.useFakeTimers())
afterEach(() => jest.runAllTimers())

// Your tests...
test('service addHostUser', () => {
  // Simple IndexedDB example.
  // Open a connection to IndexedDB database (version 1).
  const request = window.indexedDB.open('content-prote', 1)

  // 'upgradeneeded' will be called as the IndexedDB currently doesn't contain any object stores or data.
  request.addEventListener('upgradeneeded', () => {
    // Create an object store.
    // IDBDatabase object is accessed by request.result
    const store = request.result.createObjectStore('hosts', {
      keyPath: 'id',
      autoIncrement: true
    })

    store.createIndex('hots', 'host')
    store.createIndex('nameuser', 'nameuser')
  })

  // 'success' will be called after the 'upgradeneeded' event.
  request.addEventListener('success', () => {
    // Create a readwrite transaction and put some data into the store.
    addHostUser({ name: '', hostUser: { host: '' } })
  })
})

test('service addHostUser', () => {
  // Simple IndexedDB example.
  // Open a connection to IndexedDB database (version 1).
  const request = window.indexedDB.open('content-prote', 1)

  // 'upgradeneeded' will be called as the IndexedDB currently doesn't contain any object stores or data.
  request.addEventListener('upgradeneeded', () => {
    // Create an object store.
    // IDBDatabase object is accessed by request.result
    const store = request.result.createObjectStore('hosts', {
      keyPath: 'id',
      autoIncrement: true
    })

    store.createIndex('hots', 'host')
    store.createIndex('nameuser', 'nameuser')
  })

  // 'success' will be called after the 'upgradeneeded' event.
  request.addEventListener('success', () => {
    // Create a readwrite transaction and put some data into the store.
    updateHostUser({ name: '', hostUser: { host: '' } })
  })
})

// Your tests...
test('service getDataIb', () => {
  // Simple IndexedDB example.
  // Open a connection to IndexedDB database (version 1).
  const request = window.indexedDB.open('content-prote', 1)

  // 'upgradeneeded' will be called as the IndexedDB currently doesn't contain any object stores or data.
  request.addEventListener('upgradeneeded', () => {
    // Create an object store.
    // IDBDatabase object is accessed by request.result
    const store = request.result.createObjectStore('hosts', {
      keyPath: 'id',
      autoIncrement: true
    })

    store.createIndex('hots', 'host')
    store.createIndex('nameuser', 'nameuser')
  })

  // 'success' will be called after the 'upgradeneeded' event.
  request.addEventListener('success', () => {
    // Create a readwrite transaction and put some data into the store.
    const putTransaction = request.result.transaction(['hosts'], 'readwrite')
    const putStore = putTransaction.objectStore('hosts')
    addHostUser({ name: 'Fusilli', hostUser: { host: '1234678' } })
    putStore.put({ nameuser: 'Fusilli', host: '1234678' }) // ID: 1

    getDataIb().then(() => {})
  })
})

// Your tests...
test('openDB', () => {
  const request = window.indexedDB
  openDB(request)
})

test('etc3 data', () => {
  getAndDisplayNotes({ value: { name: '' } })
})

test('etc3 data', () => {
  // Simple IndexedDB example.
  // Open a connection to IndexedDB database (version 1).
  const request = window.indexedDB.open('content-prote', 1)

  // 'upgradeneeded' will be called as the IndexedDB currently doesn't contain any object stores or data.
  request.addEventListener('upgradeneeded', () => {
    // Create an object store.
    // IDBDatabase object is accessed by request.result
    const store = request.result.createObjectStore('hosts', {
      keyPath: 'id',
      autoIncrement: true
    })

    store.createIndex('hots', 'host')
    store.createIndex('nameuser', 'nameuser')
  })

  // 'success' will be called after the 'upgradeneeded' event.
  request.addEventListener('success', () => {
    // Create a readwrite transaction and put some data into the store.
    const putTransaction = request.result.transaction(['hosts'], 'readwrite')
    const putStore = putTransaction.objectStore('hosts')
    putStore.put({ nameuser: 'Fusilli', host: '1234678' }) // ID: 1
    getDataIb().then(() => {})
  })
})

test('etc3 null', () => {
  getAndDisplayNotes([])
})

test('delete storage', () => {
  const request = window.indexedDB.open('content-prote', 1)

  // 'upgradeneeded' will be called as the IndexedDB currently doesn't contain any object stores or data.
  request.addEventListener('upgradeneeded', () => {
    // Create an object store.
    // IDBDatabase object is accessed by request.result
    const store = request.result.createObjectStore('hosts', {
      keyPath: 'id',
      autoIncrement: true
    })

    store.createIndex('hots', 'host')
    store.createIndex('nameuser', 'nameuser')
  })

  // 'success' will be called after the 'upgradeneeded' event.
  request.addEventListener('success', () => {
    // Create a readwrite transaction and put some data into the store.
    const putTransaction = request.result.transaction(['hosts'], 'readwrite')
    const putStore = putTransaction.objectStore('hosts')
    putStore.put({ nameuser: 'Fusilli', host: '1234678' })
    deleteDataBases()
  })
})

test('delete storage empty', () => {
  const request = window.indexedDB.open('content-prote', 1)

  // 'upgradeneeded' will be called as the IndexedDB currently doesn't contain any object stores or data.
  request.addEventListener('upgradeneeded', () => {
    // Create an object store.
    // IDBDatabase object is accessed by request.result
    const store = request.result.createObjectStore('hosts', {
      keyPath: 'id',
      autoIncrement: true
    })

    store.createIndex('hots', 'host')
    store.createIndex('nameuser', 'nameuser')
  })

  // 'success' will be called after the 'upgradeneeded' event.
  request.addEventListener('success', () => {
    // Create a readwrite transaction and put some data into the store.
    const putTransaction = request.result.transaction(['hosts'], 'readwrite')
    const putStore = putTransaction.objectStore('hosts')
    deleteDataBases()
  })
})

test('delete storage empty', () => {
  const request = window.indexedDB.open('content-prote', 1)

  // 'upgradeneeded' will be called as the IndexedDB currently doesn't contain any object stores or data.
  request.addEventListener('upgradeneeded', () => {
    // Create an object store.
    // IDBDatabase object is accessed by request.result
    const store = request.result.createObjectStore('hosts', {
      keyPath: 'id',
      autoIncrement: true
    })

    store.createIndex('hots', 'host')
    store.createIndex('nameuser', 'nameuser')
  })

  // 'success' will be called after the 'upgradeneeded' event.
  request.addEventListener('success', () => {
    // Create a readwrite transaction and put some data into the store.
    const putTransaction = request.result.transaction(['hosts'], 'readwrite')
    const putStore = putTransaction.objectStore('hosts')
    updateIndexDB('hola')
  })
})
