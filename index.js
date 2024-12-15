const apiBase = "https://api.api-onepiece.com/v2/characters/en";
const fetchButton = document.getElementById("fetch");
const characters = document.getElementById("content");
const loading = document.getElementById("loading");
const modal = document.getElementById("myModal");
const searchBar = document.getElementById("search");

const showLoading = () => loading.style.display = "block";
const hideLoading = () => loading.style.display = "none";
const showErrorMsg = () => characters.innerHTML = "<p>Something went wrong. Please try again later.</p>";

const fetchData = async () => {
    showLoading();
    try {
        const response = await fetch(apiBase);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        renderTable(data);
    } catch (error) {
        console.error('Fetch error:', error);
        showErrorMsg();
    } finally {
        hideLoading();
    }
};

const renderTable = (data) => {
    const html = `
        
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Crew</th>
                        <th>Bounty</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody class="table-responsive">
                    ${data.map(character => `
                        <tr id="${character.id}" data-id="${character.id}">
                            <td>${character.name}</td>
                            <td>${character.crew ? character.crew.name : 'None'}</td>
                            <td>${character.bounty}</td>
                            <td>${character.job}</td>
                        </tr>
                    `).join('')}
                    </tbody>
            </table>
       `;
    characters.innerHTML = html;
    addRowEventListeners();
};

const addRowEventListeners = () => {
    const rows = characters.querySelectorAll("tbody tr");
    rows.forEach(row => {
        row.addEventListener("click", () => openModal(row.dataset.id));
    });
};

const closeModal = () => {
    modal.style.display = "none";
};

const openModal = async (id) => {
    modal.style.display = "block";
    modal.innerHTML = getModalLoadingContent();
    try {
        const response = await fetch(`${apiBase}/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        renderModalContent(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
};

const getModalLoadingContent = () => `
    <div class="modal-content">
        <div class="modal-header">
            <span class="close" onclick="closeModal()">&times;</span>
        </div>
        <img src="imgs/modaloading.gif" alt="loading">
    </div>`;

const renderModalContent = (data) => {
    const html = `
        <div class="modal-content">
            <div class="modal-header">
                <span class="close" onclick="closeModal()">&times;</span>
            </div>
            <h2>${data.name}</h2>
            <hr style="border: 1px solid #000;">
            <p><strong>Crew:</strong> ${data.crew ? data.crew.name : 'None'}</p>
            <p><strong>Bounty:</strong> ${data.bounty}</p>
            <p><strong>Role:</strong> ${data.job}</p>
            <p><strong>Devil Fruit:</strong> ${data.devilFruit ? data.devilFruit.name : 'None'}</p>
            <p><strong>Position:</strong> ${data.position}</p>
            <p><strong>Height:</strong> ${data.height}</p>
            <p><strong>Weight:</strong> ${data.weight}</p>
            <p><strong>Age:</strong> ${data.age}</p>
        </div>`;
    modal.innerHTML = html;
};

const filterTable = (query) => {
    const rows = characters.querySelectorAll("tbody tr");
    rows.forEach(row => {
        const name = row.children[0].textContent.toLowerCase();
        if (name.includes(query)) {
            row.style.display = "";
        }
        else {
            row.style.display = "none";
        }
    });
};

fetchButton.addEventListener("click", fetchData);
searchBar.addEventListener("keyup", (event) => filterTable(event.target.value.toLowerCase()));