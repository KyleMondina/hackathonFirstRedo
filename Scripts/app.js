$(document).ready(function() {

    class Profile
    {     
        constructor(imgsrc,name,preference)
        {
            this.imagesrc = imgsrc;
            this.name = name;
            this.preference = preference;
        }
    }

    class Male extends Profile
    {
        constructor(imgsrc,name)
        {

           super(imgsrc,name); 
            this.gender = "male";
        }

    }

    class Female extends Profile
    {
        constructor(imgsrc,name)
        {

           super(imgsrc,name); 
            this.gender = "female";
        }

    }

    class Other extends Profile
    {
        constructor(imgsrc,name)
        {

           super(imgsrc,name); 
           this.gender = "other";
        }

    }
    
    var UserResponse = function(gender, name, age, )
    {
    }

    //females
    var females = [];
    var riko = new Female("../Assets/profiles/riko.png", "Riko");
    females.push(riko);
    var ozen = new Female("../Assets/profiles/ozen.png", "Ozen");
    females.push(ozen);

    //males
    var males = [];
    var reg = new Male("../Assets/profiles/reg.png", "Reg");
    males.push(reg);
    var habo = new Male("../Assets/profiles/habo.png", "Habo");
    males.push(habo);

    //others
    var others = [];
    var nanachi = new Other("../Assets/profiles/nanachi.png", "Nanachi");
    others.push(nanachi);

    //form controller
    var name = "";
    var age = 0;
    
    /*$("#mathcmaker-miniwrapper").find("#submit").on("click",function()
    {
        name = $("#mathcmaker-miniwrapper").find("#name");
        age = $("#mathcmaker-miniwrapper").find("#age");
        
        if (name.val() != "")
        {
            $("#match-profile").find("#meassage").text(`Hi, ${name.val()}, you have been matched!`);
        }
        else
        {
            alert("please input your name");
        }
        
        //resets the forms
        name.val("");
        age.val("");
        
    });*/

    
});






/* Things to be added:
-add a radio for gender
-style the radio
-disable the submit until both the name and gender and age and interests, 
-

-for match-profile, add the name, and image
-change the default to an empty space and start inserting instead a lot of html
-add a barrier if the gender has not been selected
-add hover effects

add a try new button
style or replace the buttons with div boxes
probably add flex boxes

learn animations
*/

