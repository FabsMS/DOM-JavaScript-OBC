function addContact(){
    const contactSection = document.getElementById('contactsList')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = "Nome: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'contactName'

    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)

    const tellLi = document.createElement('li')
    tellLi.innerText = "Telefone: "
    const tellInput = document.createElement('input')
    tellInput.type = 'text'
    tellInput.name = 'contactTell'

    tellLi.appendChild(tellInput)
    ul.appendChild(tellLi)

    const enderecoLi = document.createElement('li')
    enderecoLi.innerText = 'Endereço: '
    const enderecoInput = document.createElement('input')
    enderecoInput.type = 'text'
    enderecoInput.name = 'contactEndereco'

    enderecoLi.appendChild(enderecoInput)
    ul.appendChild(enderecoLi)

    contactSection.append(h3, ul)
}

function removeContact(){
    const contactSection = document.getElementById('contactsList')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}