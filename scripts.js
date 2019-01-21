const app = document.getElementById('root');



const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  if (request.status >= 1 && request.status < 250) {
    data.forEach (movie => {
      const card = document.createElement('div');
      card.setAttribute('class', 'section');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const h3 = document.createElement('h3');  
      h3.textContent = `Director: ${movie.director}`;
  
      const h4 = document.createElement('h4');  
      h4.textContent = `Rating ${movie.rt_score}`;

      const p = document.createElement('p');
      p.textContent = movie.description;

      

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h3);
      card.appendChild(h4);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('poop');
    errorMessage.textContent = `failure`;
    app.appendChild(errorMessage);
  }
}

request.send();