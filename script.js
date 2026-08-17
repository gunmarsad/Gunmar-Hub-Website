// ─── NAVIGATION ───────────────────────────────────────────
const navBtns  = document.querySelectorAll('.nav-btn');
const pages    = document.querySelectorAll('.page');

function goToPage(target) {
  pages.forEach(p => p.classList.remove('active'));
  navBtns.forEach(b => b.classList.remove('active'));

  const page = document.getElementById('page-' + target);
  const btn  = document.querySelector(`.nav-btn[data-page="${target}"]`);

  if (page) page.classList.add('active');
  if (btn)  btn.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navBtns.forEach(btn => {
  btn.addEventListener('click', () => goToPage(btn.dataset.page));
});

// ─── COPY SCRIPT ──────────────────────────────────────────
function copyScript() {
  const code  = document.getElementById('script-code').textContent.trim();
  const btn   = document.getElementById('copy-btn');
  const toast = document.getElementById('toast');

  navigator.clipboard.writeText(code).then(() => {
    // Button feedback
    btn.textContent = '✓ Copié !';
    btn.style.background = '#22c55e';

    // Toast
    toast.classList.add('show');

    setTimeout(() => {
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copier le script`;
      btn.style.background = '';
      toast.classList.remove('show');
    }, 2200);
  }).catch(() => {
    // Fallback for older browsers
    const ta = document.createElement('textarea');
    ta.value = code;
    ta.style.position = 'fixed';
    ta.style.opacity  = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);

    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2200);
  });
}
