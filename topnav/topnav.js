window.onload = function () {
    addEnrollmentClasses();
}

document.getElementById("logout-button").addEventListener("click", function() {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
        window.location.href = "http://localhost/elearning/login/index.php";
    } else {
        window.location.href = window.location.href;
    }    
});

async function addEnrollmentClasses() {
    let response = await sendGetClassRequest();
    let data = JSON.parse(response); 
    
    console.log(data);

    let dropdown = document.getElementById("dropdown-content-class");
    for (let enroll_class of data) {
        let element = document.createElement("a");
        element.setAttribute("href", "");
        element.innerText = enroll_class["class_id"] + " - " + enroll_class["class_name"];
        dropdown.append(element);
    }
}

async function sendGetClassRequest() {
    let url = "/elearning/topnav/topnav.php";
    
    const response = await fetch(url, {
        method: "POST",
        dataType: "json"
    });

    
    return response.text();
}
