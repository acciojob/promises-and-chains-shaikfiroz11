document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("votesubmit").addEventListener("submit", (e) => {
    e.preventDefault(); 

    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000); 
    });

    promise
      .then((message) => alert(message))
      .catch((error) => alert(error));
  });
});
