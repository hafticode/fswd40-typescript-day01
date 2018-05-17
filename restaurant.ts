let menue = new Map([["Falafel" , 3.99 ],
	                 ["Burger" , 3.99 ],
	                 ["Shawarma" , 4.49 ],
	                 ["Pizza" , 7.99 ],
	                 ["lasagna" , 6.49 ],
	                 ["schnitzel" , 8.99 ],]);
for(let i =0 ; i < menue.length ; i++){
   var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(menu[i]));
   document.body.appendChild(newdiv);
   document.getElementById("falafel").innerHTML = get.menue[i];
}



function falafel(): void{
   let new_item = (<HTMLInputElement>document.getElementById('falafelComment')).value;
   var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(new_item));
   document.getElementById("falafelComments").appendChild(newdiv);
}


function burger(): void{
   let new_item = (<HTMLInputElement>document.getElementById('burgerComment')).value;
   var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(new_item));
   document.getElementById("burgerComments").appendChild(newdiv);
}


function shawarma(): void{
   let new_item = (<HTMLInputElement>document.getElementById('shawarmaComment')).value;
   var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(new_item));
   document.getElementById("shawarmaComments").appendChild(newdiv);
}

function pizza(): void{
   let new_item = (<HTMLInputElement>document.getElementById('pizzaComment')).value;
   var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(new_item));
   document.getElementById("pizzaComments").appendChild(newdiv);
}

function lasagna(): void{
   let new_item = (<HTMLInputElement>document.getElementById('lasagnaComment')).value;
   var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(new_item));
   document.getElementById("lasagnaComments").appendChild(newdiv);
}

function schnitzel(): void{
   let new_item = (<HTMLInputElement>document.getElementById('schnitzelComment')).value;
   var newdiv = document.createElement("p");
   newdiv.appendChild(document.createTextNode(new_item));
   document.getElementById("schnitzelComments").appendChild(newdiv);
}


