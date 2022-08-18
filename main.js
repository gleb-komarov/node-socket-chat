const socket = io()
const messages = document.querySelector('.messages')
const form = document.querySelector('.form')
const input = document.querySelector('.input')
const nameBlock = document.querySelector('.name')

const userName = prompt('Enter your name:')
nameBlock.innerHTML = `${userName}`

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (input.value) {
        socket.emit('chat-msg', {
            message: input.value,
            name: userName
        })
        input.value = ''
    }
})

socket.on('chat-msg', (data) => {
    const item = document.createElement('li');
    item.innerHTML = `<span>${data.name}</span>: ${data.message}`
    messages.appendChild(item)
    window.scrollTo(0, document.body.scrollHeight)
})