hello="hello,I'm yummy pizza"
console.log(hello)

<form id="myForm">
  <input type="text" name="username" required>
  <button type="submit">Submit</button>
</form>;
<script>< src="https://code.jquery.com/jquery-3.6.0.min.js"></script>;
$('#myForm').on('submit', function(event){
console.log('Form submitted!');
});
