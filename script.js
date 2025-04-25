hello = "hello,I'm yummy pizza"
console.log(hello)


const form = document.getElementById("myForm");


form.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submitted!");
});

const usernameInput = document.getElementById("username");
usernameInput.value = "Default Value";

const submitButton = document.getElementById("submitBtn");
submitButton.addEventListener("click", function () {
  alert(`Entered username: ${usernameInput.value}`);
});


<form id="myForm"><input type="text" name="username"/> require&gt;
  <button type="submit">Submit</button>
</form>;
<script> "src"="https://code.jquery.com/jquery-3.6.0.min.js"</script>;
$('#myForm').on('submit', function (event) {
  console.log('Form submitted!');
});
