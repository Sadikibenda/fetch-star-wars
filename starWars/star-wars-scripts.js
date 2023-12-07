let starWarsPeopleList = document.querySelector('ul');
        /*fetch("https://swapi.dev/api/people")
          .then(function (response){
               //console.log(response)
               return response.json();
          })
          .then(function (response){
            //console.log(json);
            let people = json.results;

            for (const p of people){
                console.log(p);
            }

            for (const p in people){
                console.log(p)
            }
          })*/
         
        fetch("https://swapi.dev/api/people")
         .then(function(response){
            return response.json();
         })
         .then(function(json){
            let people = json.results;

            for(const p of people){
                let listItem = document.createElement('li');
                listItem.innerText = p.name;
                starWarsPeopleList.appendChild(listItem);
            }
         })