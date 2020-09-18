var employees = []

var employeeListArr = []

function Employee(name, jobTitle, salary, status) {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "Full Time"
}

Employee.prototype.printEmployeeForm = function () {
    console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: " + this.salary + ", Status: " + this.status)
}

var homerSimpson = new Employee("Homer Simpson", "Nuclear Safety Inspector", 50000, this.status)

var bobBelcher = new Employee("Bob Belcher", "Burger Chef", 30000, this.status)

var bender = new Employee("Bender Bending Rodriguez", "Delivery Driver", 40000, "Contract")

bender.status = "Contract"

homerSimpson.printEmployeeForm()

bobBelcher.printEmployeeForm()

bender.printEmployeeForm()

employeeListArr.push(homerSimpson)

employeeListArr.push(bobBelcher)

employeeListArr.push(bender)

for (var i = 0; i < employeeListArr.length; i++) {
    employees.push(employeeListArr[i])
}

console.log(employees) 