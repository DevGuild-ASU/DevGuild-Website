const profileButton = document.querySelector('.profile-btn');

if (profileButton) {
  const savedProfile = JSON.parse(localStorage.getItem('devguild-profile') || '{}');
  const profileMenu = document.createElement('div');
  profileMenu.className = 'profile-menu';
  profileMenu.setAttribute('aria-hidden', 'true');
  profileMenu.innerHTML = `
    <div class="profile-menu-title">DevGuild member</div>
    <strong class="profile-menu-name">${savedProfile.name || 'JS'}</strong>
    <button type="button" class="profile-edit-button">Edit profile</button>
  `;

  const profileWrap = document.createElement('div');
  profileWrap.className = 'profile-menu-wrap';
  profileButton.parentNode.insertBefore(profileWrap, profileButton);
  profileWrap.append(profileButton, profileMenu);
  profileButton.setAttribute('aria-expanded', 'false');

  const editor = document.createElement('dialog');
  editor.className = 'profile-editor';
  editor.innerHTML = `
    <form method="dialog" class="profile-editor-card">
      <button type="button" class="profile-editor-close" aria-label="Close profile editor">×</button>
      <p class="profile-menu-title">Your DevGuild profile</p>
      <h2>Edit personal information</h2>
      <label>Profile picture
        <input class="profile-picture-input" type="file" accept="image/*">
      </label>
      <div class="profile-picture-preview" aria-label="Profile picture preview"></div>
      <label>Full name
        <input class="profile-name-input" type="text" maxlength="80" placeholder="Your name">
      </label>
      <label>Email address
        <input class="profile-email-input" type="email" maxlength="120" placeholder="you@example.com">
      </label>
      <label>Short bio
        <textarea class="profile-bio-input" maxlength="240" rows="3" placeholder="Tell the guild a little about you"></textarea>
      </label>
      <button type="submit" class="profile-save-button">Save profile</button>
      <p class="profile-editor-note">Your profile is saved only in this browser.</p>
    </form>
  `;
  document.body.appendChild(editor);

  const nameInput = editor.querySelector('.profile-name-input');
  const emailInput = editor.querySelector('.profile-email-input');
  const bioInput = editor.querySelector('.profile-bio-input');
  const pictureInput = editor.querySelector('.profile-picture-input');
  const preview = editor.querySelector('.profile-picture-preview');

  const applyProfile = (profile) => {
    const name = profile.name || 'JS';
    profileMenu.querySelector('.profile-menu-name').textContent = name;
    document.querySelectorAll('.profile-avatar').forEach((avatar) => {
      avatar.textContent = profile.picture ? '' : name.slice(0, 2).toUpperCase();
      avatar.style.backgroundImage = profile.picture ? `url(${profile.picture})` : '';
      avatar.classList.toggle('has-picture', Boolean(profile.picture));
    });
  };

  nameInput.value = savedProfile.name || '';
  emailInput.value = savedProfile.email || '';
  bioInput.value = savedProfile.bio || '';
  if (savedProfile.picture) {
    preview.style.backgroundImage = `url(${savedProfile.picture})`;
  }
  applyProfile(savedProfile);

  const closeProfile = () => {
    profileMenu.classList.remove('open');
    profileMenu.setAttribute('aria-hidden', 'true');
    profileButton.setAttribute('aria-expanded', 'false');
  };

  profileButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = profileMenu.classList.toggle('open');
    profileMenu.setAttribute('aria-hidden', String(!isOpen));
    profileButton.setAttribute('aria-expanded', String(isOpen));
  });

  profileMenu.addEventListener('click', (event) => event.stopPropagation());
  profileMenu.querySelector('.profile-edit-button').addEventListener('click', () => {
    closeProfile();
    editor.showModal();
  });
  editor.querySelector('.profile-editor-close').addEventListener('click', () => editor.close());
  pictureInput.addEventListener('change', () => {
    const [file] = pictureInput.files;
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      preview.style.backgroundImage = `url(${reader.result})`;
      preview.dataset.picture = reader.result;
    });
    reader.readAsDataURL(file);
  });
  editor.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const profile = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      bio: bioInput.value.trim(),
      picture: preview.dataset.picture || savedProfile.picture || ''
    };
    localStorage.setItem('devguild-profile', JSON.stringify(profile));
    applyProfile(profile);
    editor.close();
  });
  document.addEventListener('click', closeProfile);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeProfile();
  });
}
