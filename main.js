$(window).on('load', function() { 
    $('#status').delay(1000).fadeOut('slow');  
          $('#preloader').delay(1000).fadeOut('slow');  
          $('body').delay(1000)
  })
// ыскшзе
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

// When the user clicks anywhere outside of the modal, close it
var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// massega

const chat_id = '-957157434', botID = 'bot6555911875:AAExNkkwmIaWAkbn1xP3lyzmR9C56iNYSbI';
    const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;
    document.querySelector('#messageForm').addEventListener("submit", async e => { 
        e.preventDefault(); 
        let text = JSON.stringify( 
            Object.fromEntries(new FormData(e.target).entries()), 
        null, 2); 
        const sendMessage = await fetch(telegramURL, { 
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({chat_id, text}), 
        });
        const messageStatus = document.querySelector('#status');
        if (sendMessage.ok)
            messageStatus.textContent = "Успешно!";
        else
            messageStatus.textContent = "Ошибка! :( " + (await sendMessage.text());
        e.target.reset(); 
    });