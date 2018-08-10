
(function(){
$(document).ready(function(){

    var container = $('#container');

    $.ajax({
        url: 'data.json'
    }).done(function (data) {
        var json = JSON.parse(data);
        console.log(json);
        var templateScript = $('services').html();
        var template = Handlebars.compile(templateScript);
        var html    = template(json);
        container.append(html);
    })

    $('.sidenav').sidenav({
    menuWidth: 250,
    closeOnClick: true   
  });
  $('.carousel').carousel();
  $('.collapsible.expandable').collapsible();



});


// function createInfoBlock () {

// var container = document.getElementById('container');
// var template = document.getElementById('template-accordeon');
// var tmpl = _.template(template.textContent);
// var compiled = _.template(tmpl);

// console.log(container);
// console.log(document.getElementById('template-accordeon'));
// console.log(template);
// console.log(tmpl);
// console.log(compiled);

// fetch("../data.json")
// .then(function(response){
//   if (response.ok){
//     return response.json();
//   }
//   throw new Error('Error during fetch');
// })
// .then(function(data){
//   var info = _.map(data.articles, function(item){
//           return {
//         title:item.title,
//         body: item.body
//         };

//   });
// render(compiled, data, container);
//   })
// }

// function render(template, data, parent) {
//   var htmlString = ' ';
//   _.forEach(data, function(item) {
//     htmlString += template(item);
//   });

// parent.innerHTML = htmlString;
// }

// createInfoBlock ();
})();