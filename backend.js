document.addEventListener("DOMContentLoaded", () => {
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("listings-container");

        for (let i = 0; i < data.length; i++) {
            let listing = data[i];
            const box = document.createElement("div");
            
            box.className = "bigYellowBox";

            box.innerHTML = `
                <div class="rating">
                    <div class="title"><h3>${listing.name}</h3></div>
                    <div class="line"><p>${listing.info}</p></div>
                    <div id="numbers">
                        <div class="project"><div>${listing.projects}</div><div>Projects</div></div>
                        <div class="years"><div>${listing.years}</div><div>Years</div></div>
                        <div class="price"><div>${listing.price}</div><div>Price</div></div>
                    </div>
                    <div class="num">
                        <div class="number1"><div>${listing.contact1}</div><div>Price</div></div>
                        <div class="number1"><div>${listing.contact2}</div><div>Price</div></div>
                    </div>
                </div>
            `;
            container.appendChild(box);
        }
    })
})