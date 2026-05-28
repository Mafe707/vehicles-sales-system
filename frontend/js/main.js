const loginForm = document.getElementById('loginForm');

if(loginForm){

    loginForm.addEventListener('submit', function(e){

        e.preventDefault();

        window.location.href = 'dashboard.html';

    });

}

const registerForm = document.getElementById('registerForm');

if(registerForm){

    registerForm.addEventListener('submit', function(e){

        e.preventDefault();

        alert('Account created successfully!');

        window.location.href = 'index.html';

    });

}

function logout(){

    window.location.href = 'index.html';

}

console.log("Frontend Ready");

function switchTab(tab, btn){
  document.querySelectorAll('[id^="tab-"]').forEach(el=>el.style.display='none');
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+tab).style.display='block';
  btn.classList.add('active');
}

function togglePass(id, icon){
  const input = document.getElementById(id);
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  icon.classList.toggle('fa-eye', !show);
  icon.classList.toggle('fa-eye-slash', show);
}

function previewAvatar(e){
  const file = e.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const el = document.getElementById('avatarPreview');
    el.innerHTML = `<img src="${ev.target.result}" alt="avatar">`;
  };
  reader.readAsDataURL(file);
}