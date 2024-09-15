document.querySelectorAll(".form__select").forEach(item=>{
  const optionsList = item.querySelector('.list');
  const options = item.querySelectorAll('.option');
  const currentSelect = item.querySelector('span');
  
  item.addEventListener('click', () => {
    optionsList.style.display = optionsList.style.display === 'block' ? 'none' : 'block';
  });
  
  options.forEach(option => {
    option.addEventListener('click', (event) => {
      currentSelect.textContent = option.textContent;
      options.style.display = 'none';
    });
  });


});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.form__select')) {
      document.querySelectorAll('.form__amount-list, .form__mass-list').forEach(list => {
          list.style.display='none';
      });
  }
});

const btn = document.querySelectorAll('.form__tag');
const current = document.querySelector(".form__span");

btn.forEach(button=>{
  button.addEventListener('click',(event)=>{
    current.textContent=current.getAttribute("data-value");
  });
});



