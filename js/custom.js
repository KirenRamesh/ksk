// Get Current Year
function getCurrentYear() {
    var d = new Date();
    var year = d.getFullYear();
    document.querySelector("#displayDateYear").innerText = year;
}
getCurrentYear()

//client section owl carousel
$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: [
        '<i class="fa fa-long-arrow-left" aria-hidden="true"></i>',
        '<i class="fa fa-long-arrow-right" aria-hidden="true"></i>'
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function redirectToWhatsApp() {
    /* Get User Input Values */
    var name = document.getElementById("cName").value;
    var email = document.getElementById("cEmail").value;
    var subject = document.getElementById("cSubject").value;
    var message = document.getElementById("cMessage").value;
  
    /* Validation (Basic Example) */
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Please fill in all required fields.");
      return false;
    }
  
    /* Build WhatsApp Message */
    var messageText = "Hi! I would like to inquire the below:\n\n"; 
    messageText += "*Name:* " + name + "\n";
    messageText += "*Email:* " + email + "\n";
    messageText += "*Subject:* " + subject + "\n";
    messageText += "*Message:* " + message + "\n";
  
    /* WhatsApp Settings */
    var walink = 'whatsapp://send';
    var phoneNumber = '+60176061342'; // Replace with your actual WhatsApp number
  
    var encodedMessage = encodeURIComponent(messageText);
    var whatsappUrl = walink + "?phone=" + phoneNumber + "&text=" + encodedMessage;
  
    /* Open WhatsApp */
    window.open(whatsappUrl, '_blank');
  }
  