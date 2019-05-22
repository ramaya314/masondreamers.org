
# Mason DREAMers website.

This is the source code for https://www.masondreamers.org. For security reasons, all configuration information and keys have been removed, and thus this site will not run without them.

To install all needed dependencies and the project:
```bash
git clone https://github.com/ramaya314/MasonDreamers.git
cd MasonDreamers
npm install
```

To run the client site locally (this will only run the React client. To have also access to the server API you must also start the server locally):
```bash
npm start
open http://localhost:3000
```

To run the server locally:
```bash
npm run start:prod:server
open http://localhost:4000
```

To build and run both the client and the server:
```bash
npm run build:client:server:start
open http://localhost:4000
```
