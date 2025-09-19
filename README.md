# CS2 Script Builder

A powerful auto-builder and bundler for Counter-Strike 2 scripts that enables modern development workflow with TypeScript support, module imports, and automatic bundling.

## Features

- **Module System**: Import and export code across multiple files
- **Auto-bundling**: Automatically combines all files into a single bundle
- **TypeScript Support**: Full TypeScript intellisense and type checking
- **Hot Reload**: Watches for file changes and rebuilds automatically
- **CS2 Integration**: Direct output to your CS2 addon scripts folder

## Prerequisites

- [Node.js](https://nodejs.org/) (Download and install from official website)
- Counter-Strike 2
- Basic knowledge of JavaScript/TypeScript

## Installation & Setup

### Step 1: Download and Extract

Download the archive and extract it to a convenient location (NOT inside your addon folder).

### Step 2: Install Node.js

Download and install Node.js from the official website if you haven't already.

### Step 3: Create CS2 Addon

Create a new addon in CS2 if you haven't done so already.

### Step 4: Create Scripts Folder

Create a `scripts` folder in your addon directory. For example:

```
E:\steam\steamapps\common\Counter-Strike Global Offensive\content\csgo_addons\cs2builder\scripts
```

### Step 5: Configure Output Path

1. Open `tsconfig.json` in the CS2 Script Builder folder
2. Update the `outDir` path to point to your addon's scripts folder:

```json
{
  "compilerOptions": {
    "outDir": "E:/steam/steamapps/common/Counter-Strike Global Offensive/content/csgo_addons/cs2builder/scripts"
  }
}
```

### Step 6: Install Dependencies

Open a terminal/command prompt in the CS2 Script Builder folder and run:

```bash
npm install
```

_Note: This only needs to be done once during initial setup._

### Step 7: Create Your First Script

1. Navigate to the `src` folder
2. Create your first file, for example `main.ts`
3. Write your CS2 script code with full TypeScript support

Example `main.ts`:

```typescript
// Your CS2 script code here
import { Instance } from 'cs_script/point_script';

Instance.ServerCommand('say hello from JS!');
```

### Step 8: Start Development Server

Run `npm run dev` to start the file watcher. This will:

- Monitor your source files for changes
- Automatically rebuild the project when files are modified
- Generate a `bundle.vjs` file in your scripts folder

### Step 9: Configure CS2 Map

1. In your CS2 map editor, add a `point_script` entity
2. Set the script file to `bundle.vjs`
3. Configure any other necessary entity properties

### Step 10: Build and Test

1. Build your map
2. Test your scripts in-game
3. Make changes to your TypeScript files and they'll automatically rebuild

## Project Structure

```
CS2-Script-Builder/
├── src/                    # Your TypeScript source files
│   ├── types/             # Type definitions
│   └── main.ts            # Your main script file
├── builder/               # Build system files
├── tsconfig.json          # TypeScript configuration
├── package.json           # Project dependencies
├── start.bat             # Development server launcher
└── README.md             # This file
```

## Development Workflow

1. Write your code in the `src` folder using TypeScript
2. Import/export modules as needed across multiple files
3. The builder automatically combines everything into `bundle.vjs`
4. Test changes immediately in CS2

## Video Tutorial

For a visual walkthrough of the setup process, watch our tutorial:
[https://youtu.be/Un05KbKqGfU](https://youtu.be/Un05KbKqGfU)

## Wiki API

https://github.com/zephire1/CS2-Script-Builder/wiki/cs2-builder-library-API

## Features in Detail

### Module System

```typescript
// utils.ts
export function myUtility() {
  return 'Hello from utility!';
}

// main.ts
import { Instance } from 'cs_script/point_script';
import { myUtility } from './utils';

Instance.Msg(myUtility());
```

### TypeScript Support

- Full IntelliSense and autocomplete
- Type checking at compile time
- Modern ES6+ features
- Custom type definitions for CS2

### Auto-rebuild

- File watcher monitors source changes
- Instant rebuilding on save
- No manual build steps required

## Troubleshooting

**Build not working?**

- Ensure Node.js is properly installed
- Check that `npm install` completed successfully
- Verify the `outDir` path in `tsconfig.json` is correct

## Contributing

Feel free to submit issues and enhancement requests!
