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

module.exports = { Activity, Repository }