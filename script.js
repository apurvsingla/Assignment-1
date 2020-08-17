
// function findCaliforniaCafes(str) {
//     $.get(cafe, function(data) {
//         let arr = [data]
//         arr.map(a => {
//             console.log(a)
//         })
//     });
    
//     let placeDetails = $.get(places, function(data) {
//         return data
//     });
//     let arr = [cafeDetails]
//     console.log(arr)

//     let cafe_ = arr.filter(cafe => {
//         console.log(cafe.name)
//         if(cafe.name == str){
//             let place_id = cafe.place_id;
//             let cafe_name = cafe.name;
//             Object.values(placeDetails).filter(place => {
//                 if(place.id === place_id){
//                     place.name = cafe_name;
//                     delete place.id;
//                     console.log(place)
//                     return place;
//                 }
//             })
//         }
//     });
//       let populate = $('#table');
//       populate.append(`<tbody><tr><td class='column1'>1</td><td class='column2'>${cafe_.name}</td><td class='column3'>${cafe_.locality}</td><td class='column4'>${cafe_.postal_code}</td><td class='column5'>${cafe_.lat}</td><td class='column6'>${cafe_.long}</td></tr></tbody>`)
  
// }

// let search = $('#search-in');

// findCaliforniaCafes(search);

function find(str){
    let places = "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/places.json";
    let cafe = "https://raw.githubusercontent.com/debojyoti/places-fake-rest-api/master/cafes.json";
    fetch(cafe)
    .then(res => res.json())
    .then(data => {
        data.cafes.filter(cafe => {
            if(cafe.name.includes(str)){
                let place_id = cafe.location_id;
                let cafe_name = cafe.name;
                console.log(cafe.name)
                fetch(places)
                .then(res => res.json())
                .then(data => {
                    data.places.filter(place => {
                        if(place.id === place_id){
                            place.name = cafe_name;
                            delete place.id;
                            console.log(place);
                            let populate = $('#table');
                            populate.append(`<tbody><tr><td class='column1'>1</td><td class='column2'>${place.name}</td><td class='column3'>${place.locality}</td><td class='column4'>${place.postal_code}</td><td class='column5'>${place.lat}</td><td class='column6'>${place.long}</td></tr></tbody>`)
                        }
                    })
                });
            }
        })
    });
}

let search = $('#search-in').val("Bazaar");
let value = search.val();
find(value)
