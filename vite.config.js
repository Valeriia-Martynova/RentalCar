import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/RentalCar/",
  plugins: [react()],
  build: {
    sourcemap: true,
  },
});
