$("#select-city").change(
    evt => {
        var id = evt.target.value;
        console.log(id);
        
        if (id === ""){
            return;
        }

        var key = '779b060de8050ff37c4b63a8310bc9c4';

        // var url = "https://www.metaweather.com/api/location/" + id;  // fonctionne pas
        var url = "https://api.openweathermap.org/data/2.5/weather?q=Tangier&appid=" + key;

        $.getJSON(url, json => {
            console.log(json);
        });
    }
);