# Vite Configuration Guide

## Choosing Between vite.config.js and vite.config.ts

You have two options for configuring Vite in your project:

### Option 1: vite.config.js (JavaScript)

```js
export default defineConfig({
  // Configuration options
});
```

### Option 2: vite.config.ts (TypeScript)

```ts
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  // Configuration options with type checking
});
```

## Benefits of TypeScript Configuration

The TypeScript version (`vite.config.ts`) provides:

1. **Type Safety**: Catch configuration errors before running your app
2. **Better IDE Support**: Get autocompletion and documentation in your editor
3. **Self-Documentation**: Type annotations make the configuration more readable

## Which One Should You Choose?

- **For TypeScript Projects**: Use `vite.config.ts` for consistency
- **For JavaScript Projects**: Either works, but `vite.config.ts` still provides better tooling

## Important Notes

- **Don't Use Both**: Having both files can cause confusion. Choose one approach.
- **File Location**: The config file should be in your project root directory.
- **When Switching**: After switching to TypeScript configuration, delete the JavaScript version.

## How to Apply Changes

After updating your Vite configuration:

```bash
# Restart the development server
npm run dev

# Or rebuild your project
npm run build
```
