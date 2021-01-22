# React_OCR_frontend

This repo is set to be the front end for the overall OCR project.  It will allow the user to upload a pdf which will then be OCR'd by components in the Django back end.  This front end inially was to be a simple upload form.  The front end now includes a revised design, login/logout functionality which limits who can upload and see posts.  

## Works in progress
 - The first page of a given pdf ought to be viewed as a thumbnail when a user logs in to see their (and only their) respective posts.  
 - Upon clicking the thumbnail, the user ought to be taken to the a page showing that particular pdf.  Eventually, there will be ways to delete the post as well as edit the title and description of the post.  Future plans include the ability to rotate and otherwise alter the particular pdf.
 - When logged in, the user should see their particular pdfs along with a noticable "Upload" field where they can either drag & drop pdfs or upload via an "Upload" button. Right now this functionality is on an alternate /admin/ page where it need not belong.

## Follow the Tutorial

I've set up a tutorial on creating both the front and back end on [Medium](https://medium.com/@josephvcardenas/pdf-ocr-via-react-django-rest-framework-and-heroku-part-1-set-up-and-starting-on-the-back-end-7932626dc040).  The tutorial will expand to match expanded features of the application itself.  

## Using the Web App
The front end of the web application is [hosted](https://ocr-app-frontend.herokuapp.com/) on Heroku.  The list of files is tied to the [Django REST Framework](https://www.django-rest-framework.org/) back end, which itself is sending our uploaded files to an Amazon S3 bucket.

### Uploading a file
The front end uses a simple upload form and asks for a simple title and description.  

### Viewing uploaded files
The file you upload is OCR'd via the back end, with the resulting file being stored in an S3 bucket. The Django back end keeps a list of each file and its corresponding title and description, with this list being mirrored on the front end.  The latter allows the user to see and download what they've uploaded.  **Future updates** to the front end will allow for greater functionality, such as grid views, visual previews of PDFs, as well as selection and editing of PDFs.

## Using the App Locally
Clone this repo in order to upload files. You will also need to clone the back end repo (see below). 

### Prepare the Front End
Make sure `UploadForm.js` points to `localhost:8000` rather than the Heroku-hosted backend (this is only if we want to keep both front and back ends local). Do the same with `FileList.js`.  

### Prepare the Back End
Clone the [back end repo](https://github.com/JosephVC/Django_OCR_backend). Ensure your `ALLOWED_HOSTS` settings allow `localhost` in addition to `.herokuapp.com`.  Also make sure to set `DEBUG` to `True` as you are not running the app in production. 

### Start Up the Front End
Run `npm start` from within the front end repo that was just cloned. If you followed the above directions, your front end should be pointing to the local back end server rather than the deployed version. 

### Start Up the Back End
You'll need to make sure all the requirements for the project are installed in your own virtual environment.  In the back end folder, look through the Type `python manage.py runserver` within the back end repo to start the back end server.  If you followed the above directions, your back end server should be free to talk to the front end.

---

# React Boilerplate

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
