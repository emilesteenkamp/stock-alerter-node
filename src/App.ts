import {Supplier} from "./supplier/Supplier";

export class App {
    suppliers: Supplier[]

    constructor(suppliers: Supplier[]) {
        this.suppliers = suppliers
    }

    async start() {
        console.log("Starting Application...")

        while (true) {
            await this.runAndSleep()
        }
    }

    private async runAndSleep() {
        await this.run()
        await this.sleepFor(5)
    }

    async run() {
        console.log("Checking if product is in stock and alerting if needed for each supplier...")

        await this.checkIfProductIsInStockAndAlertIfNeededForEachSupplier()
    }

    private async checkIfProductIsInStockAndAlertIfNeededForEachSupplier() {
        this.suppliers.forEach((supplier: Supplier) => supplier.checkIfProductIsInStockAndAlertIfNeeded())
    }

    private async sleepFor(timeInSeconds: number) {
        return new Promise((resolve) => {
            setTimeout(resolve, timeInSeconds * 1000);
        });
    }
}
