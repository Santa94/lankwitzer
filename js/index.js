 (function() {
         document.querySelector('.page-loaded').innerText =
             (new Date()).toLocaleTimeString();

         document.querySelector('.get-json-ajax')
             .addEventListener('click', getJsonAjax);

         function getJsonAjax() {
             const xhr = new XMLHttpRequest();
             xhr.onreadystatechange = function() {
                 if (xhr.readyState === 4 && xhr.status === 200) {
                     const clientData = JSON.parse(xhr.responseText);
                     document.querySelector('.client-name').innerText = clientData.name;
                     document.querySelector('.balance').innerText = clientData.balance;
                 }
             }
             xhr.open('GET', 'ral2.json', true);
             xhr.send();
         }
 
 });
 