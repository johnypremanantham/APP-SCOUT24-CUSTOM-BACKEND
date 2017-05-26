

function clickValidation(){   
    var input = document.getElementById("in").value;
    
    var url = "Validation?pin=" + document.getElementById("in").value;
    window.open(url,"_blank");
    
};

