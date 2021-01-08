// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyA8UYDCPPfxS9lnJZNyYJ2_dAhV_I_Kz-4",
    authDomain: "golf-academy-v1.firebaseapp.com",
    projectId: "golf-academy-v1",
    storageBucket: "golf-academy-v1.appspot.com",
    messagingSenderId: "171731434365",
    appId: "1:171731434365:web:e6871b4f7591214720aa14",
    measurementId: "G-M7259S827D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

function comment() {


    // var name = $('#contact #name').val();
    // var message = $('#contact textarea').val();
    var name=document.getElementById("name").value;
      var message=document.getElementById("message").value;
    console.log("Hello comment", name);

    var newMessagekey = database.ref().child('comments').push().key;
    database.ref('comments/' + newMessagekey + '/name').set(name);
    database.ref('comments/' + newMessagekey + '/message').set(message);
    // Listen for form submit
    document.getElementById('blogForm').addEventListener('submit', submitForm);

    // Submit form
    function submitForm(e) {
        e.preventDefault();


        // Show alert
        // document.querySelector('.alert').style.display = 'block';

        // // Hide alert after 3 seconds
        // setTimeout(function () {
        //     document.querySelector('.alert').style.display = 'none';
        // }, 3000);
    }

}
//This is the perfect way to retrieve data leaving all the dull ways of youtubers now
var leadsRef = database.ref('comments');
leadsRef.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        // console.log(childData.message)

        var name = document.createTextNode( childData.name);
        var comment = document.createTextNode( childData.message);




        var ult = document.getElementById("scoreList");
        var lit = document.createElement("li");
        lit.setAttribute('class', 'uls');
        lit.appendChild(name);
        lit.appendChild(document.createElement('br'));
        lit.appendChild(comment);
        lit.appendChild(document.createElement('br'));
        ult.appendChild(lit);
    });
});