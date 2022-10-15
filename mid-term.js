function Checkbox() {
    var checkbox = document.getElementById("samecheck");
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var Sname = document.getElementById("Sname");
    var city = document.getElementById("city");
    var province = document.getElementById("province");
    var zip = document.getElementById("zip");
    var phone = document.getElementById("phone");

    var fname1 = document.getElementById("fname1");
    var lname1 = document.getElementById("lname1");
    var Sname1 = document.getElementById("Sname1");
    var city1 = document.getElementById("city1");
    var province1 = document.getElementById("province1");
    var zip1 = document.getElementById("zip1");
    var phone1 = document.getElementById("phone1");

    if (checkbox.checked == true) {
        fname1.value = fname.value;
        lname1.value = lname.value;
        Sname1.value = Sname.value;
        city1.value = city.value;
        province1.value = province.value;
        zip1.value = zip.value;
        phone1.value = phone.value;
    } else {
        fname1.value = "";
        lname1.value = "";
        Sname1.value = "";
        city1.value = "";
        province1.value = "";
        zip1.value = "";
        phone1.value = "";
    }
}

function checkvalid() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var Sname = document.getElementById("Sname");
    var city = document.getElementById("city");
    var province = document.getElementById("province");
    var zip = document.getElementById("zip");
    var phone = document.getElementById("phone");

    var fname1 = document.getElementById("fname1");
    var lname1 = document.getElementById("lname1");
    var Sname1 = document.getElementById("Sname1");
    var city1 = document.getElementById("city1");
    var province1 = document.getElementById("province1");
    var zip1 = document.getElementById("zip1");
    var phone1 = document.getElementById("phone1");

    if (!fname.checkValidity()) {
        fname.setCustomValidity("First Name can't be empty.");
        fname.reportValidity();
    } else if (!lname.checkValidity()) {
        fname.setCustomValidity(" Last Name can't be empty.");
        fname.reportValidity();
    } else if (!Sname.checkValidity()) {
        fname.setCustomValidity(" Street name can't be empty.");
        fname.reportValidity();
    } else if (!city.checkValidity()) {
        fname.setCustomValidity(" City can't be empty.");
        fname.reportValidity();
    } else if (!province.checkValidity()) {
        fname.setCustomValidity(" Province can't be empty.");
        fname.reportValidity();
    } else if (!zip.checkValidity()) {
        zip.setCustomValidity("Zip code must be number");
        zip.reportValidity();
    } else if (!phone.checkValidity()) {
        fname.setCustomValidity(" Phone number can't be empty.");
        fname.reportValidity();
    }
    if (!fname1.checkValidity()) {
        fname.setCustomValidity("First Name can't be empty.");
        fname.reportValidity();
    } else if (!lname1.checkValidity()) {
        fname.setCustomValidity(" Last Name can't be empty.");
        fname.reportValidity();
    } else if (!Sname1.checkValidity()) {
        fname.setCustomValidity(" Street name can't be empty.");
        fname.reportValidity();
    } else if (!city1.checkValidity()) {
        fname.setCustomValidity(" City can't be empty.");
        fname.reportValidity();
    } else if (!province1.checkValidity()) {
        fname.setCustomValidity(" Province can't be empty.");
        fname.reportValidity();
    } else if (!zip1.checkValidity()) {
        zip.setCustomValidity("Zip code must be number");
        zip.reportValidity();
    } else if (!phone1.checkValidity()) {
        fname.setCustomValidity(" Phone number can't be empty.");
        fname.reportValidity();
    }
}