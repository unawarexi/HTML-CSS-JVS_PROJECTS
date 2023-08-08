const OurClients = document.querySelector(".our_clients");
const ClientsImages = document.querySelector(".our_clients img")

let counter = 1;
const size = ClientsImages[0].clientwidth;

OurClients.style.transform = 'translatex(' + (-size * counter) + 'px)';

OurClients.addEventListener('mouseover', ()=> {
    if (counter <= 0) return;
    OurClients.style.transition = "transform 0.4s ease-in-out";
    counter--;
    OurClients.style.transform = 'translatex(' + (-size * counter) + 'px)';
});

OurClients.addEventListener("transitioned", ()=> {
    if (ClientsImages[counter].id === 'lastloop'){
        OurClients.style.transition = "none";
        counter = ClientsImages.length -2;
        OurClients.style.transform = 'translatex(' + (-size * counter) + 'px)';

    }

    if (ClientsImages[counter].id === 'firstloop'){
        OurClients.style.transition = "none";
        counter = ClientsImages.length -counter;
        OurClients.style.transform = 'translatex(' + (-size * counter) + 'px)';

    }
})