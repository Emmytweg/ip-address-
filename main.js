// Universal Variables
let ipInput = document.querySelector('#ipInput');
const submitBtn = document.querySelector('#submitBtn');
const ipAdressResult = document.querySelector('#ip-adress-result');
const ipAdressCompany = document.querySelector('#ip-adress-Company');
const ipAdressCity = document.querySelector('#ip-adress-City');
const ipAdressTimezon = document.querySelector('#ip-adress-timezone');

var api_key = "at_qrXVFExlY6IfuDEsgBzxuJ9ak2qZI";


submitBtn.addEventListener('click',  (e) => {
    e.preventDefault()
let ipInputValue = ipInput.value
  
 console.log(ipInputValue)

    
  

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ipInputValue}`;    
     fetch(url).then(response => response.json()).then(data =>  {
        ipAdressResult.innerHTML = `${data.ip}`;
        ipAdressCity.innerHTML = `${data.location.city}, ${data.location.country}, ${data.as.asn}`;
        ipAdressTimezon.innerHTML =`${data.location.timezone}`
        console.log(data );
        ipAdressCompany.innerHTML = `${data.isp}`
        console.log(data.location.lng)
        var map = L.map('map').setView([data.location.lat, data.location.lng ], 13);

     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker= L.marker([data.location.lat, data.location.lng]).addTo(map).bindPopup("<b>Zoom in for a clearer view</b>").openPopup();
     });
     
})

