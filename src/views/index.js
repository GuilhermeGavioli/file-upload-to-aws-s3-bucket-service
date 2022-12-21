const sendButton = document.querySelector('#send-button')
sendButton.addEventListener('click', handleFileRequest);


async function handleFileRequest() {
    const data = getInputedData();
    const responseData = await fireFileRequest(data);
    console.log(responseData)
}


function getInputedData() {
    const fileInput = document.getElementById('file-upload')
    const fileNameInput = document.getElementById("filename-input")
    const form = new FormData()
    form.append("files", fileInput.files[0]);
    return {
        file: form,
        filename: fileNameInput.value
    }
}

async function fireFileRequest(fileData) {
    try {
        return await requestTemplate('POST', '/file', fileData)
    } catch (err) {
        throw err;
    }
}



async function requestTemplate(method, route, data) {
    const res = await fetch(`http://localhost:3000${route}`, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        },
    })
    return await res.json();
}