function newElement()
{
    let date = new Date();
    date = `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}`; 

    let list = document.getElementById("list");
    let title = document.getElementById("title").value;                         //getting title value from input field
    document.getElementById("title").value = "";                                //setting title input field to empty

    let li = document.createElement("li");                                      //create new list item
    let ulImg = document.createElement("img");                                          
    let titleSpan = document.createElement("span");                             //create title of list item
    let dateSpan = document.createElement("span");                              //create date of list item
    let divBtn = document.createElement("div");                                 //create buttons for list item
    let yesBtn = document.createElement("button");                              //yes button
    let crossBtn = document.createElement("button");                            //no button

    ulImg.src = "list-ul.png";                                                  //setting values of each list item created
    titleSpan.innerHTML = title;
    dateSpan.innerHTML = date;
    yesBtn.innerHTML = "&#10004";
    crossBtn.innerHTML = "&#10006";

    li.className = "list-group-item col-9";                                     //assigning classes to each list item created
    ulImg.className = "imgIcon";
    dateSpan.className = "date";
    yesBtn.className = "button btn btn-outline-primary";
    crossBtn.className = "button btn btn-outline-primary";

    crossBtn.onclick = function() {                                             //if cross button is clicked
        let parentLI = this.parentElement.parentElement;
        list.removeChild(parentLI);
    }

    yesBtn.onclick = function() {                                               //if yes button is click
        let parentLI = this.parentElement.parentElement;
        parentLI.classList.add("bgLi");
    }
    
    divBtn.appendChild(crossBtn);                                               
    divBtn.appendChild(yesBtn);

    li.appendChild(ulImg);                                                      //adding elements to a list item
    li.appendChild(titleSpan);
    li.appendChild(dateSpan);
    li.appendChild(divBtn);

    list.appendChild(li);                                                       //adding an item to a list

}