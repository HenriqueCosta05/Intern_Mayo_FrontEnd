import { Navbar } from "../../components/Navbar.js";
import { Table } from "../../components/Table.js";

export class TasksHomepage {
    constructor() {}
    
    render() {
        return `
                ${new Navbar().loggedInNavbar()}
                ${new Table().render()}
                `
    }
}