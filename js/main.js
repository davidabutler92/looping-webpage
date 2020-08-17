$(document).ready(function() {
  
  const flavors = ["mint chip", "chocolate", "vanilla", "cherry", "COVID-swirl"];
  const list=document.createElement('ul');

  flavors.forEach(function(element) {
    let li = document.createElement('li');
    li.textContent = element;
    list.appendChild(li);

    const insert = document.querySelector('#insert');
    insert.appendChild(list);
    console.log(insert);

  });
});