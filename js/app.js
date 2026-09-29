document.addEventListener('DOMContentLoaded', () => {
    async function initApp() {
        renderLoadingState();
        try {
            const [profile, projects, services] = await Promise.all([
                ApiService.getProfile(),
                ApiService.getProjects(),
                ApiService.getServices()
            ]);
            renderProfile(profile);
            renderProjects(projects);
            renderServicesOptions(services);
            setupUniversalModal(projects);
            setupForm();
            checkLocalStorage();
        } catch (error) {
            renderErrorState();
        }
    }

    function renderProfile(profile) {
        document.getElementById('hero-name').textContent = profile.name;
        document.getElementById('hero-role').textContent = profile.role;
        document.getElementById('hero-bio').textContent = profile.bio;
        
        const photoEl = document.getElementById('hero-photo');
        if (photoEl && profile.photo) {
            photoEl.src = profile.photo;
            photoEl.style.display = 'inline-block';
        }
    }

    function renderLoadingState() {
        const container = document.getElementById('projects-status-container');
        if(container) container.innerHTML = `<div class="d-flex justify-content-center text-primary my-5"><div class="spinner-border"></div><span class="ms-3 align-self-center fw-bold">Menarik data...</span></div>`;
    }

    function renderErrorState() {
        const container = document.getElementById('projects-status-container');
        if(container) container.innerHTML = `<div class="alert alert-danger"><strong>Gagal memuat data portofolio.</strong> Periksa koneksi internet.</div>`;
    }

    function renderProjects(projects) {
        const statusContainer = document.getElementById('projects-status-container');
        const gridContainer = document.getElementById('projects-container');
        if(statusContainer) statusContainer.innerHTML = ''; 
        if(!gridContainer) return;
        gridContainer.innerHTML = '';

        if (projects.length === 0) {
            gridContainer.innerHTML = '<div class="alert alert-warning">Belum ada proyek.</div>';
            return;
        }

        projects.forEach(proj => {
            const safeTitle = proj.title.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            const cardHTML = `
                <div class="col">
                    <div class="card h-100 project-card shadow-sm border-0">
                        <div class="card-body">
                            <span class="badge ${proj.badgeClass} mb-3 px-2 py-1 rounded">${proj.category}</span>
                            <h5 class="card-title fw-bold">${safeTitle}</h5>
                            <p class="card-text text-muted small">${proj.shortDescription}</p>
                        </div>
                        <div class="card-footer bg-white border-0 pt-0 pb-3">
                            <button type="button" class="btn btn-outline-primary btn-sm w-100 custom-btn view-project-btn" data-id="${proj.id}">Lihat Detail</button>
                        </div>
                    </div>
                </div>
            `;
            gridContainer.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    function setupUniversalModal(projects) {
        const modalEl = document.getElementById('universalProjectModal');
        if(!modalEl) return;
        const bsModal = new bootstrap.Modal(modalEl);
        
        document.getElementById('projects-container').addEventListener('click', (e) => {
            if (e.target.classList.contains('view-project-btn')) {
                const project = projects.find(p => p.id === e.target.getAttribute('data-id'));
                if (project) {
                    document.getElementById('modalTitle').textContent = project.title;
                    const tagsHTML = project.tags.map(tag => `<span class="badge bg-light text-dark border me-1"><i class="bi bi-tag-fill text-primary"></i> ${tag}</span>`).join('');
                    document.getElementById('modalBody').innerHTML = `<p class="text-muted mb-4">${project.fullDescription}</p><div class="d-flex flex-wrap gap-2">${tagsHTML}</div>`;
                    bsModal.show();
                }
            }
        });
    }

    function renderServicesOptions(services) {
        const selectEl = document.getElementById('floatingKategori');
        if(!selectEl) return;
        selectEl.innerHTML = '<option selected disabled value="">Pilih Kategori Kebutuhan...</option>';
        services.forEach(srv => {
            selectEl.insertAdjacentHTML('beforeend', `<option value="${srv.name}">${srv.name}</option>`);
        });
    }

    function setupForm() {
        const form = document.getElementById('serviceForm');
        const submitBtn = document.getElementById('submitBtn');
        if(!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                return;
            }
            const payload = Object.fromEntries(new FormData(form).entries());
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Mengirim...';

            try {
                await ApiService.submitServiceOrder(payload);
                localStorage.setItem('lastServiceOrder', JSON.stringify({ nama: payload.nama, kategori: payload.kategori, waktu: new Date().toLocaleString() }));
                showToast(`Permintaan layanan <strong>${payload.kategori}</strong> atas nama ${payload.nama} berhasil dikirim!`);
                form.reset();
                form.classList.remove('was-validated');
                checkLocalStorage(); 
            } catch (error) {
                showToast(`Terjadi kesalahan jaringan!`, 'danger');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnText;
            }
        });
    }

    function showToast(message, type = 'success') {
        const toastEl = document.getElementById('formToast');
        if(!toastEl) return;
        toastEl.className = `toast align-items-center text-bg-${type} border-0`;
        document.getElementById('toastMessage').innerHTML = message;
        new bootstrap.Toast(toastEl).show();
    }

    function checkLocalStorage() {
        const savedOrder = localStorage.getItem('lastServiceOrder');
        const statusEl = document.getElementById('local-order-status');
        if (savedOrder && statusEl) {
            const data = JSON.parse(savedOrder);
            statusEl.innerHTML = `
                <div class="d-flex align-items-center text-success mb-2"><i class="bi bi-check-circle-fill fs-5 me-2"></i> <strong>Terkirim!</strong></div>
                <small class="d-block text-muted">Nama: <strong>${data.nama}</strong></small>
                <small class="d-block text-muted">Layanan: <strong>${data.kategori}</strong></small>
                <small class="d-block text-muted mt-2" style="font-size: 0.7rem;">Waktu: ${data.waktu}</small>
            `;
        }
    }

    initApp();
});