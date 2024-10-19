document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const data = document.getElementById("numbers").value;

    const url = 'https://shl-server.onrender.com/stringcalc';

    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"numbers": data})
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('response').innerText = data;
        })
        .catch(error => {
            document.getElementById('response').innerText = 'Error: ' + error;
        });
});