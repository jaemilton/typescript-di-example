import {inject, injectable} from "tsyringe";
import { IClass1 } from "./IClass1"; // Adjust the path as necessary
import { IClass2 } from "./IClass2";

@injectable()
export class Class1 implements IClass1 {
    constructor(@inject("IClass2") private readonly class2: IClass2) {        // Constructor logic
        console.log('Class1 constructor called');
    }

    method1() {
        console.log('Method1 called');
        this.class2.method1();
    }
}