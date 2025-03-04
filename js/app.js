// Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
// Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)

// function accendi() {
    
//     document.getElementById("lampadina").src = "./img/yellow_lamp.png"; 

// }


    // BONUS
    // Facciamo accendi e spegni:
    // - Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
    // - Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
    // - E così via...
    // Per fare questo bonus potremmo aver bisogno di del metodo string.includes() 


    // se è accesa scrivi spegni se spenta scrivi accendi(usare un if per le condizioni)
    
    // metodo includes per vedere se accesa o spenta ==> includes(searchString) ==> This method lets you determine whether or not a string includes another string.


    // funzione

    function accendi(){
        const lampadina = document.getElementById("lampadina");
        const bottone = document.getElementById("bottone");

        if (lampadina.src.includes("white")) {
            
            lampadina.src = "./img/yellow_lamp.png";
            bottone.innerHTML = "Spegni"; 

        } else {
                        
            lampadina.src = "./img/white_lamp.png"; 
            bottone.innerHTML = "Accendi"; 
    }
}
    