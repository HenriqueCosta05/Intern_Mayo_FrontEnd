import { Navbar } from "../../components/Navbar.js";
import { Table } from "../../components/Table.js";

export class TasksHomepage {
    constructor() {}
    
    async render() {
        return `
            ${Navbar.loggedInNavbar()}
            ${await Table.render()}
        `;
    }
}