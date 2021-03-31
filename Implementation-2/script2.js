window.onload = function() {                                            //retrieving list items from local storage on page reload

    if (localStorage.getItem("list"))
    {
        let arr = JSON.parse(localStorage.getItem("list"));
        arr.forEach(element => {

            let list = document.getElementById("list");
            let title = document.getElementById("title").value;
            document.getElementById("title").value = "";

            let li = document.createElement("li");
            let ulImg = document.createElement("img");
            let idSpan = document.createElement("span");
            let titleSpan = document.createElement("span");
            let dateSpan = document.createElement("span");
            let divBtn = document.createElement("div");
            let yesBtn = document.createElement("button");
            let crossBtn = document.createElement("button");

            ulImg.src = "list-ul.png";
            idSpan.innerHTML = element.id;
            titleSpan.innerHTML = element.title;
            dateSpan.innerHTML = element.date;
            yesBtn.innerHTML = "&#10004";
            crossBtn.innerHTML = "&#10006";

            li.className = "list-group-item col-9";
            ulImg.className = "imgIcon";
            idSpan.style.display = "none";
            dateSpan.className = "date";
            yesBtn.className = "button btn btn-outline-primary";
            crossBtn.className = "button btn btn-outline-primary";

            if (element.completed == true)
            {
                li.classList.add("bgLi");
            }

            crossBtn.onclick = function() {
                let parentLI = this.parentElement.parentElement;
                list.removeChild(parentLI);

                arr = JSON.parse(localStorage.getItem("list"));
                arr.filter(item => item.title != parentLI.children[1].innerHTML);
                arr = arr.filter(item => item.id != parentLI.children[1].innerHTML);

                localStorage.setItem("list",JSON.stringify(arr));
            }

            yesBtn.onclick = function() {
                let parentLI = this.parentElement.parentElement;
                parentLI.classList.add("bgLi");

                arr = JSON.parse(localStorage.getItem("list"));
                index = arr.findIndex(x => x.id == parentLI.children[1].innerHTML);
                arr[index].completed = true;

                localStorage.setItem("list",JSON.stringify(arr));
            }
            
            divBtn.appendChild(crossBtn);
            divBtn.appendChild(yesBtn);

            li.appendChild(ulImg);
            li.appendChild(idSpan);
            li.appendChild(titleSpan);
            li.appendChild(dateSpan);
            li.appendChild(divBtn);

            list.appendChild(li);
            
        });
    }
}

function newElement()
{
    let date = new Date();
    date = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}`; 

    let arr = JSON.parse(localStorage.getItem("list") || "[]");
    let id = (arr.length == 0) ? 1 : (arr[arr.length-1].id) + 1; 

    let list = document.getElementById("list");
    let title = document.getElementById("title").value;                         //getting title value from input field
    document.getElementById("title").value = "";                                //setting title input field to empty

    let li = document.createElement("li");                                      //create new list item
    let ulImg = document.createElement("img");      
    let idSpan = document.createElement("span");                                    
    let titleSpan = document.createElement("span");                             //create title of list item
    let dateSpan = document.createElement("span");                              //create date of list item
    let divBtn = document.createElement("div");                                 //create buttons for list item
    let yesBtn = document.createElement("button");                              //yes button
    let crossBtn = document.createElement("button");                            //no button

    ulImg.src = "list-ul.png";                                                  //setting values of each list item created
    idSpan.innerHTML = id;
    titleSpan.innerHTML = title;
    dateSpan.innerHTML = date;
    yesBtn.innerHTML = "&#10004";
    crossBtn.innerHTML = "&#10006";

    li.className = "list-group-item col-9";                                     //assigning classes to each list item created
    ulImg.className = "imgIcon";
    idSpan.style.display = "none";
    dateSpan.className = "date";
    yesBtn.className = "button btn btn-outline-primary";
    crossBtn.className = "button btn btn-outline-primary";

    crossBtn.onclick = function() {                                            //if cross button is clicked
        let parentLI = this.parentElement.parentElement;
        list.removeChild(parentLI);

        arr = arr.filter(item => item.id != parentLI.children[1].innerHTML);            //removing list item from local storage
        localStorage.setItem("list",JSON.stringify(arr)); 
    }

    yesBtn.onclick = function() {                                               //if yes button is clicked
        let parentLI = this.parentElement.parentElement;
        parentLI.classList.add("bgLi");

        index = arr.findIndex(x => x.id == parentLI.children[1].innerHTML);             //marking compeleted=true in local storage
        arr[index].completed = true;

        localStorage.setItem("list",JSON.stringify(arr));

        this.removeEventListener("click");
    }

    divBtn.appendChild(crossBtn);
    divBtn.appendChild(yesBtn);

    li.appendChild(ulImg);                                                      //adding elements to a list item
    li.appendChild(idSpan);
    li.appendChild(titleSpan);
    li.appendChild(dateSpan);
    li.appendChild(divBtn);

    list.appendChild(li);                                                       //adding an item to a list

    let obj = {id,title,date,completed:false};                                  

    arr.push(obj);                                                              //adding list item to local storage

    localStorage.setItem("list",JSON.stringify(arr));

}