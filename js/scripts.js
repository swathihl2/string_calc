document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('dataForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const data = document.getElementById("numbers").value.trim();

        if (!data) {
            document.getElementById('response').innerText = 0;
            return;
        }

        const url = 'https://shl-server.onrender.com/stringcalc';

        document.getElementById('loading').style.display = 'block';
        document.getElementById('response').innerText = '';

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ "numbers": data })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('response').innerText = data;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').innerText = 'Error: ' + error.message;
        })
        .finally(() => {
            document.getElementById('loading').style.display = 'none';
        });
    });
});
