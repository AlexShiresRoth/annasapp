
let button = document.querySelector('.button-size');
let newPhoto = document.querySelector('.button-img');
let url = 'https://photos.app.goo.gl/MzpwHcFA6mjKn8ci1';
let displayImg = document.querySelectorAll('.display');
let tripsBtn = document.querySelector('.extend-btn');

//change images size
    (() => {
        let changeSize = () =>{
            let min = 10 , max = 60;
                Array.from(displayImg).forEach(image => {
                    image.style.flex = (Math.floor(Math.random() * (max - min + 1)) + min) + 'vh';
                    
                });
        };
        button.addEventListener("click", changeSize);  
        changeSize();
    })();
//change img     
    (() => {
        let changeImg = () => {
            Array.from(displayImg).forEach(image => {
                 newPhoto.addEventListener('click', () => image.classList.add('newDisplay'));  
                  setTimeout(() =>{
                   image.classList.remove('newDisplay');
                },500);
            });
        };    
        changeImg();
    })();
//toggle nav trips    
    (() => {
            let trips = document.querySelector('.trips');
            tripsBtn.addEventListener("click", () => {
                trips.classList.toggle('trips-display');
            });
    })();



//fetch data from google photos
/*button.addEventListener("click", function(){
    console.log('click');
      axios.get(url)
        .then(function(res){
            console.log(res)
            .then(function(data){
                console.log(data);
        });
    });
});*/


    
   
    

    



