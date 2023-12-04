
const footer = document.createElement('footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = `<p>Copyright © ${currentYear} Brandon Paprocke. All rights reserved.</p>`;
document.body.appendChild(footer);

function DisplayText() {
    alert("YaaaaaaaaaaaaaY!");
  }
  
const button = document.querySelector('button');

button.addEventListener('mouseover', () => {

    button.style.backgroundColor = 'Pink';
});

button.addEventListener('mouseout', () => {

  button.style.backgroundColor = '';
});

var clicks = 0;

function onClick(add) {
  clicks += 1;

  document.getElementById('clicks').innerHTML = clicks;
document.getElementById('clicks').value = clicks;
if (clicks % 2 == 1) {
    document.getElementById('clicks').classList.remove('odd')
document.getElementById('clicks').classList.add('even')
}
else {document.getElementById('clicks').classList.remove('even')
document.getElementById('clicks').classList.add('odd')}
};
