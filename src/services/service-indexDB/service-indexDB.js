import { navigate } from 'gatsby'
import 'core-js/modules/es6.set'
import 'core-js/modules/es6.map'
import 'raf/polyfill'

let db
const isBrowser = typeof window !== 'undefined'
if (isBrowser) {
  openDB(returIndexedDB())
}

function openDB(indexbd) {
  let dbReq = indexbd.open('content-prote', 1)
  dbReq.onupgradeneeded = function(event) {
    // Set the db variable to our database so we can use it!
    db = event.target.result

    // Create an object store named notes. Object stores
    // in databases are where data are stored.
    db.createObjectStore('hosts', { autoIncrement: true })
  }
  dbReq.onsuccess = function(event) {
    db = event.target.result
  }
}

function addHostUser(data, encuesta, location) {
  // Start a database transaction and get the notes object store
  if (isBrowser) {
    let dbReqAdd = returIndexedDB().open('content-prote', 1)
    dbReqAdd.onupgradeneeded = function(event) {
      // Set the db variable to our database so we can use it!
      db = event.target.result

      // Create an object store named notes. Object stores
      // in databases are where data are stored.
      db.createObjectStore('hosts', { autoIncrement: true })
    }
    dbReqAdd.onsuccess = function(event) {
      db = event.target.result
      let tx = db.transaction(['hosts'], 'readwrite')
      let store = tx.objectStore('hosts')
      // Put the sticky note into the object store
      let host = {
        host: data.hostUser.host,
        nameuser: data.name,
        category: data.category,
        subcategory: data.subcategory,
        type: data.type,
        age: data.age,
        gender: data.gender,
        encuesta: encuesta
      }
      store.add(host)
      // Wait for the database transaction to complete
    }
  }
}

const getDataIb = () =>
  new Promise((resolveData, rejectData) => {
    let txObject
    let storeObject
    if (isBrowser) {
      let requGet = returIndexedDB().open('content-prote', 1)
      requGet.onupgradeneeded = function(event) {
        db = event.target.result
        db.createObjectStore('hosts', { autoIncrement: true })
      }
      let allNotes = []
      requGet.onsuccess = function(event) {
        db = event.target.result
        txObject = db.transaction(['hosts'], 'readonly')
        storeObject = txObject.objectStore('hosts')
        const cursor = storeObject.openCursor()
        cursor.onsuccess = function(eventCursor) {
          let cursorCurrent = eventCursor.target.result
          if (cursorCurrent) {
            allNotes.push(cursorCurrent.value)
            cursorCurrent.continue()
          }
          resolveData(allNotes)
        }
      }
    }
  })

function getAndDisplayNotes(dataResult) {
  navigate(`/`, {
    state: {
      label: 'Protección: Pensiones, Cesantías, Ahorro e Inversión '
    }
  })
}

function returIndexedDB() {
  return (
    window.indexedDB ||
    window.mozIndexedDB ||
    window.webkitIndexedDB ||
    window.msIndexedDB
  )
}

function deleteDataBases() {
  let txObjectClean
  let storeObjectClean
  if (isBrowser) {
    const dbReqClean = returIndexedDB().open('content-prote', 1)
    dbReqClean.onupgradeneeded = function(event) {
      // Set the db variable to our database so we can use it!
      db = event.target.result

      // Create an object store named notes. Object stores
      // in databases are where data are stored.
      db.createObjectStore('hosts', { autoIncrement: true })
    }

    dbReqClean.onsuccess = function(event) {
      db = event.target.result
      txObjectClean = db.transaction(['hosts'], 'readwrite')
      storeObjectClean = txObjectClean.objectStore('hosts')
      const cursor = storeObjectClean.openCursor()
      cursor.onsuccess = function(eventCursor) {
        let cursorCurrent = eventCursor.target.result
        if (cursorCurrent) {
          storeObjectClean.delete(cursorCurrent.key)
        }
        navigate(`/`, {
          state: {
            label: 'Protección: Pensiones, Cesantías, Ahorro e Inversión  '
          }
        })
      }
    }
  }
}

const updateHostUser = (dataUpdate, redirectHome = null) => {
  if (isBrowser) {
    let dbReqAdd = returIndexedDB().open('content-prote', 1)
    dbReqAdd.onupgradeneeded = function(event) {
      db = event.target.result
      db.createObjectStore('hosts', { autoIncrement: true })
    }
    dbReqAdd.onsuccess = function(event) {
      db = event.target.result
      let tx = db.transaction(['hosts'], 'readwrite')
      let store = tx.objectStore('hosts')
      const cursor = store.openCursor()
      cursor.onsuccess = function(eventCursor) {
        let cursorCurrent = eventCursor.target.result
        const title = cursorCurrent
          ? cursorCurrent.key
            ? cursorCurrent.key
            : 0
          : 0
        const objectStore = store

        if (title != null && title != undefined && title !== 0) {
          const objectStoreTitleRequest = objectStore.get(title)
          objectStoreTitleRequest.onsuccess = () => {
            let data = objectStoreTitleRequest.result
            data.id = title
            data.category = dataUpdate.category
            data.encuesta = dataUpdate['encuesta']
              ? dataUpdate['encuesta']
              : null
            data.age = dataUpdate['age'] ? dataUpdate['age'] : 0
            if (dataUpdate['type']) {
              data.type = dataUpdate['type']
            }
            data.gender = dataUpdate['gender'] ? dataUpdate['gender'] : null
            if (dataUpdate['name']) {
              data.nameuser = dataUpdate['name']
            }
            data.subcategory = dataUpdate.subcategory
            const updateTitleRequest = objectStore.put(data, title)
            updateTitleRequest.onsuccess = () => {
              const lines = {
                category: data.category,
                type: data.type
              }
              if (redirectHome) {
                redirectHome(lines)
              }
            }
          }
        }
      }
    }
  }
}

const updateIndexDB = value => {
  if (isBrowser) {
    let dbReqAdd = returIndexedDB().open('content-prote', 1)
    dbReqAdd.onupgradeneeded = function(event) {
      db = event.target.result
      db.createObjectStore('hosts', { autoIncrement: true })
    }
    dbReqAdd.onsuccess = function(event) {
      db = event.target.result
      let tx = db.transaction(['hosts'], 'readwrite')
      let store = tx.objectStore('hosts')
      const cursor = store.openCursor()
      cursor.onsuccess = function(eventCursor) {
        let cursorCurrent = eventCursor.target.result
        const title = cursorCurrent
          ? cursorCurrent.key
            ? cursorCurrent.key
            : 0
          : 0
        const objectStore = store
        if (title != null && title != undefined && title !== 0) {
          const objectStoreTitleRequest = objectStore.get(title)
          objectStoreTitleRequest.onsuccess = () => {
            const data = objectStoreTitleRequest.result
            data.encuesta = value
            const updateTitleRequest = objectStore.put(data, title)
            updateTitleRequest.onsuccess = () => {}
          }
        }
      }
    }
  }
}

export {
  openDB,
  addHostUser,
  db,
  getAndDisplayNotes,
  getDataIb,
  deleteDataBases,
  updateIndexDB,
  updateHostUser
}
