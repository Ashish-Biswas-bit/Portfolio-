function showAllProjects() {
	const modal = document.getElementById('project-modal');
	const body = document.getElementById('modal-body');
	let html = '<h3 style="margin-bottom:24px;">All Projects</h3>';
	html += '<div class="see-all-grid">';
	Object.entries(projectData).forEach(([id, data]) => {
		html += `
			<div class="see-all-card">
				<img src="${data.images[0]}" class="see-all-thumb" alt="${data.title}">
				<h4>${data.title}</h4>
				<p>${data.desc}</p>
				<button class="details-btn" onclick="openProjectModal(${id})">More Details</button>
			</div>
		`;
	});
	html += '</div>';
	body.innerHTML = html;
	modal.style.display = 'block';
}
// Project modal data
const projectData = {
	1: {
    title: "Royal Event – Modern Serverless Event Management Platform",
    desc: "A modern serverless event management web application built with HTML, CSS, Bootstrap, and Vanilla JavaScript. It features real-time chat, dynamic venue booking, secure authentication, and a powerful admin dashboard.",
    images: [
        "img/Picture1.png",
        "img/Picture2.png",
        "img/Picture3.png",
        "img/Picture4.png",
        "img/Picture5.png",
    ],
    details: "Royal Event is a modern, fully serverless event management web application designed to overcome the limitations of traditional event platforms. It provides real-time communication between users and administrators, a dynamic venue booking system, secure authentication, and a powerful admin dashboard with analytics for efficient content and booking management. The platform is built entirely on a client-side architecture using Firebase for authentication, database, and storage services, eliminating the need for a traditional server. Additionally, Cloudinary is integrated for fast and optimized media uploads. Developed with HTML5, CSS3, Bootstrap, and Vanilla JavaScript (ES Modules), Royal Event delivers a responsive, secure, scalable, and user-friendly solution for modern event management"
},
	2: {
    title: "Wedding Planner System – Java-Based Desktop Application",
    desc: "A Java-based desktop application developed with NetBeans to help users plan and book wedding venues along with related services, offering a complete wedding planning solution.",
    images: [
        "img/wedding_1.png",
        "img/wedding_2.png",
        "img/wedding_3.png"
    ],
    details: "Wedding Planner System allows users to browse multiple hotels with images, location, and pricing, filter venues based on location, book their preferred hotel, explore food and catering options, and preview decoration themes. The admin panel enables managing hotel listings, updating data, and viewing bookings. Built with Java in NetBeans and backed by MySQL for storing hotel, booking, and user data. XAMPP or any local MySQL server can be used to run the database."
}
};

function openProjectModal(id) {
	const modal = document.getElementById('project-modal');
	const body = document.getElementById('modal-body');
	const data = projectData[id];
	if (!data) return;

	let gallery = '';
	data.images.forEach((img, idx) => {
		gallery += `<img src="${img}" class="${idx === 0 ? 'active' : ''}" onclick="showModalImage(this)">`;
	});

	body.innerHTML = `
		<img src="${data.images[0]}" class="modal-main-img" id="modal-main-img">
		<div class="modal-gallery">${gallery}</div>
		<h3>${data.title}</h3>
		<p>${data.details}</p>
	`;
	modal.style.display = 'block';
}

function closeProjectModal() {
	document.getElementById('project-modal').style.display = 'none';
}

function showModalImage(imgElem) {
	const mainImg = document.getElementById('modal-main-img');
	mainImg.src = imgElem.src;
	document.querySelectorAll('.modal-gallery img').forEach(img => img.classList.remove('active'));
	imgElem.classList.add('active');
}

// Close modal on outside click
window.onclick = function(event) {
	const modal = document.getElementById('project-modal');
	if (event.target === modal) {
		closeProjectModal();
	}
};

// Ensure 'View Projects' button always scrolls to projects section
document.addEventListener('DOMContentLoaded', function() {
	var btn = document.getElementById('view-projects-btn');
	if (btn) {
		btn.addEventListener('click', function(e) {
			var target = document.getElementById('projects');
			if (target) {
				e.preventDefault();
				target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	} 
});
// End of file