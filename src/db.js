import fs from 'node:fs/promises'
const DB_Path = new URL('../db.json',import.meta.url).pathname

export const getDB = async () => {
    const dbcontent = await fs.readFile(DB_Path,'utf-8')
    return JSON.parse(dbcontent)
}

export const saveDB = async (db) => {
    await fs.writeFile(DB_Path,JSON.stringify(db,null,2))
    return db;

}

export const insertDB = async (note) => {
    const db = await getDB();
    db.notes.push(note);
    await saveDB(db);
    return note;


}