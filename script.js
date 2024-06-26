//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/
const getweather=(city)=>{
	cityname.innerHTML=city
fetch('https://weather-by-epi-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)

.then(response=>response.json())

.then(response=>{
	
	
	console.log(response)
	
	cloud_pct.innerHTML = response.cloud_pct
	feels_like.innerHTML = response.feels_like
	humidity.innerHTML = response.humidity
	humidity2.innerHTML = response.humidity
	max_temp.innerHTML = response.max_temp
	min_temp.innerHTML = response.min_temp
	sunrise.innerHTML = response.sunrise
	sunset.innerHTML = response.sunset
	temp.innerHTML = response.temp
	temp2.innerHTML = response.temp
	wind_speed.innerHTML = response.wind_speed
	wind_speed2.innerHTML = response.wind_speed
})

.catch(err=> console.error(err))
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getweather(city.value )

})
getweather("Delhi")

getweather("New york")
getweather("istanbul")
getweather("los angeles")