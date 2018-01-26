var cookies = $("#matchmaker").find("form");
$(document).ready(function() {

    class Profile
    {     
        constructor(imgsrc,name,language)
        {
            this.imagesrc = imgsrc;
            this.name = name;
            this.language = language;
        }
    }

    class Male extends Profile
    {
        constructor(imgsrc,name,language)
        {

           super(imgsrc,name,language); 
            this.gender = "male";
        }

    }

    class Female extends Profile
    {
        constructor(imgsrc,name,language)
        {

           super(imgsrc,name,language); 
            this.gender = "female";
        }

    }

    class Other extends Profile
    {
        constructor(imgsrc,name,language)
        {

           super(imgsrc,name,language); 
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
    var riko = new Female("../Assets/profiles/riko.png", "Riko","python");
    var ozen = new Female("../Assets/profiles/ozen.png", "Ozen","java");
    var lyza = new Female("../Assets/profiles/lyza.png","Lyza","javascript");
    var prushka = new Female("../Assets/profiles/prushka.png","Prushka","C");
    females.push(riko);
    females.push(ozen);
    females.push(lyza);
    females.push(prushka);



    //males
    var males = [];
    var reg = new Male("../Assets/profiles/reg.png", "Reg","python");
    var habo = new Male("../Assets/profiles/habo.png", "Habo","java");
    var jirou = new Male("../Assets/profiles/jirou.png", "Jirou","javascript");
    var bondrewd = new Male("../Assets/profiles/bondrewd.png", "Bondrewd","C");
    males.push(reg);
    males.push(habo);
    males.push(jirou);
    males.push(bondrewd);


    //others
    var others = [];
    var nanachi = new Other("../Assets/profiles/nanachi.png", "Nanachi","python");
    var maruruk = new Other("../Assets/profiles/maruruk.png", "Maruruk","java");
    var faputa = new Other("../Assets/profiles/faputa.png", "Faputa","javascript");
    var mitty = new Other("../Assets/profiles/mitty.png", "Mitty","C");
    others.push(nanachi);
    others.push(maruruk);
    others.push(faputa);
    others.push(mitty);

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
    
    $("#matchmaker").find("button").click(function()
    {
        var name = $("#matchmaker").find("form").find("input[id='name']").val();
        var age = $("#matchmaker").find("form").find("input[id='age']").val();
        var gender;
        var language;
        
        if($("#matchmaker").find("form").find("#male").prop('checked'))
        {
            gender = "male";
        }
        else if ($("#matchmaker").find("form").find("#female").prop('checked'))
        {
            gender = "female";
        }
        else
        {
            gender = "other";
        }
        
        //language
        if($("#matchmaker").find("form").find("#python").prop('checked'))
        {
            language = "python";
        }
        else if ($("#matchmaker").find("form").find("#java").prop('checked'))
        {
            language = "java";
        }
        else if ($("#matchmaker").find("form").find("#javascript").prop('checked'))
        {
            language = "javascript";
        }
        else
        {
            language = "C";
        }
        
        var userInfo = new UserResponse(gender, name, age, language);
       
        
        var pickedGenderArray;
        
        if (userInfo.gender == "male")
        {
            pickedGenderArray = females.slice();
        }
        else if (userInfo.gender == "female")
        {
            pickedGenderArray = males.slice();
        }
        else
        {
            pickedGenderArray = others.slice();
        }
        
        var matchProfile;
        for(i = 0; i<pickedGenderArray.length;i++)
        {
            if(pickedGenderArray[i].language == userInfo.language)
            {
                
                 matchProfile = Object.assign({},pickedGenderArray[i]);  
            }
        }
        
        $("#match-profile").find("#meassage").text( `Hi ${userInfo.name} , You have been matched with`);
        $("#match-profile").find("img").attr("src",matchProfile.imagesrc);
        $("#match-profile").find("#name").text( matchProfile.name);
        
        
        
        
        
        
        
    });
    
    
    //submit controller
    
    
    
    //PseudoCode
    //add eventlistener to the form
    //  -checks if everything is filled  ----------------------------------completeed---------------
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

