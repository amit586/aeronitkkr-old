var finalYear = {
   "Chaitanya": {
    "Branch":"Mechanical",
    "Post":"President",
    "Email":"chaitanyaduck@gmail.com",
    "Image":"./members/Chaitanya_III.jpg"
  },
    "Sahil Kadyan": {
    "Branch":"ECE",
    "Post":"Vice President",
    "Email":"Kadyansahil5111@gmail.com",
    "Image":"./members/Sahil_III.jpg"
  },
    "Sanjeev": {
    "Branch":"ECE",
    "Post":"Secretary",
    "Email":"sanjeev_11815096@nitkkr.ac.in",
    "Image":"./members/Sanjeev_III.jpg"
  },
    "Ritvik Saini": {
    "Branch":"Mechanical",
    "Post":"Secretary",
    "Image":"./members/Ritwik_III.jpg"
  },
    "Mandeep": {
    "Image":"./members/Mandeep_III.jpg"
  },
  "Navdeep": {
    "Image":"./members/Navdeep_III.jpg"
  },
  "Nitin": {
    "Image":"./members/Nitin_III.jpg"
  },
   "Vinay": {
    "Image":"./members/Vinay_III.jpg"
  },
  "Shubham Kumar": {
    "Image": "./members/Shubham.jpg"
  }
 };

 var preFinalYear = {

 	"Abhronil": {
    "Image":"./members/Abhronil.jpg"
  },
  "Bandavathu": {
    "Image":"./members/BADAVATHU_II.jpg"
  },
  
  "Praneet": {
    "Image":"./members/Praneet.jpg"
  },
  "Praveen Kaushik": {
    "Image":"./members/Praveen_Kaushik_II.jpg"
  },
 
  "Shivani": {
    "Image":"./members/Shivani.jpg"
  }
 };

 

 // console.log(preFinalYear);
 // console.log(finalYear);

function makeCard(name,Branch,Email,link,image,post=""){

      var isPost = '';
      if(post!="")
           isPost+='Post: '+post+'</br>'

      var str = '<div class="col s12 m6 l4">'+
                    '<div class="card">'+
                      '<div class="card-image">'+
                            '<img src="'+image+'">'+
                            '<span class="card-title">'+name+'</span>'+
                      '</div>'+
                      '<div class="card-content">'+
                          '<p>'+isPost+'Email: '+Email+'</br>Branch: '+Branch+'</p>'+
                      '</div>'+
                    '</div></div>'
      //console.log(name,Branch,Email,link,image,post)
        
      return str;
 }


function makeCard2(name,image){

      var str = '<div class="col s12 m6 l4">'+
                    '<div class="card">'+
                      '<div class="card-image">'+
                            '<img src="'+image+'">'+
                      '</div>'+
                      '<div class="card-content">'+
                          '<h5>'+name+'</h5>'+
                      '</div></div></div>'
      //console.log(name,Branch,Email,link,image,post)
      return str;
 }


function Cards(finalYear,preFinalYear)
{
       var parent1  = document.getElementsByClassName("final-year")[0];
       var parent2 = document.getElementsByClassName("pre-final-year")[0];
       var allCards1 = parent1.innerHTML;
       var allCards2 = parent2.innerHTML;
       var keys1 = Object.keys(finalYear);
       var keys2 = Object.keys(preFinalYear);
       //console.log(parent1);
       for( i in keys1)
       {
              var name = keys1[i];
              //console.log(finalYear[name]);
              var card = makeCard(name,finalYear[name]["Branch"],finalYear[name]["Email"],
                finalYear[name]["Link"],finalYear[name]["Image"],finalYear[name]["Post"]);
              allCards1+=card;
       }

       for(i in keys2)
       {
            var name = keys2[i];
            var card = makeCard2(name,preFinalYear[name]["Image"]);
            allCards2+=card;
       }

      parent1.innerHTML=allCards1;
      parent2.innerHTML=allCards2;
}

Cards(finalYear,preFinalYear)


/*
 <div class="col s12 m3">
          <div class="card">
            <div class="card-image">
              <img src="background1.jpg">
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
*/
