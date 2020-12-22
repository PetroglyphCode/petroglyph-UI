# Petroglyph UI Kit
A super-sweet starter UI kit for Petroglyph Creative websites, including our own.

## Installation
`npm install  --save-dev` does pretty much everything. There may be some dependencies that you must install separately.

## Configuration

With 2 whole config files here there are truly too many options to list here. 

### Pipe files to your web project 

Our favorite configuration to point out is the ability to pipe out production css/js/img files to their expressly determined spots in your web projects. Look for the 'docs' in the webpack config and change this to your system path to an assets directory and change the paths per-file-type in the individual webpack considerations.

## Use

#### `npm run dev`
This command will launch a dev server on your local IP address that does not output code, but allows you to see code changes in real time.

#### `npm run build`
This command builds your project code into the /docs/ directory and does not deploy a server.

#### `npm run prod`
This command builds your project code into the /docs/ directory in production mode and does not deploy a server.

### About this repo
This is a basic code starter kit that makes use of basic [Tailwind CSS](https://tailwindcss.com) and [Webpack](webpack.js.org). It is a compilation of innumerable web reference pages, outdated tutorials, Google searches, and a UI Kit built for us by Block 81.

Our UI Repo is offered as-is and without warranty or guarantee of support (though we will help if we can.) Please tell us or include credit if something you do with this code goes public.
