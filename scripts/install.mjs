import { execSync } from 'child_process';

try {
  console.log('Running npm install to regenerate package-lock.json...');
  execSync('cd /vercel/share/v0-project && npm install --package-lock-only', { stdio: 'inherit' });
  console.log('Done! package-lock.json regenerated.');
} catch (error) {
  console.error('Error:', error.message);
}
