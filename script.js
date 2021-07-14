fetch('http://api.openweathermap.org/data/2.5/weather?id=625144&appid=beba956f0aa40e5ec3d7a609d62cb3d4')
    .then(function (resp) {return resp.json()})
    .then(function (data) {
        console.log(data)
        document.querySelector('.icon').innerHTML = 
        `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'></img>`
        document.querySelector('.city').innerHTML = data.name
        document.querySelector('.current-day').innerHTML = day
        document.querySelector('.degrees').innerHTML = Math.round(data.main.temp - 273.15) + '&degC'
        document.querySelector('.humidity').innerHTML = data.main.humidity
        document.querySelector('.pressure').innerHTML = data.main.pressure
        document.querySelector('.description').innerHTML = data.weather[0].description
        document.querySelector('.wind').innerHTML = 'Wind: ' + data.wind.speed + ' m/s'
    })


fetch(`http://api.openweathermap.org/data/2.5/forecast?q=minsk&appid=beba956f0aa40e5ec3d7a609d62cb3d4`)
    .then(function (resp) {return resp.json()})
    .then(function (data) {
        console.log(data)
        //icons
        document.querySelector('.ico1').innerHTML = 
        `<img src='http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png'></img>`
        document.querySelector('.ico2').innerHTML = 
        `<img src='http://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png'></img>`
        document.querySelector('.ico3').innerHTML = 
        `<img src='http://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png'></img>`
        document.querySelector('.ico4').innerHTML = 
        `<img src='http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png'></img>`
        document.querySelector('.ico5').innerHTML = 
        `<img src='http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png'></img>`
        //date
        document.querySelector('.day1').innerHTML = month  + ' ' + (dateNumber + 1)
        document.querySelector('.day2').innerHTML = month  + ' ' + (dateNumber + 2)
        document.querySelector('.day3').innerHTML = month  + ' ' + (dateNumber + 3)
        document.querySelector('.day4').innerHTML = month  + ' ' + (dateNumber + 4)
        document.querySelector('.day5').innerHTML = month  + ' ' + (dateNumber + 5)
        //temp
        document.querySelector('.temp1').innerHTML = Math.round(data.list[5].main.temp - 273.15) + '&degC'
        document.querySelector('.temp2').innerHTML = Math.round(data.list[13].main.temp - 273.15) + '&degC'
        document.querySelector('.temp3').innerHTML = Math.round(data.list[21].main.temp - 273.15) + '&degC'
        document.querySelector('.temp4').innerHTML = Math.round(data.list[29].main.temp - 273.15) + '&degC'
        document.querySelector('.temp5').innerHTML = Math.round(data.list[37].main.temp - 273.15) + '&degC'
        //wind
        document.querySelector('.wind1').innerHTML = 'Wind: ' + data.list[5].wind.speed + ' m/s'
        document.querySelector('.wind2').innerHTML = 'Wind: ' + data.list[13].wind.speed + ' m/s'
        document.querySelector('.wind3').innerHTML = 'Wind: ' + data.list[21].wind.speed + ' m/s'
        document.querySelector('.wind4').innerHTML = 'Wind: ' + data.list[29].wind.speed + ' m/s'
        document.querySelector('.wind5').innerHTML = 'Wind: ' + data.list[37].wind.speed + ' m/s'
    })

    const btnGetWeather = document.querySelector('.get-weather')

    btnGetWeather.onclick = () => {
        const inputCity = document.querySelector('.input-city').value

        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=beba956f0aa40e5ec3d7a609d62cb3d4`)
            .then(function (resp) {return resp.json()})
            .then(function (data) {
                console.log(data)
                document.querySelector('.icon').innerHTML = 
                `<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png'></img>`
                document.querySelector('.city').innerHTML = data.name
                document.querySelector('.degrees').innerHTML = Math.round(data.main.temp - 273.15) + '&degC'
                document.querySelector('.humidity').innerHTML = data.main.humidity
                document.querySelector('.pressure').innerHTML = data.main.pressure
                document.querySelector('.description').innerHTML = data.weather[0].description
                document.querySelector('.wind').innerHTML = 'Wind: ' + data.wind.speed + ' m/s'

            })
            

        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&appid=beba956f0aa40e5ec3d7a609d62cb3d4`)
            .then(function (resp) {return resp.json()})
            .then(function (data) {
                console.log(data)
                    //icons
                document.querySelector('.ico1').innerHTML = 
                `<img src='http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png'></img>`
                document.querySelector('.ico2').innerHTML = 
                `<img src='http://openweathermap.org/img/wn/${data.list[13].weather[0].icon}@2x.png'></img>`
                    document.querySelector('.ico3').innerHTML = 
                `<img src='http://openweathermap.org/img/wn/${data.list[21].weather[0].icon}@2x.png'></img>`
                    document.querySelector('.ico4').innerHTML = 
                `<img src='http://openweathermap.org/img/wn/${data.list[29].weather[0].icon}@2x.png'></img>`
                document.querySelector('.ico5').innerHTML = 
                `<img src='http://openweathermap.org/img/wn/${data.list[37].weather[0].icon}@2x.png'></img>`
                //date
                document.querySelector('.day1').innerHTML = month  + ' ' + (dateNumber + 1)
                document.querySelector('.day2').innerHTML = month  + ' ' + (dateNumber + 2)
                document.querySelector('.day3').innerHTML = month  + ' ' + (dateNumber + 3)
                document.querySelector('.day4').innerHTML = month  + ' ' + (dateNumber + 4)
                document.querySelector('.day5').innerHTML = month  + ' ' + (dateNumber + 5)
                //temp
                document.querySelector('.temp1').innerHTML = Math.round(data.list[5].main.temp - 273.15) + '&deg'
                document.querySelector('.temp2').innerHTML = Math.round(data.list[13].main.temp - 273.15) + '&deg'
                document.querySelector('.temp3').innerHTML = Math.round(data.list[21].main.temp - 273.15) + '&deg'
                document.querySelector('.temp4').innerHTML = Math.round(data.list[29].main.temp - 273.15) + '&deg'
                document.querySelector('.temp5').innerHTML = Math.round(data.list[37].main.temp - 273.15) + '&deg'
                //wind
                document.querySelector('.wind1').innerHTML = 'Wind: ' + data.list[5].wind.speed + ' m/s'
                document.querySelector('.wind2').innerHTML = 'Wind: ' + data.list[13].wind.speed + ' m/s'
                document.querySelector('.wind3').innerHTML = 'Wind: ' + data.list[21].wind.speed + ' m/s'
                document.querySelector('.wind4').innerHTML = 'Wind: ' + data.list[29].wind.speed + ' m/s'
                document.querySelector('.wind5').innerHTML = 'Wind: ' + data.list[37].wind.speed + ' m/s'
            
            })
    
        
    }
  
 


    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Suturday', 'Sunday']    
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 
    'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

    let date = new Date()

    let month = monthNames[date.getMonth()] 
    let dateNumber = date.getDate()
    let day = days[date.getDay() - 1]
    // let outputDate = month  + ' ' + dateNumber
      
    let hour = date.getHours()




    

    

 
