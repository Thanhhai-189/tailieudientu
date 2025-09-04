// Defining function to update connection status
    function updateConnectionStatus() {  
        var gg = document.getElementById("gg")
	if(navigator.onLine) {
            gg.classList.add("search");
        } else {
            gg.classList.add("lost");          
        }
    }

    // Attaching event handler for the load event
    window.addEventListener("load", updateConnectionStatus);
    
    // Attaching event handler for the online event
    window.addEventListener("online", function(e) {
        updateConnectionStatus();
    });
    
    // Attaching event handler for the offline event
    window.addEventListener("offline", function(e) {        
        updateConnectionStatus();
    });