## Tailwind CSS
1. Create your project
  ```
  npm create vite@latest tailwind-vite -- --template react
  cd tailwind-vite
  ```
2. Install Tailwindcss
  ```
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  ```
3. Configure the teplate paths
4. Add the Tailwid  directives to your CSS
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
5. Start the build process
  ```
  npm run dev
  ```
6. Start using Tailwind in your project
