const API = "http://localhost:5000/api";

fetch(API + "/profile")
.then(res => res.json())
.then(data => {
    document.getElementById("name").innerText = data.name;
    document.getElementById("about").innerText = data.about;
});

fetch(API + "/projects")
.then(res => res.json())
.then(projects => {

    const div = document.getElementById("projects");

    projects.forEach(p => {
        div.innerHTML += `
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        `;
    });

});

document.getElementById("contactForm")
.addEventListener("submit", async (e) => {

    e.preventDefault();

    await fetch(API + "/contact", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: cname.value,
            email: cemail.value,
            message: cmessage.value
        })

    });

    alert("Message Sent");

});
