# Prism Frontend

This project is powered by Vite + React.  
`prismrv`  *r* is `react`, *v* is `vite`.  

## Run the project  

Requirements:
* `node.js npm` [Node.js Package Manager]   

The Application is currently listening on port `5137`.   

```cmd  
git clone git@github.com:inorikiseki/prismrv 
cd prismrv  
npm install  
npm run dev  
```  

## Project Initialization  

Below are the record and notes of the construction of this project.  

### 1. IntelliJ IDEA  

*  Open `IDEA`    
*  New Project  
*  Select `Vite`   
*  Fill Project Name and Directory     
   Select `react` Template    
   Check `Use Typescript template`  

### 2. Dependencies

After initialization, you should get these dependencies by default.  

```json
{
   "dependencies": {
      "react": "^18.3.1",
      "react-dom": "^18.3.1"
   },
   "devDependencies": {
      "@types/react": "^18.3.3",
      "@types/react-dom": "^18.3.0",
      "@typescript-eslint/eslint-plugin": "^7.13.1",
      "@typescript-eslint/parser": "^7.13.1",
      "@vitejs/plugin-react": "^4.3.1",
      "eslint": "^8.57.0",
      "eslint-plugin-react-hooks": "^4.6.2",
      "eslint-plugin-react-refresh": "^0.4.7",
      "typescript": "^5.2.2",
      "vite": "^5.3.1"
   }
}
```

That's almost what we need for now except for `sass`. (Check links at [Resource](#resources))  
We need to install `sass` as `devDependency`. 

```cmd 
npm i -D sass
```

>  * `dependencies` is these you need when you publish your app while.  
>    `devDependencies` is these you need only at the development stage.    
> 
>  * To install dependencies you need to run `npm install <package1> (<package2>...)`.  
>    If you are using typescript, you may also need to install the typescript symbols with
>    `npm install @types/<name>`.
>   
>  * You can use the `i` to replace `install`. `npm i` = `npm install`.     
>  * To install dependencies as `devDependencies` you need to use `--save-dev` or `-D` flag.  
>  * For example, You may install the above by hand:  
>
>  ```cmd
>  npm init 
>  npm i react react-dom
>  npm i -D vite typescript eslint \ 
>        eslint-plugin-react-hooks \
>        eslint-plugin-react-refresh
>        @vitejs/plugin-react
>  ```
> > Use `npm init -y` to automatically answer yes to npm prompts. `-y` = `--yes`.  
> 
> Considering that we are using typescript, don't forget:   
>
> ```cmd
>  npm i -D @types/node @types/typescript \ 
>        @types/react @types/react-dom \
>        @types/typescritpt-eslint/eslint-plugin \
>        @types/tepescript-eslint/parser \
>  ```
>  That's a lot. However, you have a better choice with command line as well.   
> 
> ```cmd
>   npm create vite@latest frismrv -- --template react-ts
>   cd frismrv
>   npm install
> ```
>  
> > In **lower versions** of node.js you may need to use `-S` or `--save` 
> > to ensure the package you installed is registered in the `package.json` file.
> > Otherwise, these run `npm install` won't get your packages installed. 
> > However, you don't need this at new versions of `npm`.
>   
> The above is to install packages locally, which appear
> at the project folder `node_modules`. If you want to install
> a package globally, use `-g` flag instead of `-S` or `-D`.   
> 
> Check details on `npm` at [Node.js Package Manager].   
> 
> > **Pitfall**  
> > You may get into issues when you install a package globally, 
> so be careful to check out if the issue you came across is due 
> to a global installation. 

## Resources
Below are the **links** to the relevant documentations or tutorials to these
dependencies we introduce.    
If you have any problem, please check these out.   

* [Node.js Learn](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
* [React Learn](https://react.dev/learn)
* [React Dom Documentation](https://legacy.reactjs.org/docs/react-dom.html)
* [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)
* [Typescript Handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
* [Eslint Get Started](https://eslint.org/docs/latest/use/getting-started)
* [Vite Get Started](https://vitejs.dev/guide/)
* [Sass Learn](https://sass-lang.com/guide/)

[Node.js Package Manager]: https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager#packages
