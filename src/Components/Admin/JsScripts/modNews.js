const modNewsById = (id, data, newData) => {
    data.map((e) => {
        if(e.id === id){
            e.id = newData.id
            e.title = newData.title
            e.date = newData.date
            e.photoSmall = newData.photoSmall
            e.body = newData.body
        }else{

        }
    })
    debugger
    return data
}

export default modNewsById