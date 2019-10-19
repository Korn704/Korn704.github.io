const editFullName = () => {
  const btnEditFullName = document.getElementById('btn-edit-name');
  btnEditFullName.disabled = true;

  const txtFullName = document.getElementById('txt-full-name');
  txtFullName.disabled = false;
  txtFullName.classList.add('input-enabled');
  txtFullName.select();

  txtFullName.addEventListener('keyup', event => {
    if (event.keyCode == 0x0D) {
      saveFullName(txtFullName.value);
    }
  });
};

const saveFullName = (text) => {
  const txtFullName = document.getElementById('txt-full-name');
  txtFullName.value = text;
  txtFullName.disabled = true;

  const btnEditFullName = document.getElementById('btn-edit-name');
  btnEditFullName.disabled = false;
};

const editOrRemoveSkill = () => {
  let btnEditSkill = document.getElementById('btn-edit-skill');
  btnEditSkill.disabled = true;

  let liSkillItems = document.getElementsByClassName('skill-li');

  console.log(liSkillItems.length);

  for (let i = 0; i < liSkillItems.length; i++) {
    liSkillItems.item(i).innerHTML += `
      <button type="button" onclick="editSkill(parentElement.id)">&#x270E;</button> 
      <button type="button" onclick="removeSkill(parentElement.id)">&#x2718;</button>`;
  }
};

const editEducation = () => {
  const txtEdu = document.getElementById('txtEducation');
  txtEdu.disabled = false;
  txtEdu.select();
  txtEdu.classList.add('input-enabled');

  txtEdu.addEventListener('keyup', event => {
    if (event.keyCode == 0x0D) {
      saveEducation(txtEdu.value);
    }
  });
};

const saveEducation = (text) => {
  const txtEdu = document.getElementById('txtEducation');
  txtEdu.value = text;
  txtEdu.disabled = true;
};

const editSkill = (id) => {
  const li = document.getElementById(id);

  clearSkillButton();

  li.innerHTML = '<input id="txt-edit-skill" style="width:100%"/>';

  const txtEditSkill = document.getElementById('txt-edit-skill');
  txtEditSkill.value = li.id;
  txtEditSkill.select();
  txtEditSkill.addEventListener('keyup', event => {
    if (event.keyCode == 0x0D) {
      li.id = txtEditSkill.value;
      li.innerHTML = txtEditSkill.value;
    }
  });
};

const removeSkill = (id) => {
  const li = document.getElementById(id);
  li.remove();
  clearSkillButton();
};

const addSkill = () => {
  const newSkill = prompt('Insert new skill');
  const newLi = document.createElement('li');
  newLi.setAttribute('id', newSkill);
  newLi.classList.add('skill-li');
  newLi.innerHTML = newSkill;

  const ul = document.getElementById('skill-ul');
  if (newSkill === null) return;
  else ul.appendChild(newLi);
};

const clearSkillButton = () => {
  let btnEditSkill = document.getElementById('btn-edit-skill');
  btnEditSkill.disabled = false;

  const liSkillItems = document.getElementsByClassName('skill-li');
  for (let i = 0; i < liSkillItems.length; i++) {
    const skillLi = liSkillItems.item(i).innerHTML;
    const thisSkill = skillLi.split('<button ')[0];
    liSkillItems.item(i).innerHTML = thisSkill;
  }
};
