import concurrently from 'concurrently'

concurrently([
  {
    command: 'json-server --watch db.json --port 3001',
    name: 'json-server',
    prefixColor: 'cyan'
  },
  {
    command: 'npm run start',
    name: 'react-app',
    prefixColor: 'magenta',
    env: { PORT: '3000' }
  }
])
