import { getDB, insertDB, saveDB } from "./db";

export const newNote = async (note, tags) => {

    newNote = {
        tags,
        content: note,
        id: Date.now()
    }

    insertDB(newNote);
    return newNote; 
}

export const getAllNotes = async () => {
    const { notes } = await getDB();
    return notes;
}

export const findNotes = async (filter) => {
    const { notes } = await getDB();
    return notes.filter(note => note.content.toLowerCase().includes(filter.toLowerCase()))
}

export const removeNote = async id => {
    const { notes } = await getDB();
    const match = notes.find(note => id === note.id)

    if (match){
        const newNotes = notes.filter(note => note.id !== id)
        await saveDB({notes: newNotes})
        return id
    }
}

export const removeAllNotes = () => saveDB({notes: []})
