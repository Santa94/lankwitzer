 document.querySelector('.get-json-ajax')
      .addEventListener('click', getJsonAjax);
      
    function getJsonAjax() {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const clientData = JSON.parse(xhr.responseText);
                document.querySelector('.8008').innerText = clientData.name;
             
            }
        }
        xhr.open('GET', 'ral2.json', true);
        xhr.send();
    }