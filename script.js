document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("voteForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");
    
    let age = ageInput.value.trim();
    let name = nameInput.value.trim();
    
    if (!age || !name) {
      alert("Please enter valid details");
      return;
    }

    function checkVotingEligibility(age, name) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age >= 18) {
            resolve({ message: `Welcome, ${name}. You can vote.`, name });
          } else {
            // Ensure no extra space after the name for rejection message
            reject({ message: `Oh sorry ${name}. You aren't old enough.`, name });
          }
        }, 4000);
      });
    }

    checkVotingEligibility(age, name)
      .then((result) => {
        alert(result.message);
      })
      .catch((error) => {
        alert(error.message);
      });
  });
});
