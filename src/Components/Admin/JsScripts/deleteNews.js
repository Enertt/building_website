const deleteNewsById = (id, data) => {
    let newData = []
    data.map((e) => {
        if(e.id !== id){
            newData.push(e)
        }
    })
    return newData
}

export default deleteNewsById