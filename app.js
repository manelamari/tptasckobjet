// Classe Task qui représente une tâche
class Task {
  constructor(title, priority, completed = false) {
    this.title = title;
    this.priority = priority;
    this.completed = completed;
  }

  // Méthode pour marquer une tâche comme terminée
  markAsCompleted() {
    this.completed = true;
  }

  // Méthode pour formater le titre en majuscule
  formatTitle() {
    return this.title.toUpperCase();
  }

  // Méthode pour formater la priorité en chaîne de caractères (Haute, Moyenne, Basse)
  formatPriority() {
    if (this.priority >= 7) {
      return "Haute";
    } else if (this.priority >= 4) {
      return "Moyenne";
    } else {
      return "Basse";
    }
  }
}

// Classe TaskList qui gère une liste de tâches
class TaskList {
  constructor() {
    this.tasks = [];
  }

  // Ajouter une tâche à la liste
  addTask(task) {
    this.tasks.push(task);
  }

  // Retirer une tâche de la liste
  removeTask(title) {
    this.tasks = this.tasks.filter((task) => task.title !== title);
  }

  // Afficher toutes les tâches
  displayTasks() {
    this.tasks.forEach((task) => {
      console.log(
        `Titre: ${task.formatTitle()}, Priorité: ${task.formatPriority()}, Terminée: ${
          task.completed ? "Oui" : "Non"
        }`
      );
    });
  }

  // Afficher les tâches triées par priorité (de la plus haute à la plus basse)
  displayTasksByPriority() {
    const sortedTasks = [...this.tasks].sort((a, b) => b.priority - a.priority);
    sortedTasks.forEach((task) => {
      console.log(
        `Titre: ${task.formatTitle()}, Priorité: ${task.formatPriority()}, Terminée: ${
          task.completed ? "Oui" : "Non"
        }`
      );
    });
  }

  // Afficher les tâches non terminées
  displayIncompleteTasks() {
    const incompleteTasks = this.tasks.filter((task) => !task.completed);
    incompleteTasks.forEach((task) => {
      console.log(
        `Titre: ${task.formatTitle()}, Priorité: ${task.formatPriority()}, Terminée: Non`
      );
    });
  }

  // Calculer le nombre total de tâches non terminées
  countIncompleteTasks() {
    return this.tasks.filter((task) => !task.completed).length;
  }

  // Afficher les tâches triées par priorité et groupées par priorité
  displayTasksGroupedByPriority() {
    const priorityGroups = {
      Haute: [],
      Moyenne: [],
      Basse: [],
    };

    this.tasks.forEach((task) => {
      const priority = task.formatPriority();
      priorityGroups[priority].push(task);
    });

    // Affichage des tâches groupées
    for (const priority in priorityGroups) {
      console.log(`--- Priorité ${priority} ---`);
      priorityGroups[priority].forEach((task) => {
        console.log(
          `Titre: ${task.formatTitle()}, Terminée: ${
            task.completed ? "Oui" : "Non"
          }`
        );
      });
    }
  }
}

// Exemple d'utilisation

// Créer une nouvelle liste de tâches
const taskList = new TaskList();

// Ajouter des tâches
taskList.addTask(new Task("Faire les courses", 5));
taskList.addTask(new Task("Apprendre JavaScript", 8));
taskList.addTask(new Task("Aller à la gym", 3));
taskList.addTask(new Task("Préparer le dîner", 6));
taskList.addTask(new Task("Lire un livre", 9));

// Afficher toutes les tâches
console.log("Toutes les tâches :");
taskList.displayTasks();

// Afficher les tâches triées par priorité
console.log("\nTâches triées par priorité :");
taskList.displayTasksByPriority();

// Afficher les tâches non terminées
console.log("\nTâches non terminées :");
taskList.displayIncompleteTasks();

// Marquer une tâche comme terminée
taskList.tasks[0].markAsCompleted();

// Afficher le nombre total de tâches non terminées
console.log(
  "\nNombre de tâches non terminées :",
  taskList.countIncompleteTasks()
);

// Afficher les tâches groupées par priorité
console.log("\nTâches groupées par priorité :");
taskList.displayTasksGroupedByPriority();
