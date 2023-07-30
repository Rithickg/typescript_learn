let sales: number = 45_67
let course: string = 'java'
let isPublished: boolean = true

let level: any
level = 3
level = 'hard'

function render(document: any) {
    console.log(document)
}

let numbers: number[] = [23, 45, 56, 76, 5, 65, 45]

let user: [number, boolean, string, number] = [45, false, 'rock', 45]
console.log(user)

enum Size { Small = 's', Medium = 'm', Large = 'l' }

let mySize: Size = Size.Medium
console.log(mySize)

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2023)
        return income * 1.2
    return income * 1.3
}

const tax: number = calculateTax(100000, 2022)
console.log("Tax:", tax)

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void

}

let employee: Employee = {
    id: 23,
    name: "ram",
    retire: (date: Date) => {
        console.log(date)
    }
}

employee.name = 'rock'
// employee.id = 34
console.log(employee)

function kgTolbs(weight: number | string): number {
    if (typeof weight === 'number')
        return weight * 2.2
    else
        return parseInt(weight) * 2.2
}

kgTolbs(10)
kgTolbs('10kg')

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }

}

type Quality = 50 | 100
let quality: Quality = 50