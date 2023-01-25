//The following code works because of the courtesy of the lab assistant Lucas that have helped me a lot to fix all the bugs that appeared in the written code. Thank you Lucas!

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
        console.log("You managed to pick up the magic book! There you can try to find a solution to create a magic coctail to save smurphs before it is too late!")
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

window.onload = function() {
     let party = document.getElementById("party");
     let win = document.getElementById("win");
     let village = document.getElementById("village");
     let gargamel = document.getElementById("gargamel");
    updateCollectedItems();
    let winRandom = Math.floor(Math.random() * 2);
    console.log(winRandom);
   
if(party){
    party.addEventListener("click", () => {
        saveToSessionStorage("party", true);
        updateCollectedItems();
     });
}

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
   
if(village){
    village.addEventListener("click", function () {
        if (sessionStorage.getItem("present")){ 
            village.src = "images/village-2.svg"
            saveToSessionStorage("heels", true);
            updateCollectedItems();
            } 
            else {
                alert("Before heading to the village you need to get a present that is going to distract Gargamel!")
                }
    });
}
   
if(win){
    win.addEventListener("click", function () {
        if (winRandom === 0){
            alert ("Oh no! Gargamel caught another Smurf while you were busy saving smurfette. Hurry up and collect your items again to save Brainy.")
            sessionStorage.clear();
            let item=document.querySelectorAll("[data-name='item']")
            for (let i = 0; i < item.length; i++) {
               item[i].style.display="none"
            }
        }
        else if (winRandom === 1){
            if (sessionStorage.getItem("pickedUpbook") && sessionStorage.getItem("pickedUppresent") && sessionStorage.getItem("pickedUpheels")){ 
            alert("You got all the things that you needed to save a Smurfette! Smurfs are now free and they are no longer endangered by Gargamel")
            }
            else{
                alert("You have to get your heels, present and a book before you can save all the Smurfs!")
                }
        }
    });
}
};

function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
}
