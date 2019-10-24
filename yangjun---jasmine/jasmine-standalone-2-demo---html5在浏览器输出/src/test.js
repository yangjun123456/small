class Test {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    changeName(name) {
        this.name = name;
        return this.name;
    }
    changeAge(age) {
        this.age = age;
        return this.age;
    }
    changeJob(job) {
        this.job = job;
        return this.job;
    }
}