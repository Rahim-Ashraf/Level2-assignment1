const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier;
}


const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === 'string') {
        return value.trim().toLowerCase();
    }
    if (typeof value === 'boolean') {
        return value ? 'Active' : 'Inactive';
    }
    return value * 10;
}


const formatCoordinate = (v: readonly [number, number, string]): string => {
    return `Location: ${v[2]} (${v[0]}, ${v[1]})`
}

const concatenateArrays = <T>(...arrays: T[][]) => {
    return arrays.flat()
}


interface Course {
    title: string
    students: number
    isPublished: boolean
}

const getPopularCourses = (array: Course[], minStudents: number): Course[] => {
    const newArray: Course[] = []
    for (const course of array) {
        if (course.isPublished === true && course.students >= minStudents)
            newArray.push(course)
    }
    return newArray
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const newArray: T[K][] = []
    items.map((item) => {
        newArray.push(item[key])
    })
    return newArray
}


class Employee {
    protected name
    private baseSalary
    constructor(name: string, baseSalary: number) {
        this.name = name
        this.baseSalary = baseSalary
    }
    getDetails = () => {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}
class Manager extends Employee {
    private department
    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary)
        this.department = department
    }
    getRoleInfo = () => {
        return `Manager of ${this.department}: ${this.name}`
    }
}


const validateAgeAsync = (age: number): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Access Denied: Must be 18 or older"))
        }
        else {
            setTimeout(() => resolve("Access Granted"), 1000)
        }
    })
}
