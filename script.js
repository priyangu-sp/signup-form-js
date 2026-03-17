document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("signup");
    const tableBody = document.getElementById("userTablebody");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        
        if (!username || !email || !password) {
            alert("All fields are required!");
            return;
        }
        
        let hiddenPassword = "";
        for (let i = 0; i < password.length; i++) {
            hiddenPassword += "#";
        }
        
        const row = document.createElement("tr");
        
        row.innerHTML = `
        <td>${username}</td>
        <td>${email}</td>
        <td>${hiddenPassword}</td>
        <td><button class="delete-btn">Delete</button></td>
        `;
        
        row.querySelector(".delete-btn").addEventListener("click", () => {
            row.remove();
        });
        
        tableBody.appendChild(row);
        
        form.reset();
    });
});