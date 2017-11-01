
$(document).ready(function () {
    
    var count = 0;
    var images = ["Assets/image/bg1.jpg",
    "Assets/image/bg2.jpg","Assets/image/bg3.jpg","Assets/image/bg4.jpg",
    "Assets/image/bg5.jpg","Assets/image/bg6.jpg","Assets/image/bg7.jpg","Assets/image/bg8.jpg"];
    var image =$(".fader");
    
    image.css ("background-image", "url ("+images[count]+ ")")
    
    setInterval(function () {
        image.fadeOut(500,function (){
            
            image.css("background-image", "url ("+images[count++]+ ")");
            image.fadeIn(500);
            
        });
        
        if (count == images.length)
        {
            count = 0;
        }
        
        
    },5000)
    
}
)