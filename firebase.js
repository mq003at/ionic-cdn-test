// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCig2svNhWlbPbU852ykQugTq3zG9qcwQo",
  authDomain: "ionic-test-1eb30.firebaseapp.com",
  projectId: "ionic-test-1eb30",
  storageBucket: "ionic-test-1eb30.appspot.com",
  messagingSenderId: "47909479809",
  appId: "1:47909479809:web:14a422c90417babb67f480",
  measurementId: "G-T72CG336Z5",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Import the database into our project
const db = firebase.firestore();

// Get the collections
db.collection('notes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderNotes(doc);
    })
});

// Add the collection to our website
function renderNotes(doc){
    var li = document.createElement("ion-item");
    var inputValue = doc.data().name;
    var t = document.createTextNode(inputValue);
    if (doc.data().checked) {li.classList.add("checked")}
    li.appendChild(t);
    li.onclick = function strikeIt(){
        this.classList.toggle("checked");
        // console.log(li.innerHTML);
        // Set the "checked" field 'checked'
        db.collection("notes").doc(inputValue).update({
            checked: this.classList.contains("checked")
        })
    };
    document.getElementById("myUL").appendChild(li);
}

// Add to the collections and add stuff to the list
function newElement() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        const alert = document.createElement('ion-alert');
         alert.header = 'Warning!';
         alert.message = 'You forgot to type in the Todo note. Please take a look back.';
         alert.buttons = ['OK!'];

         document.body.appendChild(alert);
         alert.present();
        } else {
            db.collection('notes').doc(inputValue).set({
                name: inputValue,
                checked: false
            }).then(() => {location.reload(); return false;}) 
            .catch((error) => console.error(error));
        }
}

// Update the collection & strike the items


