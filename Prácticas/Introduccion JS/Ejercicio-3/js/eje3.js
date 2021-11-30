var users = {
    1:{
        DNI: "54682647R",
        Nacimiento: 1984,
        Ingreso: 2002,
        Productividad: 0.05,
        Antiguedad: 0.3,
        Sueldo: 1000
    },
    2:{
        DNI: "51612647S",
        Nacimiento: 1986,
        Ingreso: 2005,
        Productividad: 0.02,
        Antiguedad: 0.2,
        Sueldo: 950
    },
    3:{
        DNI: "54452647L",
        Nacimiento: 1981,
        Ingreso: 1999,
        Productividad: 0.01,
        Antiguedad: 0.4,
        Sueldo: 1200
    },
    4:{
        DNI: "56687377F",
        Nacimiento: 1974,
        Ingreso: 1995,
        Productividad: 0.03,
        Antiguedad: 0.5,
        Sueldo: 1500
    }
}


function Calc_Edad(){
    var table_head = document.getElementById('TablaEdad-Head');
    var tr_ = document.createElement('tr')
    var td_1 = document.createElement('td')
    var td_2 = document.createElement('td')
    var DNI = document.createElement('b')
    var Edad = document.createElement('b')
    DNI.innerHTML = "DNI"
    Edad.innerHTML = "Edad" 

    td_1.appendChild(DNI)
    td_2.appendChild(Edad)
    tr_.appendChild(td_1);
    tr_.appendChild(td_2);
    table_head.appendChild(tr_);

    for (let i = 1; i <= Object.keys(users).length; i++) {
        console.log('El usuario con DNI: ' + users[i]["DNI"] + " tiene " + 
        Number(2021 - users[i]["Nacimiento"]) + " años.")

        var table_body = document.getElementById('TablaEdad-Body');
        var tr_ = document.createElement('tr')
        var td_1 = document.createElement('td')
        var td_2 = document.createElement('td')

        td_1.innerHTML = users[i]["DNI"]
        td_2.innerHTML = Number(2021 - users[i]["Nacimiento"])

        tr_.appendChild(td_1);
        tr_.appendChild(td_2);
        table_body.appendChild(tr_);
    }
}

function Calc_Saldo(){
    var table_head = document.getElementById('TablaSaldo-Head');
    var tr_ = document.createElement('tr')
    var td_1 = document.createElement('td')
    var td_2 = document.createElement('td')
    var DNI = document.createElement('b')
    var Saldo = document.createElement('b')
    DNI.innerHTML = "DNI"
    Saldo.innerHTML = "Saldo" 

    td_1.appendChild(DNI)
    td_2.appendChild(Saldo)
    tr_.appendChild(td_1);
    tr_.appendChild(td_2);
    table_head.appendChild(tr_);

    for (let i = 1; i <= Object.keys(users).length; i++) {
        console.log('El usuario con DNI: ' + users[i]["DNI"] + " gana " + 
        Number((users[i]["Sueldo"] * users[i]["Productividad"]) + (users[i]["Sueldo"] * users[i]["Antiguedad"]) + users[i]["Sueldo"]) + " €.")

        var table_body = document.getElementById('TablaSaldo-Body');
        var tr_ = document.createElement('tr')
        var td_1 = document.createElement('td')
        var td_2 = document.createElement('td')

        td_1.innerHTML = users[i]["DNI"]
        td_2.innerHTML = (Number((users[i]["Sueldo"] * users[i]["Productividad"]) + (users[i]["Sueldo"] * users[i]["Antiguedad"]) + users[i]["Sueldo"]) + "€")

        tr_.appendChild(td_1);
        tr_.appendChild(td_2);
        table_body.appendChild(tr_);
    }
}