const quizForm = document.getElementById('math-test');
quizForm.addEventListener('submit', calculateResult); 

function calculateResult(event) {
  event.preventDefault(); 
  const dogrucavablar = ['C', 'A', 'B'];
  let dogru = 0; 

  for (let i = 1; i <= dogrucavablar.length; i++) {
    const secilencavab = document.querySelector(`input[name="question-${i}-answers"]:checked`);
  
    if (!secilencavab) {
      alert(` Zəhmət olmasa digər suallarıda cavablandırın.`);
      return;
    }

    if (secilencavab.value === dogrucavablar[i-1]) {
      dogru++;
    }
  }

  const resultsDiv = document.getElementById('netice');
  resultsDiv.innerHTML = ` ${dogrucavablar.length} sualdan ${dogru} Düzgün cavab vermisiz!`;
}
