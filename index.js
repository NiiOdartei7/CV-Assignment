function acceptResults() {

    var fname = document.getElementById("add-form").elements["f_name"].value;
    var mname = document.getElementById("add-form").elements["m_name"].value;
    var lname = document.getElementById("add-form").elements["l_name"].value;
    var email = document.getElementById("add-form").elements["email"].value;
    var phone = document.getElementById("add-form").elements["p_number"].value;
    var address = document.getElementById("add-form").elements["address"].value;
    var full_name = fname +" "+ mname + " " + lname;

    

    localStorage.setItem("f_name",full_name);
    localStorage.setItem("e_mail",email);
    localStorage.setItem("tele",phone);
    localStorage.setItem("add",address);

    window.location.href = "cv.html";
    
} 

    document.getElementById("CVname").innerHTML = localStorage.getItem("f_name");
    document.getElementById("CVemail").innerHTML = localStorage.getItem("e_mail");
    document.getElementById("CVphone").innerHTML = localStorage.getItem("tele");
    document.getElementById("CVAddress").innerHTML = localStorage.getItem("add");
    
