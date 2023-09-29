document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const date = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=kKWlyFyRKqktfbK9l1TPJUgQdunmryImWo9UkvrL&date=${date}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type === 'image'){
          document.querySelector('iframe').style.display = "none"
          document.querySelector('img').style.display = "block"
          document.querySelector('img').src = data.hdurl
        } else if (data.media_type === 'video'){
          document.querySelector('img').style.display = "none"
          document.querySelector('iframe').style.display = "block"
          document.querySelector('iframe').src = data.url
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('p').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

