# TypeScript Dependency Injection Example

This project demonstrates a simple implementation of dependency injection in TypeScript.

## Project Structure

```
typescript-di-example
├── src
│   ├── Class1.ts
│   └── Class2.ts
├── tsconfig.json
└── README.md
```

## Files

- **src/Class1.ts**: Exports the `Class1` class, which has a private readonly property `class2` of type `Class2` and a method `method1` that logs a message and calls `method1` on `class2`.
  
- **src/Class2.ts**: Expects to export the `Class2` class, which likely contains a method `method1`.

- **tsconfig.json**: Configuration file for TypeScript, specifying compiler options and files to include in the compilation.

## Usage

To compile the TypeScript files, run:

```
tsc
```

This will generate the output in the `dist` directory as specified in the `tsconfig.json`.