//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`
  const classUl = document.querySelector('#Classes');
  const subClassUl = document.querySelector('#subClasses');

  // Clear previous <li> elements
  const subClassLiElements = subClassUl.querySelectorAll('li');
  subClassLiElements.forEach(li => subClassUl.removeChild(li));

  const ClassLiElements = classUl.querySelectorAll('li');
  ClassLiElements.forEach(li => classUl.removeChild(li));
  
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        
        console.log(data.subclasses)
        console.log(data.name)
        document.querySelector('h2').innerText = data.name
      
        data.classes.forEach(obj => {
          
          //create li
          const li = document.createElement('li')
          //set the li content to the object name
          li.textContent = obj.name
          //append the li as a child to the ul
          document.querySelector('#Classes').appendChild(li)
        
        });
        data.subclasses.forEach(obj => {
          
          //create li
          const li = document.createElement('li')
          //set the li content to the object name
          li.textContent = obj.name
          //append the li as a child to the ul
          document.querySelector('#subClasses').appendChild(li)
        
        });

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

