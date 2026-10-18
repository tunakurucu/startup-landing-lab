import {defineConfig} from '@playwright/test';
export default defineConfig({testDir:'./tests/browser',timeout:30000,use:{baseURL:'http://127.0.0.1:4173/startup-landing-lab/',headless:true},webServer:{command:'npx vite preview gallery --host 127.0.0.1 --port 4173 --base=/startup-landing-lab/',url:'http://127.0.0.1:4173/startup-landing-lab/',reuseExistingServer:!process.env.CI},reporter:'list'});
