import { injectable } from "tsyringe";
import { IClass2 } from "./IClass2";

@injectable()
export class Class2 implements IClass2 {
    method1() {
        console.log('Method2 called');
    }
}