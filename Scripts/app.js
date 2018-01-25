var cookies = $("#matchmaker").find("form");
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
    
    var UserResponse = function(gender, name, age, language )
    {
        this.gender = gender;
        this.name = name;
        this.age = age;
        this.language = language;
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
    
    $("#matchmaker").find("form").change(function()
    {
        //add 3 function booleans that return true if they have been filled
        function checkGender()
        {
            if( $("#matchmaker").find("form").find("input[name='gender']:checked").val())
            {
                return true;
            }
            return false;
        }
        
        function checkName()
        {
            var stringlen = $("#matchmaker").find("form").find("input[id='name']").val().length;
            if (stringlen>0)
            {
                return true;
            }
            else
            {
                    return false;
            }
        }
        
        function checkAge()
        {
            var stringlen = $("#matchmaker").find("form").find("input[id='age']").val().length;
            if (stringlen>0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        
        function checkLanguage()
        {
            if( $("#matchmaker").find("form").find("input[name='language']:checked").val())
                {
                    return true;
                }
            else{
                return false;
            }
        }
        
       
        let isGenderChecked = checkGender();
        let isNameChecked = checkName();
        let isAgeChecked = checkAge();
        let isLangChecked = checkLanguage();

        
        if (isGenderChecked && isNameChecked && isAgeChecked && isLangChecked)
        {
            $("#matchmaker").find("button").prop('disabled',false);   
        }
        else
        {
            $("#matchmaker").find("button").prop('disabled',true);  
        }
        
       

    });
    
    //PseudoCode
    //add eventlistener to the form
    //  -checks if everything is filled
    //  -if so, unwraps the submit button to enable it
    
    //add even listener to the submit button 
    //  -create the user object
    //  -update profile
    //  -rest fields
    //  -disable the button
    
    
    
    
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

