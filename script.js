const btn = document.getElementById('btn');
const result = document.getElementById('result');


btn.addEventListener('click', function (e) {
      const input = document.getElementById('input').value;

      e.preventDefault();

      if(input == ''){
            alert("please enter a valid year");
      }
      else if (input % 400 == 0 && input % 100 != 0 || input % 4 == 0) {

            result.innerText = `The enter year ${input} is leap year`;

      }
      else {

            result.innerText = `The enter year ${input} is not leap year`;
      }


})