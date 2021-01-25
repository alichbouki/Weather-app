

$("#select-city").change(
    async evt => {
        var id = evt.target.value;
        
        if (id === "")
            return;

        // var url = "https://www.metaweather.com/api/location/" + id;  // fonctionne pas
        var key = '779b060de8050ff37c4b63a8310bc9c4';
        var url = "https://api.openweatgrthrthhermap.org/data/2.5/weather?q="+id+"&appid=" + key;

        // Method 1
        // $.getJSON(url, success);
        // console.log("Ici après le $.getJSON");

        // Method 2
        // $.getJSON(url).then(success);
        // var result = $.getJSON(url);
        // console.log('result:', result);
        // result.done(success);
        // result.fail(error);

        // Method 3 (async)
        try {
            console.log("1. Before");
            var json = await getWeather(id);
            console.log("4. after getWeather");
            success(json);
            console.log("5. THE END");
        } catch (error) {
            console.log("Error", error);            
        }
    }
);

function getWeather(id) {
    console.log("2. start getWeather");

    var key = '779b060de8050ff37c4b63a8310bc9c4';
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+id+"&appid=" + key;
    var myPromise = $.getJSON(url);
    console.log("3. end getWeather");
    return myPromise;
}

function success(data) {
    console.log(">>> Dans la callback Success");
    // console.log(data);
    $('code').text(JSON.stringify(data, null, 2));    
}

function error(err) {
    console.log("Il y a une erreur");
    console.log(err);
    $('code').text("ERROR !!!");    
}