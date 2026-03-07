// ============================================
// Admin Panel JavaScript
// ============================================

// ---------- Skill Auto-Icon Map (DevIcons CDN) ----------
const SKILL_ICON_MAP = {
    'html': 'html5/html5-original',
    'html5': 'html5/html5-original',
    'css': 'css3/css3-original',
    'css3': 'css3/css3-original',
    'javascript': 'javascript/javascript-original',
    'js': 'javascript/javascript-original',
    'typescript': 'typescript/typescript-original',
    'ts': 'typescript/typescript-original',
    'python': 'python/python-original',
    'java': 'java/java-original',
    'c': 'c/c-original',
    'c++': 'cplusplus/cplusplus-original',
    'cpp': 'cplusplus/cplusplus-original',
    'c#': 'csharp/csharp-original',
    'csharp': 'csharp/csharp-original',
    'php': 'php/php-original',
    'ruby': 'ruby/ruby-original',
    'swift': 'swift/swift-original',
    'kotlin': 'kotlin/kotlin-original',
    'go': 'go/go-original',
    'golang': 'go/go-original',
    'rust': 'rust/rust-original',
    'dart': 'dart/dart-original',
    'r': 'r/r-original',
    'scala': 'scala/scala-original',
    'perl': 'perl/perl-original',
    'lua': 'lua/lua-original',
    'matlab': 'matlab/matlab-original',
    'react': 'react/react-original',
    'reactjs': 'react/react-original',
    'react native': 'react/react-original',
    'angular': 'angularjs/angularjs-original',
    'angularjs': 'angularjs/angularjs-original',
    'vue': 'vuejs/vuejs-original',
    'vuejs': 'vuejs/vuejs-original',
    'vue.js': 'vuejs/vuejs-original',
    'svelte': 'svelte/svelte-original',
    'next': 'nextjs/nextjs-original',
    'nextjs': 'nextjs/nextjs-original',
    'next.js': 'nextjs/nextjs-original',
    'nuxt': 'nuxtjs/nuxtjs-original',
    'nuxtjs': 'nuxtjs/nuxtjs-original',
    'gatsby': 'gatsby/gatsby-original',
    'node': 'nodejs/nodejs-original',
    'nodejs': 'nodejs/nodejs-original',
    'node.js': 'nodejs/nodejs-original',
    'express': 'express/express-original',
    'expressjs': 'express/express-original',
    'django': 'django/django-plain',
    'flask': 'flask/flask-original',
    'spring': 'spring/spring-original',
    'laravel': 'laravel/laravel-original',
    'rails': 'rails/rails-plain',
    'ruby on rails': 'rails/rails-plain',
    'asp.net': 'dot-net/dot-net-original',
    '.net': 'dot-net/dot-net-original',
    'dotnet': 'dot-net/dot-net-original',
    'firebase': 'firebase/firebase-plain',
    'mongodb': 'mongodb/mongodb-original',
    'mysql': 'mysql/mysql-original',
    'postgresql': 'postgresql/postgresql-original',
    'postgres': 'postgresql/postgresql-original',
    'redis': 'redis/redis-original',
    'sqlite': 'sqlite/sqlite-original',
    'oracle': 'oracle/oracle-original',
    'graphql': 'graphql/graphql-plain',
    'docker': 'docker/docker-original',
    'kubernetes': 'kubernetes/kubernetes-plain',
    'aws': 'amazonwebservices/amazonwebservices-plain-wordmark',
    'azure': 'azure/azure-original',
    'gcp': 'googlecloud/googlecloud-original',
    'google cloud': 'googlecloud/googlecloud-original',
    'git': 'git/git-original',
    'github': 'github/github-original',
    'gitlab': 'gitlab/gitlab-original',
    'bitbucket': 'bitbucket/bitbucket-original',
    'linux': 'linux/linux-original',
    'ubuntu': 'ubuntu/ubuntu-plain',
    'bash': 'bash/bash-original',
    'powershell': 'powershell/powershell-original',
    'figma': 'figma/figma-original',
    'photoshop': 'photoshop/photoshop-plain',
    'illustrator': 'illustrator/illustrator-plain',
    'xd': 'xd/xd-plain',
    'sketch': 'sketch/sketch-original',
    'sass': 'sass/sass-original',
    'scss': 'sass/sass-original',
    'less': 'less/less-plain-wordmark',
    'tailwind': 'tailwindcss/tailwindcss-original',
    'tailwindcss': 'tailwindcss/tailwindcss-original',
    'tailwind css': 'tailwindcss/tailwindcss-original',
    'bootstrap': 'bootstrap/bootstrap-original',
    'material ui': 'materialui/materialui-original',
    'materialui': 'materialui/materialui-original',
    'jquery': 'jquery/jquery-original',
    'webpack': 'webpack/webpack-original',
    'vite': 'vitejs/vitejs-original',
    'babel': 'babel/babel-original',
    'npm': 'npm/npm-original-wordmark',
    'yarn': 'yarn/yarn-original',
    'jest': 'jest/jest-plain',
    'mocha': 'mocha/mocha-plain',
    'selenium': 'selenium/selenium-original',
    'heroku': 'heroku/heroku-original',
    'netlify': 'netlify/netlify-original',
    'vercel': 'vercel/vercel-original',
    'nginx': 'nginx/nginx-original',
    'apache': 'apache/apache-original',
    'wordpress': 'wordpress/wordpress-plain',
    'flutter': 'flutter/flutter-original',
    'unity': 'unity/unity-original',
    'unreal': 'unrealengine/unrealengine-original',
    'tensorflow': 'tensorflow/tensorflow-original',
    'pytorch': 'pytorch/pytorch-original',
    'opencv': 'opencv/opencv-original',
    'pandas': 'pandas/pandas-original',
    'numpy': 'numpy/numpy-original',
    'blender': 'blender/blender-original',
    'canva': 'canva/canva-original',
    'electron': 'electron/electron-original',
    'threejs': 'threejs/threejs-original',
    'three.js': 'threejs/threejs-original',
    'socketio': 'socketio/socketio-original',
    'socket.io': 'socketio/socketio-original',
    'redux': 'redux/redux-original',
    'solidity': 'solidity/solidity-original',
    'raspberry pi': 'raspberrypi/raspberrypi-original',
    'arduino': 'arduino/arduino-original',
    'android': 'android/android-original',
    'apple': 'apple/apple-original',
    'ios': 'apple/apple-original',
    'vscode': 'vscode/vscode-original',
    'vim': 'vim/vim-original',
    'intellij': 'intellij/intellij-original',
    'pycharm': 'pycharm/pycharm-original'
};

function getAutoIconUrl(skillName) {
    const key = skillName.trim().toLowerCase();
    const path = SKILL_ICON_MAP[key];
    if (path) {
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/' + path + '.svg';
    }
    return '';
}

// ---------- Auth State ----------
auth.onAuthStateChanged(user => {
    if (user) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('admin-panel').style.display = 'flex';
        document.getElementById('admin-user-email').textContent = user.email;
        loadAllData();
    } else {
        document.getElementById('login-screen').style.display = 'flex';
        document.getElementById('admin-panel').style.display = 'none';
    }
});

// ---------- Login / Logout ----------
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorEl = document.getElementById('login-error');
    errorEl.textContent = '';

    auth.signInWithEmailAndPassword(email, password)
        .catch(err => {
            errorEl.textContent = 'Invalid email or password.';
        });
    return false;
}

function handleLogout() {
    auth.signOut();
}

// ---------- Navigation ----------
function switchSection(name, el) {
    document.querySelectorAll('.section-content').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('section-' + name).classList.add('active');
    el.classList.add('active');
    document.getElementById('section-title').textContent = el.textContent;
    // Close mobile sidebar
    document.querySelector('.sidebar').classList.remove('open');
}

function toggleSidebar() {
    document.querySelector('.sidebar').classList.toggle('open');
}

// ---------- Toast ----------
function showToast(msg, type = '') {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.className = 'toast show ' + type;
    setTimeout(() => { toast.className = 'toast'; }, 3000);
}

// ---------- Image Preview ----------
function previewImage(input, previewId) {
    const preview = document.getElementById(previewId);
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => {
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

function previewMultiImages(input, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    if (input.files) {
        Array.from(input.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = e => {
                const img = document.createElement('img');
                img.src = e.target.result;
                container.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    }
}

// ---------- Cloudinary Upload ----------
async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', cloudinaryConfig.uploadPreset);

    const res = await fetch(
        `https://api.cloudinary.com/v1_1/${encodeURIComponent(cloudinaryConfig.cloudName)}/image/upload`,
        { method: 'POST', body: formData }
    );
    if (!res.ok) throw new Error('Upload failed');
    const data = await res.json();
    return data.secure_url;
}

// ---------- Hero Section ----------
async function uploadHeroPhoto() {
    const input = document.getElementById('hero-photo-input');
    if (!input.files[0]) { showToast('Select a photo first', 'error'); return; }
    const statusEl = document.getElementById('hero-photo-status');
    const preview = document.getElementById('hero-photo-preview');
    statusEl.textContent = 'Uploading...';

    try {
        const url = await uploadToCloudinary(input.files[0]);
        document.getElementById('hero-photo-url').value = url;
        preview.src = url;
        preview.style.display = 'block';
        statusEl.textContent = '';

        await db.collection('portfolio').doc('hero').set({ photo: url }, { merge: true });
        showToast('Photo uploaded & saved!', 'success');
    } catch (err) {
        statusEl.textContent = '';
        showToast('Upload failed: ' + err.message, 'error');
    }
    input.value = '';
}

async function uploadHeroLogo() {
    const input = document.getElementById('hero-logo-input');
    if (!input.files[0]) { showToast('Select a logo first', 'error'); return; }
    const statusEl = document.getElementById('hero-logo-status');
    const preview = document.getElementById('hero-logo-preview');
    statusEl.textContent = 'Uploading...';

    try {
        const url = await uploadToCloudinary(input.files[0]);
        document.getElementById('hero-logo-url').value = url;
        preview.src = url;
        preview.style.display = 'block';
        statusEl.textContent = '';

        await db.collection('portfolio').doc('hero').set({ logo: url }, { merge: true });
        showToast('Logo uploaded & saved!', 'success');
    } catch (err) {
        statusEl.textContent = '';
        showToast('Upload failed: ' + err.message, 'error');
    }
    input.value = '';
}

async function saveHero(e) {
    e.preventDefault();
    const data = {};

    const greeting = document.getElementById('hero-greeting').value;
    const name = document.getElementById('hero-name').value;
    const rolesText = document.getElementById('hero-roles').value;
    const description = document.getElementById('hero-desc').value;
    const ctaLink = document.getElementById('hero-cta-link').value;
    const ctaText = document.getElementById('hero-cta-text').value;
    const photo = document.getElementById('hero-photo-url').value;
    const logo = document.getElementById('hero-logo-url').value;

    if (greeting) data.greeting = greeting;
    if (name) data.name = name;
    if (rolesText) data.roles = rolesText.split('\n').map(r => r.trim()).filter(r => r);
    if (description) data.description = description;
    if (ctaLink) data.ctaLink = ctaLink;
    if (ctaText) data.ctaText = ctaText;
    if (photo) data.photo = photo;
    if (logo) data.logo = logo;

    if (Object.keys(data).length === 0) {
        showToast('Fill at least one field to save', 'error');
        return false;
    }

    try {
        await db.collection('portfolio').doc('hero').set(data, { merge: true });
        showToast('Hero section saved!', 'success');
    } catch (err) {
        showToast('Error saving: ' + err.message, 'error');
    }
    return false;
}

function loadHero(data) {
    if (!data) return;
    document.getElementById('hero-greeting').value = data.greeting || '';
    document.getElementById('hero-name').value = data.name || '';
    document.getElementById('hero-roles').value = (data.roles || []).join('\n');
    document.getElementById('hero-desc').value = data.description || '';
    document.getElementById('hero-cta-link').value = data.ctaLink || '';
    document.getElementById('hero-cta-text').value = data.ctaText || '';
    document.getElementById('hero-photo-url').value = data.photo || '';
    document.getElementById('hero-logo-url').value = data.logo || '';
    if (data.photo) {
        const preview = document.getElementById('hero-photo-preview');
        preview.src = data.photo;
        preview.style.display = 'block';
    }
    if (data.logo) {
        const logoPreview = document.getElementById('hero-logo-preview');
        logoPreview.src = data.logo;
        logoPreview.style.display = 'block';
    }
}

// ---------- Projects ----------
let projectImageUrls = [];

function openProjectForm(editId) {
    projectImageUrls = [];
    document.getElementById('project-form').reset();
    document.getElementById('project-edit-id').value = '';
    document.getElementById('project-uploaded-gallery').innerHTML = '';
    document.getElementById('project-upload-status').textContent = '';
    document.getElementById('project-form-title').textContent = 'Add Project';

    if (editId) {
        document.getElementById('project-form-title').textContent = 'Edit Project';
        document.getElementById('project-edit-id').value = editId;
        db.collection('portfolio').doc('projects').collection('items').doc(editId).get().then(doc => {
            if (doc.exists) {
                const d = doc.data();
                document.getElementById('project-title').value = d.title || '';
                document.getElementById('project-short-desc').value = d.desc || '';
                document.getElementById('project-details').value = d.details || '';
                document.getElementById('project-live-url').value = d.liveUrl || '';
                document.getElementById('project-status').value = d.status || 'not-live';
                document.getElementById('project-order').value = d.order || 0;
                projectImageUrls = d.images || [];
                renderProjectGallery();
            }
        });
    }
    document.getElementById('project-form-modal').style.display = 'flex';
}

function closeProjectForm() {
    document.getElementById('project-form-modal').style.display = 'none';
}

async function handleProjectImagesSelect(input) {
    if (!input.files.length) return;
    const gallery = document.getElementById('project-uploaded-gallery');
    const statusEl = document.getElementById('project-upload-status');
    const totalFiles = input.files.length;
    let uploaded = 0;

    statusEl.textContent = `Uploading 0/${totalFiles}...`;

    // Create placeholder items for each file
    const placeholders = [];
    for (const file of input.files) {
        const item = document.createElement('div');
        item.className = 'uploaded-gallery-item uploading';
        const localUrl = URL.createObjectURL(file);
        item.innerHTML = `<img src="${localUrl}"><div class="upload-spinner"></div>`;
        gallery.appendChild(item);
        placeholders.push({ item, file });
    }

    // Upload each file to Cloudinary
    for (const { item, file } of placeholders) {
        try {
            const url = await uploadToCloudinary(file);
            projectImageUrls.push(url);
            uploaded++;
            statusEl.textContent = `Uploading ${uploaded}/${totalFiles}...`;
            const idx = projectImageUrls.length - 1;
            item.classList.remove('uploading');
            item.innerHTML = `<img src="${sanitizeAttr(url)}"><button type="button" class="remove-img-btn" onclick="removeProjectImage(${idx})">&times;</button>`;
        } catch (err) {
            item.remove();
            uploaded++;
            showToast('Failed to upload: ' + file.name, 'error');
        }
    }

    input.value = '';

    // Auto-save to Firebase if editing existing project
    const editId = document.getElementById('project-edit-id').value;
    if (editId && uploaded > 0) {
        try {
            await db.collection('portfolio').doc('projects').collection('items').doc(editId).update({ images: projectImageUrls });
            loadProjects();
        } catch (err) { /* ignore */ }
    }

    statusEl.textContent = uploaded + ' image(s) uploaded!';
    setTimeout(() => { statusEl.textContent = ''; }, 3000);
}

function renderProjectGallery() {
    const gallery = document.getElementById('project-uploaded-gallery');
    gallery.innerHTML = '';
    projectImageUrls.forEach((url, idx) => {
        const item = document.createElement('div');
        item.className = 'uploaded-gallery-item';
        item.innerHTML = `<img src="${sanitizeAttr(url)}"><button type="button" class="remove-img-btn" onclick="removeProjectImage(${idx})">&times;</button>`;
        gallery.appendChild(item);
    });
}

function removeProjectImage(idx) {
    projectImageUrls.splice(idx, 1);
    renderProjectGallery();
    // Auto-save if editing
    const editId = document.getElementById('project-edit-id').value;
    if (editId) {
        db.collection('portfolio').doc('projects').collection('items').doc(editId).update({ images: projectImageUrls })
            .then(() => loadProjects())
            .catch(() => {});
    }
}

async function saveProject(e) {
    e.preventDefault();
    const editId = document.getElementById('project-edit-id').value;
    const data = {
        title: document.getElementById('project-title').value,
        desc: document.getElementById('project-short-desc').value,
        details: document.getElementById('project-details').value,
        liveUrl: document.getElementById('project-live-url').value,
        status: document.getElementById('project-status').value,
        images: projectImageUrls,
        order: parseInt(document.getElementById('project-order').value) || 0
    };

    try {
        const collection = db.collection('portfolio').doc('projects').collection('items');
        if (editId) {
            await collection.doc(editId).update(data);
        } else {
            await collection.add(data);
        }
        showToast('Project saved!', 'success');
        closeProjectForm();
        loadProjects();
    } catch (err) {
        showToast('Error: ' + err.message, 'error');
    }
    return false;
}

async function deleteProject(id) {
    if (!confirm('Delete this project?')) return;
    try {
        await db.collection('portfolio').doc('projects').collection('items').doc(id).delete();
        showToast('Project deleted', 'success');
        loadProjects();
    } catch (err) {
        showToast('Error: ' + err.message, 'error');
    }
}

async function loadProjects() {
    const container = document.getElementById('projects-list');
    container.innerHTML = '<p style="color:#888;">Loading...</p>';
    try {
        const snap = await db.collection('portfolio').doc('projects').collection('items').orderBy('order').get();
        if (snap.empty) {
            container.innerHTML = '<p style="color:#888;">No projects yet. Click "+ Add Project" to create one.</p>';
            return;
        }
        container.innerHTML = '';
        snap.forEach(doc => {
            const d = doc.data();
            const thumb = d.images && d.images[0] ? d.images[0] : '';
            const card = document.createElement('div');
            card.className = 'item-card';
            const statusBadge = d.status === 'live' 
                ? '<span style="color:#2e7d32;font-weight:600;font-size:0.85rem;">● Live</span>' 
                : '<span style="color:#888;font-weight:600;font-size:0.85rem;">○ Not Live</span>';
            card.innerHTML = `
                ${thumb ? `<img src="${sanitizeAttr(thumb)}" class="item-card-img" alt="">` : ''}
                <div class="item-card-info">
                    <h4>${escapeHtml(d.title)} ${statusBadge}</h4>
                    <p>${escapeHtml((d.desc || '').substring(0, 100))}...</p>
                </div>
                <div class="item-card-actions">
                    <button class="btn btn-secondary btn-sm" onclick="openProjectForm('${doc.id}')">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteProject('${doc.id}')">Delete</button>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (err) {
        container.innerHTML = '<p style="color:#e74c3c;">Error loading projects.</p>';
    }
}

// ---------- Skills ----------
function openSkillForm(editId) {
    document.getElementById('skill-form').reset();
    document.getElementById('skill-edit-id').value = '';
    document.getElementById('skill-icon-preview').style.display = 'none';
    document.getElementById('skill-form-title').textContent = 'Add Skill';

    if (editId) {
        document.getElementById('skill-form-title').textContent = 'Edit Skill';
        document.getElementById('skill-edit-id').value = editId;
        db.collection('portfolio').doc('skills').collection('items').doc(editId).get().then(doc => {
            if (doc.exists) {
                const d = doc.data();
                document.getElementById('skill-name').value = d.name || '';
                document.getElementById('skill-icon-url').value = d.icon || '';
                document.getElementById('skill-order').value = d.order || 0;
                if (d.icon) {
                    const preview = document.getElementById('skill-icon-preview');
                    preview.src = d.icon;
                    preview.style.display = 'block';
                }
            }
        });
    }
    document.getElementById('skill-form-modal').style.display = 'flex';

    // Attach auto-icon listener
    const nameInput = document.getElementById('skill-name');
    nameInput.removeEventListener('input', autoFillSkillIcon);
    nameInput.addEventListener('input', autoFillSkillIcon);
}

function autoFillSkillIcon() {
    const name = document.getElementById('skill-name').value;
    const iconUrlInput = document.getElementById('skill-icon-url');
    const preview = document.getElementById('skill-icon-preview');
    const autoUrl = getAutoIconUrl(name);
    if (autoUrl) {
        iconUrlInput.value = autoUrl;
        preview.src = autoUrl;
        preview.style.display = 'block';
    }
}

function closeSkillForm() {
    document.getElementById('skill-form-modal').style.display = 'none';
}

async function uploadSkillIcon() {
    const input = document.getElementById('skill-icon-input');
    if (!input.files[0]) { showToast('Select an icon first', 'error'); return; }
    try {
        showToast('Uploading icon...');
        const url = await uploadToCloudinary(input.files[0]);
        document.getElementById('skill-icon-url').value = url;
        const preview = document.getElementById('skill-icon-preview');
        preview.src = url;
        preview.style.display = 'block';

        // Auto-save icon to Firebase if editing existing skill
        const editId = document.getElementById('skill-edit-id').value;
        if (editId) {
            await db.collection('portfolio').doc('skills').collection('items').doc(editId).update({ icon: url });
            loadSkills();
            showToast('Icon uploaded & saved!', 'success');
        } else {
            showToast('Icon uploaded! Fill name & save.', 'success');
        }
    } catch (err) {
        showToast('Upload failed: ' + err.message, 'error');
    }
}

async function saveSkill(e) {
    e.preventDefault();
    const editId = document.getElementById('skill-edit-id').value;
    const data = {
        name: document.getElementById('skill-name').value,
        icon: document.getElementById('skill-icon-url').value,
        order: parseInt(document.getElementById('skill-order').value) || 0
    };

    try {
        const collection = db.collection('portfolio').doc('skills').collection('items');
        if (editId) {
            await collection.doc(editId).update(data);
        } else {
            await collection.add(data);
        }
        showToast('Skill saved!', 'success');
        closeSkillForm();
        loadSkills();
    } catch (err) {
        showToast('Error: ' + err.message, 'error');
    }
    return false;
}

async function deleteSkill(id) {
    if (!confirm('Delete this skill?')) return;
    try {
        await db.collection('portfolio').doc('skills').collection('items').doc(id).delete();
        showToast('Skill deleted', 'success');
        loadSkills();
    } catch (err) {
        showToast('Error: ' + err.message, 'error');
    }
}

async function loadSkills() {
    const container = document.getElementById('skills-list');
    container.innerHTML = '<p style="color:#888;">Loading...</p>';
    try {
        const snap = await db.collection('portfolio').doc('skills').collection('items').orderBy('order').get();
        if (snap.empty) {
            container.innerHTML = '<p style="color:#888;">No skills yet.</p>';
            return;
        }
        container.innerHTML = '';
        snap.forEach(doc => {
            const d = doc.data();
            const card = document.createElement('div');
            card.className = 'skill-admin-card';
            card.innerHTML = `
                <img src="${sanitizeAttr(d.icon)}" alt="${escapeHtml(d.name)}">
                <div class="skill-info">
                    <span>${escapeHtml(d.name)}</span>
                </div>
                <div class="skill-actions">
                    <button class="btn btn-secondary btn-sm" onclick="openSkillForm('${doc.id}')">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteSkill('${doc.id}')">Del</button>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (err) {
        container.innerHTML = '<p style="color:#e74c3c;">Error loading skills.</p>';
    }
}

// ---------- Contact ----------
async function saveContact(e) {
    e.preventDefault();
    const data = {
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        phone: document.getElementById('contact-phone').value,
        location: document.getElementById('contact-location').value,
        facebook: document.getElementById('contact-facebook').value,
        facebookText: document.getElementById('contact-facebook-text').value,
        github: document.getElementById('contact-github').value,
        githubText: document.getElementById('contact-github-text').value
    };

    try {
        await db.collection('portfolio').doc('contact').set(data);
        showToast('Contact saved!', 'success');
    } catch (err) {
        showToast('Error: ' + err.message, 'error');
    }
    return false;
}

function loadContact(data) {
    if (!data) return;
    document.getElementById('contact-name').value = data.name || '';
    document.getElementById('contact-email').value = data.email || '';
    document.getElementById('contact-phone').value = data.phone || '';
    document.getElementById('contact-location').value = data.location || '';
    document.getElementById('contact-facebook').value = data.facebook || '';
    document.getElementById('contact-facebook-text').value = data.facebookText || '';
    document.getElementById('contact-github').value = data.github || '';
    document.getElementById('contact-github-text').value = data.githubText || '';
}

// ---------- Settings ----------
async function saveSettings(e) {
    e.preventDefault();
    const data = {
        title: document.getElementById('settings-title').value,
        footer: document.getElementById('settings-footer').value
    };

    try {
        await db.collection('portfolio').doc('settings').set(data);
        showToast('Settings saved!', 'success');
    } catch (err) {
        showToast('Error: ' + err.message, 'error');
    }
    return false;
}

function loadSettings(data) {
    if (!data) return;
    document.getElementById('settings-title').value = data.title || '';
    document.getElementById('settings-footer').value = data.footer || '';
}

// ---------- Load All Data ----------
async function loadAllData() {
    try {
        const [heroDoc, contactDoc, settingsDoc] = await Promise.all([
            db.collection('portfolio').doc('hero').get(),
            db.collection('portfolio').doc('contact').get(),
            db.collection('portfolio').doc('settings').get()
        ]);
        loadHero(heroDoc.exists ? heroDoc.data() : null);
        loadContact(contactDoc.exists ? contactDoc.data() : null);
        loadSettings(settingsDoc.exists ? settingsDoc.data() : null);
        loadProjects();
        loadSkills();
    } catch (err) {
        showToast('Error loading data: ' + err.message, 'error');
    }
}

// ---------- Seed Default Data ----------
async function seedDefaultData() {
    if (!confirm('This will populate Firebase with your current portfolio data. Continue?')) return;

    try {
        showToast('Seeding data...');

        // Hero
        await db.collection('portfolio').doc('hero').set({
            greeting: "Hi, I'm",
            name: "ASHISH BISWAS",
            roles: ["Web Developer", "Software Developer", "2D Game Developer", "Full Stack Developer", "Tech Problem Solver"],
            description: "I create modern, responsive websites, desktop apps, and engaging 2D web games that help businesses grow and stand out online.",
            ctaLink: "https://wa.me/8801744502112",
            ctaText: "Get Free Consultant",
            photo: "img/myphoto.png"
        });

        // Projects
        const projRef = db.collection('portfolio').doc('projects').collection('items');
        await projRef.add({
            title: "Royal Event – Modern Serverless Event Management Platform",
            desc: "A modern serverless event management web application built with HTML, CSS, Bootstrap, and Vanilla JavaScript. It features real-time chat, dynamic venue booking, secure authentication, and a powerful admin dashboard.",
            details: "Royal Event is a modern, fully serverless event management web application designed to overcome the limitations of traditional event platforms. It provides real-time communication between users and administrators, a dynamic venue booking system, secure authentication, and a powerful admin dashboard with analytics for efficient content and booking management. The platform is built entirely on a client-side architecture using Firebase for authentication, database, and storage services, eliminating the need for a traditional server. Additionally, Cloudinary is integrated for fast and optimized media uploads. Developed with HTML5, CSS3, Bootstrap, and Vanilla JavaScript (ES Modules), Royal Event delivers a responsive, secure, scalable, and user-friendly solution for modern event management",
            images: ["img/Picture1.png", "img/Picture2.png", "img/Picture3.png", "img/Picture4.png", "img/Picture5.png"],
            order: 1
        });
        await projRef.add({
            title: "Wedding Planner System – Java-Based Desktop Application",
            desc: "A Java-based desktop application developed with NetBeans to help users plan and book wedding venues along with related services, offering a complete wedding planning solution.",
            details: "Wedding Planner System allows users to browse multiple hotels with images, location, and pricing, filter venues based on location, book their preferred hotel, explore food and catering options, and preview decoration themes. The admin panel enables managing hotel listings, updating data, and viewing bookings. Built with Java in NetBeans and backed by MySQL for storing hotel, booking, and user data. XAMPP or any local MySQL server can be used to run the database.",
            images: ["img/wedding_1.png", "img/wedding_2.png", "img/wedding_3.png"],
            order: 2
        });

        // Skills
        const skillRef = db.collection('portfolio').doc('skills').collection('items');
        const skills = [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", order: 1 },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", order: 2 },
            { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", order: 3 },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", order: 4 },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", order: 5 },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", order: 6 },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", order: 7 },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", order: 8 },
            { name: "GDScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg", order: 9 },
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", order: 10 },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", order: 11 },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", order: 12 }
        ];
        for (const skill of skills) {
            await skillRef.add(skill);
        }

        // Contact
        await db.collection('portfolio').doc('contact').set({
            name: "Ashish Biswas",
            email: "ashish44502@email.com",
            phone: "+880 1744 502112",
            location: "Khulna, Bangladesh",
            facebook: "https://www.facebook.com/profile.php?id=100047499462805",
            facebookText: "facebook.com/ashish",
            github: "https://github.com/Ashish-Biswas-bit",
            githubText: "github.com/Ashish-Biswas-bit"
        });

        // Settings
        await db.collection('portfolio').doc('settings').set({
            title: "My Portfolio",
            footer: "© 2026 Ashish Biswas. All rights reserved."
        });

        showToast('Default data seeded successfully!', 'success');
        loadAllData();
    } catch (err) {
        showToast('Seed error: ' + err.message, 'error');
    }
}

// ---------- Security Helpers ----------
function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

function sanitizeAttr(str) {
    if (!str) return '';
    return str.replace(/['"<>]/g, '');
}
