
/*$(function() {
    $('#aperçu').click(function() {
        $.getJSON('data.json', function(donnees) {
        $('#r').html('<p><b>Name</b> : ' + donnees.Name + '</p>');
        $('#r').append('<p><b>Pseudo</b> : ' + donnees.Pseudo + '</p>');
        $('#r').append('<p><b>XP</b> : ' + donnees.Xp + '</p>');
        $('#r').append('<p><b>url</b> : ' + donnees.URLavatar + '</p>');
        });
    });
});
    
      window.onload = function(){

        $.get("data.json", function(data){
            console.log(data);
            
            });
        }*/

   
 let urlAPI = "json/data.json";

 fetch(urlAPI)
         .then(response => {
           
             console.log(response);
           
             return response.json();
         })
       
         .then(function (data) {
             console.log(data);
           
             let fetchResultjoueur = document.getElementById("result");
             fetchResultjoueur.innerHTML = "<p>Nom : " + data.Name + "</p>" +
                 "<p>Pseudo : " + data.Pseudo + "</p>" +
                 "<p>XP : " + data.Xp + "</p>" +
                 "<p>Avatar :" + "<img src="+ data.urlavatar + ">" +"</p>";
         })
        
         .catch(error => {
             console.log(error);
             fetchResultjoueur.innerHTML = "<p>'ERREUR" + error.statusText + "</p>"
         });