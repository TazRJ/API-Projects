//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('#button').addEventListener('click', getRandomnJoke)

const categoriesUrl = `https://api.chucknorris.io/jokes/categories`
fetch(categoriesUrl)
  .then(res => res.json())
  .then(data => {
    data.forEach(category => {
      const newCategory = document.createElement('option')
      newCategory.textContent = category
      document.querySelector('select').appendChild(newCategory)
    });
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

document.querySelector('#categories').addEventListener('change', getCategoryJoke)

function getRandomnJoke(){
  
  // const choice = document.querySelector('input').value
  const url = `https://api.chucknorris.io/jokes/random`
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#randJoke').innerText = data.value
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function getCategoryJoke() {

  const category = document.querySelector('#categories').value
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`

  if (category === '') {
    document.querySelector('#categoryJoke').innerText = "Try again!"
  } else {
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {     
      document.querySelector('#categoryJoke').innerText = data.value
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }
}

