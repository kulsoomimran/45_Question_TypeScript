/* TASK # 21:
They think of something you could store in a TypeScript Object.
Write a program that creates Objects containing these items.*/

interface employee {
  name: string;
  id: number;
  department: string;
  designation: string;
  salary: number;
}
const employeeData: employee = {
  name: "Kanwal Zeeshan",
  id: 78934,
  department: "Information Technology",
  designation: "Data Analytics",
  salary: 60000,
};
console.log(employeeData);
