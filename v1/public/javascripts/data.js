
let button = document.querySelector('button');
let url = 'https://photos.app.goo.gl/MzpwHcFA6mjKn8ci1';
let displayImg = document.querySelectorAll('.display');


    (function(){
        let changeImg = function(){
        let min = 10 , max = 60;
            for(var i = 0; i < displayImg.length; i++){
                  displayImg[i].style.flex = (Math.floor(Math.random() * (max - min + 1)) + min) + 'vh'; 
                  displayImg[i].style.flex = (Math.floor(Math.random() * (max - min + 1)) + min) + 'vh';
                  displayImg[i].classList.toggle('newDisplay');
            }
        };
        
        button.addEventListener("click", changeImg);  
        changeImg();
    })();


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


    
   
    

    



