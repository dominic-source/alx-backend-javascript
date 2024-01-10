interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee(salary: string | number): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher()
    }
    return new Director();
}

// A type predicate
function isDirector(employee: any): employee is Director {
    return employee instanceof Director
}

function executeWork(employee: Director | Teacher) {
    if (isDirector(employee)) return employee.workDirectorTasks()
    else return employee.workTeacherTasks()
}

type Subject = 'Math' | 'History';
function teachClass(todayClass: Subject): string {
    if (todayClass === 'Math') return 'Teaching Math';
    else return 'Teaching History'
}
