

export default function formatDate(date) {
    return new Date(date).toLocaleDateString();
}

export function idbPromise(newContact, method, object) {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open("contact", 1);
        let db, tx, store;
        request.onupgradeneeded = function (e) {
            const db = request.result;
            db.createObjectStore("Contact", { keyPath: "_id" });
        };

        request.onerror = function (e) {
            console.log("There was an error");
        };

        request.onsuccess = function (e) {
            db = request.result;
            tx = db.transaction(newContact, "readwrite");
            store = tx.objectStore(newContact);

            db.onerror = function (e) {
                console.log("error", e.message);
            };

            switch (method) {
                case "put":
                    store.put(object);
                    resolve(object);
                    break;
                case "get":
                    const all = store.getAll();
                    all.onsuccess = function () {
                        resolve(all.result);
                    };
                    break;
                case "delete":
                    store.delete(object._id);
                    break;
                default:
                    console.log("No valid method");
                    break;
            }

            tx.oncomplete = function () {
                db.close();
            };
        };
    });
}
