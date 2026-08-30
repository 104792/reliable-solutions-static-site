(() => {
  const menuButton = document.querySelector('button[aria-label="Open navigation menu"], button[aria-label="Close navigation menu"]');
  const mobileNav = document.querySelector('nav.mobile-menu');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', () => {
      const opening = mobileNav.classList.contains('hidden');
      mobileNav.classList.toggle('hidden', !opening);
      menuButton.setAttribute('aria-expanded', String(opening));
      menuButton.setAttribute('aria-label', opening ? 'Close navigation menu' : 'Open navigation menu');
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open navigation menu');
      });
    });
  }

  document.querySelectorAll('form[data-static-form]').forEach((form) => {
    const notice = document.createElement('p');
    notice.className = 'static-export-notice';
    notice.textContent = 'Static package: submitting opens your email app. Direct database delivery remains available on the live website.';
    form.appendChild(notice);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      if (String(data.get('website') || '').trim()) return;

      const fieldLabels = {
        fullName: 'Full name',
        phone: 'Phone',
        email: 'Email',
        service: 'Service',
        propertyLocation: 'Property location',
        details: 'Project details'
      };
      const lines = [];
      Object.entries(fieldLabels).forEach(([name, label]) => {
        const value = String(data.get(name) || '').trim();
        if (value) lines.push(`${label}: ${value}`);
      });

      const kind = form.dataset.staticForm === 'estimate' ? 'Free estimate request' : 'Project inquiry';
      const subject = encodeURIComponent(`${kind} from the Reliable Solutions website`);
      const body = encodeURIComponent(`Hello Reliable Solutions NC,\n\n${lines.join('\n')}\n\nPlease contact me about this project.`);
      const href = `mailto:contactus@reliablesolutionsnc.com?subject=${subject}&body=${body}`;
      const mailtoEvent = new CustomEvent('static-form-mailto', {
        cancelable: true,
        detail: { href, form: form.dataset.staticForm }
      });
      if (document.dispatchEvent(mailtoEvent)) window.location.href = href;
    });
  });
})();
