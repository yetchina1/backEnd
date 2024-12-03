{
  "name": "empl_manager_back_end",
  "version": "1.0.2",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 5"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/barosanuemailtest/EmplManagerBackEnd.git"
  },
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/barosanuemailtest/EmplManagerBackEnd/issues"
  },
  "homepage": "https://github.com/barosanuemailtest/EmplManagerBackEnd#readme",
  "dependencies": {
    "@types/node": "^13.7.2",
    "moment": "^3.24.0",
    "typescript": "^4.6.3",
    "ts-node": "^9.4.1"
  },
  "devDependencies": {
    "@types/node": "^12.7.12",
    "@typescript-eslint/eslint-plugin": "^2.3.3",
    "@typescript-eslint/parser": "^2.3.3",
    "eslint": "^6.5.1",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2"
  }
}export interface TopLevel {
 name:            string;
 version:         string;
 description:     string;
 main:            string;
 scripts:         Scripts;
 repository:      Repository;
 author:          string;
 license:         string;
 bugs:            Bugs;
 homepage:        string;
 dependencies:    Dependencies;
 devDependencies: DevDependencies;
}

export interface Bugs {
 url: string;
}

export interface Dependencies {
 "@types/node": string;
 moment:        string;
 typescript:    string;
 "ts-node":     string;
}

export interface DevDependencies {
 "@types/node":                      string;
 "@typescript-eslint/eslint-plugin": string;
 "@typescript-eslint/parser":        string;
 eslint:                             string;
 "eslint-config-airbnb-base":        string;
 "eslint-plugin-import":             string;
}

export interface Repository {
 type: string;
 url:  string;
}

export interface Scripts {
 test: string;
}
