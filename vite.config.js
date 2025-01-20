import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    server:{
     proxy:{
      "/api":{
        target:"https://hostel-frontend-c11s-git-main-arvinds-projects-ee9711f7.vercel.app/"
        // target:"https://hostal-utility-service.onrender.com"
       }
    }
    }
})
