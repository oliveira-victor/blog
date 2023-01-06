let title = ''
let author = ''
let d = ''
let year = ''
let text = ''
let newPost = []
let color = 'grey'
let themeDisplay = 'grid'

function postText() {
    title = document.querySelector('#input-title')
    author = document.querySelector('#input-author')
    d = new Date()
    year = d.getFullYear()
    text = document.querySelector('#input-text')

    const subject = document.querySelector('.posts-container')

    if (title.value == '' || author.value == '' || text.value == '') {
        alert('Por favor, preencha todos os campos.')
    } else {

    const autoCode = `<h1 class="post-title">${title.value}</h1>
        <h3 class="post-author">${author.value}</h3>
        <p class="post-time">${d}</p>
        <p class="post-text"></p>
        </div>`

    if (color == 'yellow') {
        newPost = `<div class="post yellow">${autoCode}`
    } else if (color == 'blue') {
        newPost = `<div class="post blue">${autoCode}`
    } else if (color == 'green') {
        newPost = `<div class="post green">${autoCode}`
    } else if (color == 'red') {
        newPost = `<div class="post red">${autoCode}`
    } else {
        newPost = `<div class="post">${autoCode}`
    }

    subject.insertAdjacentHTML('afterend', newPost)

    document.querySelector('.post-text').innerText = `${text.value}`

    document.querySelector('.no-posts').style.display = 'none'

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // document.querySelector('.posts-container').innerHTML = newPost

    title.value = ''
    author.value = ''
    text.value = ''
    }
}

function chooseGrey() {
    color = 'grey'
    document.getElementById('yellow').style.border = 'none'
    document.getElementById('green').style.border = 'none'
    document.getElementById('blue').style.border = 'none'
    document.getElementById('red').style.border = 'none'
    document.getElementById('grey').style.border = '2px solid #000'
}

function chooseYellow() {
    color = 'yellow'
    document.getElementById('grey').style.border = 'none'
    document.getElementById('blue').style.border = 'none'
    document.getElementById('green').style.border = 'none'
    document.getElementById('red').style.border = 'none'
    document.getElementById('yellow').style.border = '2px solid #000'
}
function chooseBlue() {
    color = 'blue'
    document.getElementById('grey').style.border = 'none'
    document.getElementById('green').style.border = 'none'
    document.getElementById('yellow').style.border = 'none'
    document.getElementById('red').style.border = 'none'
    document.getElementById('blue').style.border = '2px solid #000'
}
function chooseGreen() {
    color = 'green'
    document.getElementById('grey').style.border = 'none'
    document.getElementById('blue').style.border = 'none'
    document.getElementById('yellow').style.border = 'none'
    document.getElementById('red').style.border = 'none'
    document.getElementById('green').style.border = '2px solid #000'
}
function chooseRed() {
    color = 'red'
    document.getElementById('grey').style.border = 'none'
    document.getElementById('blue').style.border = 'none'
    document.getElementById('yellow').style.border = 'none'
    document.getElementById('green').style.border = 'none'
    document.getElementById('red').style.border = '2px solid #000'
}

function toggleDisplay() {
    if (themeDisplay == 'grid') {
        document.querySelector('.division').style.display = 'block'
        document.querySelector('.container').style.width = '60%'
        themeDisplay = 'block'
        document.querySelector('.toggle').innerHTML = '<h1>⇄</h1>'
    } else { 
        document.querySelector('.division').style.display = 'grid'
        document.querySelector('.container').style.width = '80%'
        themeDisplay = 'grid'
        document.querySelector('.toggle').innerHTML = '<h1>⇅</h1>'
    }
    
}



/* document.querySelector('.post').style.background = 'red' */

/*
function postText() {
    title = document.querySelector('#input-title')
    author = document.querySelector('#input-author')
    d = new Date()
    year = d.getFullYear()
    text = document.querySelector('#input-text')

    if (title.value == '' || author.value == '' || text.value == '') {
        alert('Por favor, preencha todos os campos.')
    } else {
        newPost += `
    <div class="post">
    <h1 class="post-title">${title.value}</h1>
    <h3 class="post-author">${author.value}</h3>
    <p class="post-time">${d} | ${year}</p>
    <p class="post-text">${text.value}</p>
    </div>
    `

    document.querySelector('.posts-container').innerHTML = newPost

    title.value = ''
    author.value = ''
    text.value = ''
    }
}
*/