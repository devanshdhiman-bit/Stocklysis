// ===== THEME =====
(function(){
  if(localStorage.getItem('theme')==='dark') document.body.classList.add('dark');
})();

function toggleTheme(){
  const dark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  // sync theme buttons if present (dashboard)
  const tl = document.getElementById('themeLight');
  const td = document.getElementById('themeDark');
  if(tl) tl.classList.toggle('active-theme', !dark);
  if(td) td.classList.toggle('active-theme', dark);
}

// dashboard uses setTheme separately
function setTheme(t){
  localStorage.setItem('theme', t);
  document.body.classList.toggle('dark', t==='dark');
  const tl = document.getElementById('themeLight');
  const td = document.getElementById('themeDark');
  if(tl) tl.classList.toggle('active-theme', t!=='dark');
  if(td) td.classList.toggle('active-theme', t==='dark');
}

// ===== AUTH NAV =====
function renderAuthNav(){
  const el = document.getElementById('authButtons');
  if(!el) return;
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  el.innerHTML = user
    ? `<span style="font-weight:700;font-size:14px;color:var(--text);margin-right:4px;">👤 ${user.name||user.username}</span><button class="btn-login" onclick="logout()">Logout</button>`
    : `<a href="login.html" class="btn-login">Login</a><a href="signin.html" class="btn-signup">Sign Up</a>`;
}

function logout(){
  localStorage.removeItem('loggedInUser');
  window.location.href = 'index.html';
}

// Run on every page
renderAuthNav();