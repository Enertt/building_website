<?php
$id = $_POST['id'];

// Getting JSON string
$jsonString = file_get_contents('../../pages/News/news.json');
if($jsonString){

    // Decoding JSON string
    $data = json_decode($jsonString, true);

    // Deleting object from decoded JSON string
    foreach ($data as $key => $value) {
        if ($value['id'] == $id) {
            unset($data[$key]);
            break;
        }
    }

    // Preparation for encode
    $data = array_values($data);

    // Encoding
    $newJsonString = json_encode($data);

    // Put new JSON string to users.json
    file_put_contents('../../pages/News/news.json', $newJsonString);

    echo 'deleted succesfully';
}else{
    echo 'JSON not found';
}

?>