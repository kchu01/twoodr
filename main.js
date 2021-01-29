
// Work
const newTwood = document.querySelector('#twood-input').value;

const button = document.querySelector('#submit-twood');
button.addEventListener('click', function () {
  console.log('Button clicked!')

const showTwood = document.querySelector('.twood')

showTwood.innerText = newTwood
} )

var twoodTimer = document.querySelector('.cutoff.hidden')

console.log(twoodTimer)

setTimeout(function(){
  document.querySelector('.cutoff').classList.remove('hidden');
}, 200000);



// const alertFunc() {
//   alert("Time is up!");
// }


// setTimeout(function(){
// document.write("Session Timed Out. Goodbye Twooder!");
// }, 20000);


newTwood.classList.add('twood');
newTwood.innerText = newText
