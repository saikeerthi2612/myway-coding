const form = document.getElementById("userForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  
  fetch(`https://test-api-v3.myways.ai/user?email=<EMAIL>

  `)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      if (data.length > 0) {
        alert("User found!");
      } else {
        
        fetch("https://test-api-v3.myways.ai/user",{
          method: "POST",
          body: JSON.stringify({ name, email, phone }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => {
            if (response.ok) {
              alert("User created successfully!");
              form.reset();
            } else {
              throw new Error("Network response was not ok.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});