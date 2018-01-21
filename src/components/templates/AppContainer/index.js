
// export {default as AppContainer} from './AppContainer';

document.addEventListener("DOMContentLoaded", function(event) {
    createTable();
  });

function createTable(){
	let rentals = getApiInfo()
	renderTable(rentals)
}

function getApiInfo(){


	return [{
	  id: 1,
	  rate: 435,
	  start_date: '2017-4-19T14:00:00Z',
	  end_date: null,
	  status: 'reserved',
	  driver: 1,
	  vehicle: 1,
	}, {
	  id: 2,
	  rate: 400,
	  start_date: '2017-3-29T10:00:00Z',
	  end_date: '2017-4-19T14:00:00Z',
	  status: 'reserved',
	  driver: 2,
	  vehicle: 2,
	}, {
	  id: 3,
	  rate: 425,
	  start_date: '2017-1-10T22:00:00Z',
	  end_date: '2017-3-29T22:00:00Z',
	  status: 'active',
	  driver: 3,
	  vehicle: 3,
	}, {
	  id: 4,
	  rate: 425,
	  start_date: '2017-4-19T14:00:00Z',
	  end_date: '',
	  status: 'returned',
	  driver: 1,
	  vehicle: 3,
	}, {
	  id: 5,
	  rate: 400,
	  start_date: '2017-8-29T14:00:00Z',
	  end_date: '2017-9-29T14:00:00Z',
	  status: 'returned',
	  driver: 3,
	  vehicle: 2,
	}, {
	  id: 6,
	  rate: 435,
	  start_date: '2017-12-01T10:00:00Z',
	  end_date: '2017-12-10T13:00:00Z',
	  status: 'archived',
	  driver: 2,
	  vehicle: 1,
	}]

}

function renderTable(rentals) {
	let tbl     = document.createElement("table");
    let tblBody = document.createElement("tbody");
    let body = document.getElementById('body-id');

    //create table headers
    //for each rental in rentals
    	//create table columns for rental
    //end loop
   	let tableRow = document.createElement("tr");
    for(r in rentals[0]){
		let tableHead = document.createElement("th");
		tableHead.innerText = r;
		tableRow.appendChild(tableHead)
    }
    tblBody.appendChild(tableRow);

    for (let rental of rentals) {
  		let row = document.createElement("tr");
  		createModal(rental);
  		row.addEventListener('click', renderModal);
  		
  		for (let element in rental){
  			let cell = document.createElement("td");
  			let cellText = document.createTextNode(rental[element]); 
  			cell.appendChild(cellText);
        	row.appendChild(cell);
  		}

  		tblBody.appendChild(row);
	}

        // append the <tbody> inside the <table>
        tbl.appendChild(tblBody);
        // put <table> in the <body>
        body.appendChild(tbl);
        // tbl border attribute to 
        tbl.setAttribute("border", "2");
}

function countProperties(obj) {
    var count = 0;

    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }

    return count;
}

function renderModal(e){
	//e.target.parent.style.display = "block"
}

function createModal(e){
	let modalDiv = document.createElement('div');
	let contentDiv = document.createElement('div');

	let startDateP = document.createElement('p');
	let startDate = e["start_date"]
	startDateP.innerText = startDate;
	contentDiv.appendChild(startDateP);

	let endDateP = document.createElement('p');
	let endDate = e["end_date"]
	endDateP.innerText = endDate;
	contentDiv.appendChild(endDateP);
	
	let rateP = document.createElement('p');
	let rate = e["rate"];
	rateP.innerText = rate;
	contentDiv.appendChild(rateP);
	
	let driverNameP = document.createElement('p');
	let driverName = e["driver"]; //create function to find name
	driverNameP.innerText = driverName;
	contentDiv.appendChild(driverNameP);

	let vehicleP = document.createElement('p');
	let vehicle = e["vehicle"]; //create function to find vehicle name
	vehicleP.innerText = vehicle;
	contentDiv.appendChild(vehicleP);
	
	let statusP = document.createElement('p');
	let status = e["status"];
	statusP.innerText = status;
	contentDiv.appendChild(statusP);

	//e.target.style.display = "none"

}

