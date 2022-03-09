import {Alerter} from "../alerter/Alerter";
import {Product} from "../domain/product";

export abstract class Supplier {
    abstract name: string

    alerter: Alerter

    protected constructor(alerter: Alerter) {
        this.alerter = alerter
    }

    findProductsInStockAndAlertForEachProduct() {
        this.findProductsInStock().then(
            (products: Product[]) => products.forEach((product: Product) => { this.alerter.alert(product) })
        )
    }

    abstract findProductsInStock(): Promise<Product[]>
}