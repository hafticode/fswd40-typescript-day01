var menue = new Map([["Falafel", 3.99],
    ["Burger", 3.99],
    ["Shawarma", 4.49],
    ["Pizza", 7.99],
    ["lasagna", 6.49],
    ["schnitzel", 8.99],]);
for (var i = 0; i < menue.length; i++) {
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(menu[i]));
    document.body.appendChild(newdiv);
    document.getElementById("falafel").innerHTML = get.menue[i];
}
function falafel() {
    var new_item = document.getElementById('falafelComment').value;
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(new_item));
    document.getElementById("falafelComments").appendChild(newdiv);
}
function burger() {
    var new_item = document.getElementById('burgerComment').value;
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(new_item));
    document.getElementById("burgerComments").appendChild(newdiv);
}
function shawarma() {
    var new_item = document.getElementById('shawarmaComment').value;
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(new_item));
    document.getElementById("shawarmaComments").appendChild(newdiv);
}
function pizza() {
    var new_item = document.getElementById('pizzaComment').value;
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(new_item));
    document.getElementById("pizzaComments").appendChild(newdiv);
}
function lasagna() {
    var new_item = document.getElementById('lasagnaComment').value;
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(new_item));
    document.getElementById("lasagnaComments").appendChild(newdiv);
}
function schnitzel() {
    var new_item = document.getElementById('schnitzelComment').value;
    var newdiv = document.createElement("p");
    newdiv.appendChild(document.createTextNode(new_item));
    document.getElementById("schnitzelComments").appendChild(newdiv);
}
