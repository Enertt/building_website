const deleteUserById = (id) => {
    let xhr = new XMLHttpRequest();
        xhr.open("POST", "./src/Components/Admin/JsScripts/deleteUser.php", false);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let response = xhr.responseText;
                    console.log(response);
                } else {
                    console.log(xhr.responseText);
                }
            }
        };
    xhr.send("id=" + id);
    // location.reload();
}

export default deleteUserById