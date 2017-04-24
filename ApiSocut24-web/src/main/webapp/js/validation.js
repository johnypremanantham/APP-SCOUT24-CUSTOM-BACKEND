

function clickValidation(){   
    var input = document.getElementById("in").value;
    
    var url = "GetAppartment?pin=" + document.getElementById("in").value;
    window.open(url,"_blank");
    
};

