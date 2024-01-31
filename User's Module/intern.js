const form = document.getElementById('dataBankForm');
const orgFields = document.getElementById ('orgFields');
const batchFields = document.getElementById('batchFields');

category.addEventListener('change', () => {
  if (category.value === 'intern') {
    orgFields.style.display = 'block';
    batchFields.style.display = 'none';
  } else  {
    orgFields.style.display = 'none';
    batchFields.style.display = 'block';
  } 

});
