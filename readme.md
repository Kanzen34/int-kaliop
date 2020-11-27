# INTEGRATION KALIOP

Test d'intégration réalisé par Nicolas Fradin dans le cadre de l'embauche pour le poste d'intégrateur web chez KALIOP.

## Setup project
### Gulp 
Use gulp for js|scss|scg to minified and handle compatibility
1. Download and install the gulp archive at [kaliop github]https://github.com/kaliop/gulp-assets-builder . Follow all the steps.
2. Add new folders (scss|js|svg) in gulp-assets-builder-master/src/ in order to filtered the files. Modify the gulp-assets-builder-master/gulpfile.js in order to make the project work. 
3. Install dependencies, such as [Prettier]https://prettier.io/, [ESLint] https://eslint.org/...
    - `npm install eslint --save-dev`
    - `npm install --save-dev --save-exact prettier`
3. Rebuild `npm run build`. Watch `npm run watch`


### Git
Setup git

1. Initializing git. In the terminal type the the command: `git init` in the directory of the project
2. Link the project to a repository. In the terminal type the the command: `git remote add origin [repository-name]`. **repository-name = git@github.com:Kanzen34/int-kaliop.git**
3. Create a .gitignore file
4. Setup your name and email :
    - `git config --global user.email "you@example.com"`
    - `git config --global user.name "Your Name"`
5. Add files and create your first commit : `git add .`
6. Premier commit : `git commit -m "project initialisation"`
6. Push the commit : `git push origin master`