const usersDisplay = document.querySelector("#users");
const searchBar = document.querySelector("#searchBar");

searchBar.addEventListener("keyup", filterUsers);

async function fetchData() {
 let users;
 let usersImp;

  await fetch("https://randomuser.me/api?results=50")
    .then((data) => data.json())
    .then((text) => (users = text.results));


  usersImp = users.map((user) => {
    const userObj = {};
    userObj.pic = user.picture;
    userObj.name = user.name;
    userObj.location = user.location;

    return userObj;
  })
  //console.log(usersImp);
  usersDisplay.innerHTML = "";
  
  usersImp.forEach((user) => {
    const userInfoOut = document.createElement("div");
    userInfoOut.className = "userInfoOut";

    const userimage = document.createElement("img");
    userimage.src = user.pic.thumbnail;
    userimage.className = "userImage";

    const userInfoIn = document.createElement("div");
    userInfoIn.className = "userInfoIn";

    const userName = document.createElement("h2");
    userName.className = "userName";
    userName.innerHTML = user.name.first + " " + user.name.last;

    const userLocation = document.createElement("p");
    userLocation.innerHTML = user.location.state + ", " + user.location.country;

    const hr = document.createElement("hr");
    hr.className = "hrule";

    userInfoIn.appendChild(userName);
    userInfoIn.appendChild(userLocation);

    userInfoOut.appendChild(userimage);
    userInfoOut.appendChild(userInfoIn);

    usersDisplay.appendChild(userInfoOut);
    usersDisplay.appendChild(hr);
  })
}

fetchData();

function filterUsers(){
    const searchText = searchBar.value.toLowerCase();
    const items = usersDisplay.children;

    for(let i = 0; i < 100; i++){
        if(i % 2 == 0){
            const itemName = items[i].children[1].children[0].innerHTML.toLowerCase();
            const itemLocation = items[i].children[1].children[1].innerHTML.toLowerCase();
            if(itemName.includes(searchText) || itemLocation.includes(searchText)){
                items[i].classList.remove("hide");
            }
            else{
                items[i].classList.add("hide");
                items[i+1].classList.add("hide");
            }
        }
    }
}