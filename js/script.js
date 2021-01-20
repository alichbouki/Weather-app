$("#select-city").change(
    evt => {
        var id = evt.target.value;
        console.log(id);
        
        if (id === ""){
            return;
        }

        var url = "https://www.metaweather.com/api/location/" + id;

        $.getJSON(url, json => {
            console.log(json);
        });
    }
);