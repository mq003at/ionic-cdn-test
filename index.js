console.log("JS added")

// Strike the item
function strikeIt(object) {
    object.classList.toggle("checked");
}

// Add stuff to the list
function newElement() {
    console.log(document.getElementById("myInput").value);
    var li = document.createElement("ion-item");
    li.onclick = function strikeIt(){this.classList.toggle("checked")};
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    console.log(li);
    li.appendChild(t);
    if (inputValue === '') {
        const alert = document.createElement('ion-alert');
         alert.header = 'Warning!';
         alert.message = 'You forgot to type in the Todo note. Please take a look back.';
         alert.buttons = ['OK!'];

         document.body.appendChild(alert);
         alert.present();
        } else {
    document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

}





