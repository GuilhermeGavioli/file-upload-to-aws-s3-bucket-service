const sendButton = document.querySelector('#send-button')
sendButton.addEventListener('click', handleFileRequest);


async function handleFileRequest() {
    const formData = getInputedData();
    const responseData = await fireFileRequest(formData);
    console.log(responseData)
}


function getInputedData() {
    const fileInput = document.getElementById('file-upload');
    const fileNameInput = document.getElementById("filename-input");
    return convertToForm(fileNameInput.value, fileInput.files[0]);
}

function convertToForm(filename, file) {
    const form = new FormData()
    form.append('filename', filename)
    form.append('file', file)
    return form
}

async function fireFileRequest(fileData) {
    try {
        return await requestTemplate('POST', '/file', fileData)
    } catch (err) {
        throw err;
    }
}



async function requestTemplate(method, route, data) {
    console.log(data)
    const res = await fetch(`http://localhost:3000${route}`, {
        method: method,
        body: data,
        headers: {
          
        },
    })
    return await res.json();
}