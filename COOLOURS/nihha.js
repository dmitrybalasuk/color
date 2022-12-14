const cols = document.querySelectorAll('.col')

document.addEventListener('keydown', (event) => {
    event.preventDefault()
    if (event.code.toLowerCase = 'Space'){
        setRandomColors()     
    }
})

document.addEventListener('click', (event) => { 
    const type = event.target.dataset.type
    
    if (type === 'lock') {
        const node = event.target.tagName.toLowerCase() === 'i'
            ? event.target
            : event.target.children[0]
        
        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
            
    }
})

function generateRandomColor() {
   
    const nexCodes = '0123456789ABCDEF'
    let color = ''
    for(let i = 0; i < 6; i++){
        color += nexCodes[Math.floor(Math.random() * nexCodes.length)]
    }
    return '#' + color
}

function copyToClickBoard(text){
    
}

function setRandomColors() {
    cols.forEach((col) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock')
        const text = col.querySelector('h2')
        const button = col.querySelector('button')
        const color = chroma.random()
        
        if (isLocked) {
            return
        }
        
        text.textContent = color
        col.style.background = color
        
        setTextColor(text, color)
        setTextColor(button, color)
    })
    
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance()
    text.style.color = luminance > 0.5 ? 'black' : 'white'
}

setRandomColors()
