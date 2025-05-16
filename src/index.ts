import "reflect-metadata";
import {container} from "tsyringe";
import { Class1 } from "./Class1";
import { Class2 } from "./Class2";
import { IClass1 } from "./IClass1";
import { IClass2 } from "./IClass2";

// container.register("IClass1", {
//   useClass: Class1
// });

// container.register("IClass2", {
//     useClass: Class2
//   });

container.register<IClass1>("IClass1", {useClass: Class1});
container.register<IClass2>("IClass2", {useClass: Class2});

const instance = container.resolve(Class1); // Adjust the path as necessary
instance.method1();