//picture upload and previev
function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output');
      output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }


// Toggling of NYSC and School information for student and corp member interns
const studentRadio = document.getElementById('student');
    const corpMemberRadio = document.getElementById('corpMember');
    const studentForm = document.getElementById('studentIntern');
    const corpMemberForm = document.getElementById('nyscIntern');

    studentRadio.addEventListener('click', internCategorySelection);
    corpMemberRadio.addEventListener('click', internCategorySelection);

    function internCategorySelection(){
        if (studentRadio.checked) {
            studentForm.classList.remove('hidden');
            corpMemberForm.classList.add('hidden');
        } else if (corpMemberRadio.checked) {
            studentForm.classList.add('hidden');
            corpMemberForm.classList.remove('hidden');
     }
    }

    