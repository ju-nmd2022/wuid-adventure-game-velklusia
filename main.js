//Changes classes on on the icons of the items to show them when we get a value on the different keys.
//https://www.folkstalk.com/tech/replace-class-with-code-examples/ here I got help with how to replace one class with another. 

let book=document.getElementById("book")
let heels=document.getElementById("heels")
let present=document.getElementById("present")

if(typeof (book)!="undefined"&&book!=null){
    let backgroundImage=document.getElementById("background")
    let item=document.querySelector("[data-name='item']")
    
    backgroundImage.addEventListener("click",function(){
        item.style.display="flex"
        let itemType = item.id
        saveToSessionStorage("pickedUp"+itemType, item)
        console.log(sessionStorage);
    })
}

if(typeof (heels)!="undefined"&&heels!=null){
    let backgroundImage=document.getElementById("background")
    let item=document.querySelector("[data-name='item']")
    
    backgroundImage.addEventListener("click",function(){
        item.style.display="flex"
        let itemType = item.id
        saveToSessionStorage("pickedUp"+itemType, item)
        console.log(sessionStorage);
    })
}

if(typeof (present)!="undefined"&&present!=null){
    let backgroundImage=document.getElementById("background")
    let item=document.querySelector("[data-name='item']")
    
    backgroundImage.addEventListener("click",function(){
        item.style.display="flex"
        let itemType = item.id
        saveToSessionStorage("pickedUp"+itemType, item)
        console.log(sessionStorage);
    })
}

function updateCollectedItems() {
    if(sessionStorage.getItem("pickedUpbook") !== null){
        console.log("You managed to pick up the magic book! There you can try to find a solution to create a magic coctail to save smurphs before it is too late! you have party")
        book.classList.replace("bookHidden", "bookVisible");
    }
    if(sessionStorage.getItem("pickedUpheels") !== null){
        console.log("you have heels")
        heels.classList.replace("heelsHidden", "heelsVisible");
    }
    if(sessionStorage.getItem("pickedUppresent") !== null){
        console.log("you have present")
        present.classList.replace("presentHidden", "presentVisible");
    }
}
//Makes the browser load the following in the end of the HTML.
window.onload = function() {
     let party = document.getElementById("party");
     let win = document.getElementById("win");
     let village = document.getElementById("village");
     let gargamel = document.getElementById("gargamel");
    updateCollectedItems();
    let winRandom = Math.floor(Math.random() * 2);
    console.log(winRandom);
    //Adds a key ("party") and a value ("true") in the sessionStorage and there by the updateCollectedItems to show the book icon on the top.
    //if is in the beginning added to only use Listener if we have an id called "party". This to not get errors in the code.
if(party){
    party.addEventListener("click", () => {
        saveToSessionStorage("party", true);
        updateCollectedItems();
     });
}
    // Adds a key ("present") and a value ("true")" in the sessionStorage and there by the updateCollectedItems to show the present icon on the top.
    // This if "party" has a value. If it doesn't, then you get an alert message instad that you need "party" first.
    //if is in the beginning added to only use Listener if we have an id called "gargamel". This to not get errors in the code.
if(gargamel){
    gargamel.addEventListener("click", function () {
        if (sessionStorage.getItem("party")){
            gargamel.src = "gargamel-2.svg";
            saveToSessionStorage("present", true);
            updateCollectedItems();
        }  else{
        alert("You have to get your heels before getting the present. Present is going to distract Gargamel bur Smurfette needs her heels to run from Gargamel.")
        }
    });
}
    // Changes the value of "heels" to "true" in the sessionStorage and there by the updateCollectedItems to show the present icon on the top.
    // This if "present" has a value. If it doesn't, then you get an alert message instad that you need "present" first.
    //if is in the beginning added to only use Listener if we have an id called "village". This to not get errors in the code.
if(village){
    village.addEventListener("click", function () {
        if (sessionStorage.getItem("present")){ 
            village.src = "images/village-2.svg"
            saveToSessionStorage("heels", true);
            updateCollectedItems();
            } 
            else {
                alert("Before getting into your village you need to get a present that is going to distract Gargamel!")
                }
    });
}
    //if is in the beginning added to only use Listener if we have an id called "win". This to not get errors in the code.
if(win){
    win.addEventListener("click", function () {
            //If mathRandom has the value 0 you get an alert message that you dropped your item. 
            // If the value is 0 sessionStorage.clear is executed. 
        if (winRandom === 0){
            alert ("Oh no! Gargamel caught another Smurf while you were busy saving smurfette. Hurry up and collect your items again to save Brainy.")
            sessionStorage.clear();
            let item=document.querySelectorAll("[data-name='item']")
            for (let i = 0; i < item.length; i++) {
               item[i].style.display="none"
            }
        }
            //If winRandom is another value than 0 and have a value on "party", "present" & "heels" you get an alert winning message. 
        else if (winRandom === 1){
            if (sessionStorage.getItem("pickedUpbook") && sessionStorage.getItem("pickedUppresent") && sessionStorage.getItem("pickedUpheels")){ 
            alert("🏅 You got all the items that you needed to save a Smurfette! Amazing job! 🎉")
            }
            else{
                alert("You have to get your heels, present and a book before leaving home!")
                }
        }

            //If you don't have values on all three of these above, you get an alert that you have to get them first.
    });
}
};
//Function that enabled me to store everything that a person picked up in the session storage. That means that after refreshing the page I am still able as a player to see the items I gathered before

function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}