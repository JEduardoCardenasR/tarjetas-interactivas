// Clase 1
class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

// Clase 2
class Repository {
    constructor() {
        this.activities = [];
        this.id = 1
    }

    // Método 1
    getAllActivities() {
        return this.activities;
    }

    // Método 2
    createActivity(title, description, imgUrl) {
        let activity = new Activity(this.id++, title, description, imgUrl);
        this.activities.push(activity);
    }
    
    // Método 3
    deleteActivity(id) {
        this.activities=this.activities.filter((act) => act.id !== id);
    }
}

// Instancia de clase Repository
const repository = new Repository();

// seleccionar los inputs
const titleInput = document.getElementById("activity-name");
const descriptionInput = document.getElementById("activity-description");
const imageLinkInput = document.getElementById("image-link");

// seleccionar el botón
const addButton = document.querySelector("button");

// seleccionar el contenedor de tarjetas
const activitiesContainer = document.getElementById("activities-container");

// Función auxiliar para crear una tarjeta de actividad
function createActivityCard(activity) {

    // Desestructuración de las propiedades del objeto Activity
    const { id, title, description, imgUrl } = activity;

    // Crear la tarjeta de la actividad
    const activityCard = document.createElement("div");
    activityCard.classList.add("activity-card");

    const activityTitle = document.createElement("h4");
    activityTitle.textContent = activity.title;

    const activityDescription = document.createElement("p");
    activityDescription.textContent = activity.description;

    const activityImage = document.createElement("img");
    activityImage.src = activity.imgUrl;
    activityImage.alt = activity.title;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "X";

    // Añadir elementos a la tarjeta
    activityCard.appendChild(activityTitle);       
    activityCard.appendChild(activityImage);     
    activityCard.appendChild(activityDescription);

    // Agregar evento de eliminación
    deleteButton.addEventListener("click", () => {
        repository.deleteActivity(activity.id);
        displayActivities(); // Actualizar la visualización
    });

    // Añadir el botón de eliminación como el primer hijo de la tarjeta
    activityCard.appendChild(deleteButton);
           
    // Retornar la tarjeta creada
    return activityCard;
}

// función para mostrar las actividades en el contenedor
function displayActivities() {

    // Limpiar el contenedor antes de agregar nuevas tarjetas
    activitiesContainer.innerHTML = '';

    const activities = repository.getAllActivities();

    if (activities.length === 0) {

        // Mostrar el mensaje si no hay actividades
        const noActivitiesMessage = document.createElement("p");
        noActivitiesMessage.textContent = "Sin actividades por el momento";
        activitiesContainer.appendChild(noActivitiesMessage);

    } else {

        // Crear un array de tarjetas usando map
        const activityCards = activities.map((activity) => createActivityCard(activity));

        // Añadir cada tarjeta al contenedor
        activityCards.forEach((activityCard) => {
            activitiesContainer.appendChild(activityCard);
        });
    }
}

// handler - cuando se presione el botón se ejecutará esta función
addButton.addEventListener("click", () => {

    // Obtener los valores de los inputs
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
    const imgUrl = imageLinkInput.value.trim();

    // Verificar que los valores no estén vacíos
    if (!title || !description || !imgUrl) {
        // Mostrar una alerta si falta información
        alert("Por favor, completa todos los campos antes de agregar la actividad.");
        return;
    }

    // Crear la actividad y actualizar la visualización
    repository.createActivity(title, description, imgUrl);
    displayActivities();

    // Limpiar los inputs después de agregar la actividad
    titleInput.value = '';
    descriptionInput.value = '';
    imageLinkInput.value = '';
});

// Inicializar la visualización
displayActivities();

// module.exports = { Activity, Repository }