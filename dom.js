// head

const head = document.createElement("h1");
head.innerHTML = "Freelancer Forums";
head.style.textAlign = "center";
head.style.fontSize = "60px";
document.body.appendChild(head);

// price

const price = document.createElement("p");
price.innerHTML = "The average starting price is $30";
price.style.textAlign = "center";
price.style.fontSize = "35px";
document.body.appendChild(price);

// available

const avail = document.createElement("h2");
avail.innerHTML = "Available Freelancers";
avail.style.textAlign = "center";
avail.style.fontSize = "45px";
document.body.appendChild(avail);

// name,occ,start price

// name
const names = ["Alice", "Bob", "Carol"];

// occupation
const occu = ["Writer", "Teacher", "Programmer"];

// start price
const prices = ["$30", "$50", "$70"];

// div

const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.fontSize = "31px";

// create box 

const boxx = (headTxt, content) => {
    const boxx = document.createElement("div");
    boxx.style.margin = "20px";
    boxx.style.width = "250px";
    

    const header= document.createElement("h3");
    header.innerHTML = headTxt;
    boxx.appendChild(header);
    
// for each and contentArray

    content.forEach(i => {
        const paragraph = document.createElement("p");
        paragraph.innerHTML = i;
        boxx.appendChild(paragraph);
    });

// return

    return boxx;
};

// name box
const nameBox = boxx("Names:", names);

// occupation box
const occuBox = boxx("Occupations:", occu);

// start price box
const priceBox = boxx("Starting Prices:", prices);

// append

container.appendChild(nameBox);
container.appendChild(occuBox);
container.appendChild(priceBox);

// docbody

document.body.appendChild(container);
