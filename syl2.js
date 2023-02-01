let towns = [
  'Castle Templehof', //0
  'East Hunger Wood', //1
  'East Krondorf',    //2
  'East Siegfriedhof',//3
  'East Vierstein',   //4
  'Essen',            //5
  'Folburg',          //6
  'Gerhof',           //7
  'Grim Wood',        //8
  'Helfort',          //9
  'Hunger Wood',      //10
  'Konigstein Tower', //11
  'Leicheberg',       //12
  'Lichenheim',       //13
  'Murieste',         //14
  'Naubonm',          //15
  'North Murieste',   //16
  'Siegfriedhof',     //17
  'South Hunger Wood',//18
  'South Krondorf',   //19
  'Stephansdorp',     //20
  'Sternieste',       //21
  'Swartzhafen',      //22
  'Templehof',        //23
  'The Ruins',        //24
  'The Wald',         //25
  'Vanheltor',        //26
  'Vierstein'         //27
];
let townsText = [
'territory unclaimed 1',//0
'territory unclaimed',//1
'territory unclaimed',//2
'territory unclaimed',//3
'territory unclaimed',//4
'territory unclaimed',//5
'territory unclaimed',//6
'territory unclaimed',//7
'territory unclaimed',//8
'territory unclaimed',//9
'territory unclaimed',//10
'territory unclaimed',//11
'territory unclaimed',//12
'territory unclaimed',//13
'territory unclaimed',//14
'territory unclaimed',//15
'territory unclaimed',//16
'territory unclaimed',//17
'territory unclaimed',//18
'territory unclaimed',//19
'territory unclaimed',//20
'territory unclaimed',//21
'territory unclaimed',//22
'territory unclaimed',//23
'territory unclaimed',//24
'territory unclaimed',//25
'territory unclaimed',//26
'territory unclaimed' //27
]

document.querySelectorAll('path').forEach(item => {
item.addEventListener('click', function () {
  var modal1 = document.getElementById('europemodal');
  var span1 = document.getElementsByClassName('close')[0];
  modal1.style.display = 'block';
  document.getElementById('regionName').innerHTML =this.id;
  let x = towns.indexOf(this.id);
  document.getElementById('regionText').innerHTML= townsText[x];
  span1.onclick = function() {
    modal1.style.display = 'none';
  }
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = 'none';
    }
  }
})
});