const modalList = document.querySelector('.modal-list')
const itemBtns = document.querySelectorAll('.item-button')
const cartButton = document.querySelector("#cart-button")
const clearModalButton = document.querySelector('.modal-clear-button')
const modal = document.querySelector(".modal")
const modalCloseButton = document.querySelector('.closeButton')

cartButton.addEventListener('click', () => modal.style.display = 'block')
modalCloseButton.addEventListener('click', () => modal.style.display = 'none')

itemBtns.forEach(button => {
  button.addEventListener('click', function() {
    addItemToCart(this.parentElement)
  })
})

clearModalButton.addEventListener('click', () => {
  document.querySelector('#cart-item-count').textContent = 0
  document.querySelector('.totalCount').textContent = 0
  modalList.innerHTML = ''
})

const addItemToCart = (li) => {
  let itemName = li.children[0].textContent
  let itemPrice = li.children[1].textContent
  let newLi = document.createElement("li")

  updatePrice(+itemPrice.slice(1))
  updateCount()

  newLi.innerHTML = `<span>${itemName}</span> <span class="modal-item-price">${itemPrice}</span>`
  modalList.appendChild(newLi)
}

const updatePrice = (itemPrice) => {
  let currentPrice = +document.querySelector('.totalCount').textContent
  let newPrice = itemPrice + currentPrice
  document.querySelector('.totalCount').textContent = newPrice.toFixed(2)
}

const updateCount = () => {
  let currentCount = +document.querySelector('#cart-item-count').textContent
  document.querySelector('#cart-item-count').textContent = currentCount + 1
}
