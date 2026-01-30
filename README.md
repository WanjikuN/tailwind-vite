## Tailwind CSS
1. Create your project
  ```
  npm create vite@latest tailwind-vite -- --template react
  cd tailwind-vite
  ```
2. Install Tailwindcss with Vite
  ```
 Install Tailwind CSS- npm install tailwindcss @tailwindcss/vite
  ```
3.Configure the Vite plugin
  ```
//vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
 plugins: [
 tailwindcss(),
 ],
})

  ```
4. Add the Tailwid  directives to your CSS
  ```
  @import "tailwindcss";
  ```
5. Start the build process
  ```
  npm run dev
  ```
6. Start using Tailwind in your project
