const colorPicker = document.getElementById("color-picker")
let selectedColor = colorPicker.value.replace(/^#/,'')

const modes = document.getElementById("modes")
let selectedModes = modes.value

const colorBtn = document.getElementById('color-btn')
const colorScheme = document.getElementById('color-scheme')

let colorArray=[]

colorBtn.addEventListener('click', () => {
    let selectedColor = colorPicker.value.replace(/^#/, '')
    let selectedModes = modes.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedColor}&mode=${selectedModes}&count=5`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            colorArray = data.colors;
            renderData()
        });
});

function renderData() {
    let colorHTML = ''
    colorArray.forEach((element) => {
        const { hex } = element
        colorHTML += `<div class="color-card" onclick="CopyColor('${hex.value}')">
                          <div class="colors" style="background-color:${hex.value};"></div>
                          <div class="color-values" id="colors-values"><p>${hex.value}</p></div>    
                      </div>`
    });
    colorScheme.innerHTML = colorHTML;
}


function CopyColor(hexValue) {
  navigator.clipboard.writeText(hexValue).then(() => {
      alert("Copied the text: " + hexValue);
  })
}




