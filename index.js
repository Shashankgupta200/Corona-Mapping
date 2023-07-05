function updatemap(){
    console.log("Updating map with real time data");
    fetch("/data.json")     //  When we give address to fetch then it returns a promise request which needs to be handled.
    .then(response => response.json())
    .then(rsp=>{
        // console.log(rsp.data)
        rsp.data.forEach(element => {
            latitude = element.latitude;        
            longitude = element.longitude;
            
            cases = element.infected;
            if(cases>255){
                color = "rgb(255, 0, 0)";
            }
            else{
                color = `rgb(${cases}, 0, 0)`
            }

            const marker = new mapboxgl.Marker({
                draggable: false,
                color : color
                })
                .setLngLat([longitude, latitude])
                .addTo(map);
        });
    })

}
let interval = 2000
setInterval(updatemap, interval);