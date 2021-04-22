function getNote id(){
    let noteObject = getExistingNotes()
    if (!noteObject){
        return 1
    }
    const keysArrey = object.keys (noteobject)
    const numberkeys = keysArrey.map((key)=>numberkeys(key))
    console.log(number keys)
    return Math.max(...numberkeys) +1
}
function getExistingNotes (){
    let Notes = local Storage.getItem('notes')
    if (!notes) {
        return null
    }
    return JSON.parse(notes)
}
