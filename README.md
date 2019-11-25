# js-band-hw-task-4

**Ciklum University: JS Band Internship. Homework task 4**

The app allows to track information about delivery services by truck and by
ship. Also, there is an ability to keep a tab on information about delivery
cost. To add some peace of information, use forms in the header. User's data is
stored in local storage.

**Improvements:**

- Additional development tools are added (eslint, prettier, husky, jest).

**Scripts**

In the project directory, you can run:

```bash
npm start
```

Runs the app in the development mode. Open http://localhost:8080 to view it in
the browser.

```bash
npm run build
```

Builds the app for production to the build folder.

```bash
npm run lint
```

Runs Eslint commands from inside your repository.

```bash
npm run test
```

Runs Jest to start testing your project.

```bash
npm run commit
```

You'll be prompted to fill in any required fields and your commit messages will
be formatted according to the standards defined by project maintainers.

**Project Structure**

```bash
├── js
│   ├── classes
│   │   ├── __test__
│   │   |   └── Cost.test.js
│   │   ├── Cost.js
│   │   ├── Ship.js
│   │   ├── Truck.js
│   │   ├── Vehicle.js
│   │   └── VehicleFactory.js
│   ├── constants
│   │   └── collectionTypes.js
│   ├── services
│   │   ├── EventEmitter.js
│   │   └── LocalStorage.js
│   ├── Controller.js
│   ├── Model.js
│   └── View.js
├── sass
│   ├── base
│   │   └── normalize.scss
│   ├── components
│   │   ├── form
│   │   |   |── cancel-btn.scss
│   │   |   |── create-btn.scss
│   │   |   └── form.scss
│   │   ├── header
│   │   |   └── header.scss
│   │   ├── item
│   │   |   └── item.scss
│   │   └── main-content
│   │       └── main-content.scss
│   ├── common.scss
│   └── main.scss
├── index.html
└── index.js
```

Check the demo via link: https://romanbezpalyi.github.io/js-band-hw-task-4/dist/
