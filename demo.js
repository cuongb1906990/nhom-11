const firebaseConfig = {
  apiKey: "AIzaSyDzfkvZgarglFlXwdrV3l4Yy8V7_ZC0cso",
  authDomain: "do-muc-nuoc.firebaseapp.com",
  databaseURL: "https://do-muc-nuoc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "do-muc-nuoc",
  storageBucket: "do-muc-nuoc.appspot.com",
  messagingSenderId: "515424281555",
  appId: "1:515424281555:web:0b2ab7b8e3f2c59c7a8526",
  measurementId: "G-SB7Z2GXS1L"
};
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
   var cao = document.getElementById('cao');
   var dbRef = firebase.database().ref("muc_nuoc").child('cao');
   dbRef.on('value', snap => cao.innerHTML = snap.val() + "_cm");
  

   var btnOn = document.getElementById("btnOnId_01");
   var btnOff = document.getElementById("btnOffId_01");

   btnOn.onclick = function(){

    firebase.database().ref("/muc_nuoc").update({
    "led": 1 

   });
   }
   btnOff.onclick = function(){
   
    firebase.database().ref("/muc_nuoc").update({
    "led" : 0
   });
   }
   firebase.database().ref("/muc_nuoc/led").on("value", function(snapshot){
    var ss = snapshot.val();
    if (ss==1){
    document.getElementById("denId_01").src = "./hinh anh/sáng.png";
  }
    else{
    document.getElementById ("denId_01").src="hinh anh/tắt.png"
  }
    
   });
  
  //  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var cao_1 = document.getElementById('cao_1');
  var dbRef = firebase.database().ref("muc_nuoc_1").child('cao_1');
  dbRef.on('value', snap => cao_1.innerHTML = snap.val() + "_cm");
 

  var btnOn = document.getElementById("btnOnId_02");
  var btnOff = document.getElementById("btnOffId_02");
  btnOn.onclick = function(){
   document.getElementById ("denId_02").src = "./hinh anh/sáng.png"
  firebase.database().ref("/muc_nuoc_1").update({
   "led": 1 

  });
  }
  btnOff.onclick = function(){
    document.getElementById ("denId_02").src="hinh anh/tắt.png"
   firebase.database().ref("/muc_nuoc_1").update({
   "led" : 0
  });
  }
  firebase.database().ref("/muc_nuoc_1/led").on("value", function(snapshot){
    var ss = snapshot.val();
    if (ss==1){
    document.getElementById("denId_02").src = "./hinh anh/sáng.png";
  }
    else{
    document.getElementById ("denId_02").src="hinh anh/tắt.png"
  }
    
   });