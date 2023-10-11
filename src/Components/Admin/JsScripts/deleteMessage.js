const deleteMessageById = (id, data) => {
    let messageData = []
    data.map((e) => {
        if(e.id !== id){
            messageData.push(e)
        }
    })
    return messageData
}

export default deleteMessageById