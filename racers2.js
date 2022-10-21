addYearField()
addSubmitButton()
createRacerTable()



function addYearField(){
    let input = document.createElement('input');
    input.placeholder="Enter a Race Year";
    input.name = "racers_year"
    input.classList.add("form-control")
    document.body.appendChild(input)

}

//function addRoundField(){
    //let input = document.createElement('input');
    //.input.placeholder="Enter a Year's Round";
    ///input.name = "racers_round"
    //input.classList.add("form-control")
    //document.body.appendChild(input)

//}

async function addSubmitButton(){
    let button = document.createElement('button');
    button.innerText = "Submit"
    button.classList.add("form-control","btn","btn-primary");
    button.addEventListener("click",(event)=> handleSubmit(event));
    document.body.appendChild(button)


}

async function handleSubmit(event){
    event.stopPropagation();
    event.preventDefault();
    console.log("Form was submitted")
    const racerYear = await document.getElementsByName("racers_year")[0].value 
    console.log(racerYear)
    let data = await APICall(racerYear)
    DataCall(data)
}

function createRacerTable(DataCall){
    let table = document.createElement("table");
    table.classList.add('table','table-dark', 'table-hover')
    document.body.appendChild(table)

    let thead = document.createElement("thead")
    table.appendChild(thead)

    let tr = document.createElement('tr')
    thead.appendChild(tr)

    let th = document.createElement('th');
    th.innerText="First Name: ";
    th.scope= "col"
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Last Name: ";
    th.scope= "col"
    tr.appendChild(th);
    
    th = document.createElement('th');
    th.innerText="DOB ";
    th.scope= "col"
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Position ";
    th.scope= "col"
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Wins";
    th.scope= "col"
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Nation";
    th.scope= "col"
    tr.appendChild(th);

    th = document.createElement('th');
    th.innerText="Racing Team";
    th.scope= "col"
    tr.appendChild(th);

    let tbody = document.createElement('tbody');
    table.appendChild(tbody);
}



async function APICall(racerYear){
    let result = await axios.get(`https://ergast.com/api/f1/${racerYear}/driverStandings.json`)
    console.log(result)
    return result.data

function DataCall(data){

    let tbody = document.getElementsByTagName('tbody')[0]

    let tr = document.createElement('tr')
    tbody.appendChild(tr)

    let th = document.createElement('th')
    th.scope="row"
    th.innerText = result.MRData["StandingsTable"]["StandingsList"]["DriverStandings"]["Driver"]
    tr.appendChild(th)

    th = document.createElement('th')
    th.scope="row"
    th.innerText = result.Driver.familyName
    tr.appendChild(th)

    th = document.createElement('th')
    th.scope="row"
    th.innerText = result.Driver.dateOfBirth
    tr.appendChild(th)


    th = document.createElement('th')
    th.scope="row"
    th.innerText = result.Driver.position
    tr.appendChild(th)
    
    th = document.createElement('th')
    th.scope="row"
    th.innerText = result.Driver.wins
    tr.appendChild(th)

    th = document.createElement('th')
    th.scope="row"
    th.innerText = result.Driver.nationality
    tr.appendChild(th)

    th = document.createElement('th')
    th.scope="row"
    th.innerText = result.Driver.Constructors[0].name
    tr.appendChild(th)

}
}