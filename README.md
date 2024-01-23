# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Link
link is indirectly using anchor tag
it is a wrapper over anchor tag
browser understand anchor tag
link is not htm,js thing ,it is react thing
anchor refreshes whole page
 but link does not



### Class
older way of writing component

what is functional component || class component (earlier) 
it's a normal javascript function

### Episode 09-optimising our app


single responsibility principle-each componenet should have single responsobility
or break it into different component 
more reusable
more maintainable
more testable
if you have several single unit it will easy to catch bug

create custom hoook-so that fectching like thing can

hooks are nothing but special helper functiom
name of file should be same
start with use //react understand it is as hook


useEffect format

useEffect(()=>{},[])


chuncking or code splitting or dynamic bundling


lazy loading or ondemand loading
initial we do not load on demand w will load it

lazy -callback func- import

lazy(()=>import "different section")
on click it will form a new js file different from main section
we need  to wrap inside suspense otherwise error
<suspense fallback={like shimmer or pience of jsx meanwhile code is loading}><diffcompo></suspense>
eg:grocery section in flipkart
to reduce bundle loading


### episode 12
react and redux are two different libraries
redux is not mandatory
it is used where alot of data is being transferred
it is not mandatory
no only redux is used to state manage
it is primarily used for state management
it is easier to debug
it not only used with react
it can also be used iwth other frameworks
react-redux are poopular



extra
    //if you want something dynamic we have to use usestate
    //it will re rander thwe w hole header componenet
    //else in js if you use normal variable value will mus
    t be updated but it will not reflect in ui as it needs one refresh to see it

     //const onlineStatus=useOnlineStatus()
    //if(onlineStatus===false)return <h1>it seems that you are offline</h1>
    //you  need to return not to put in {}


    //if dependecy array is empty then it will be called on initial render
    //if dependecy arry is not there it will rendere every time

    //useparam is udes to get id after url
    //resid naming should be same as what yoh have entered in router
    //console.log(resId);

    // importing name itemcards will be same as api 
    //as @ not allowed so we can alos write it like this it will read same

    //problem in groupedCrAD Sometime it work sometime it not
        //it is updating by company we havwe to chack where it shiftyed the datas\
        //do not use brave
        //console.log(json);

        //sometimes extra content written in url you can trty to remove


// if you want something data to use various place
//use useContext inplace of passing props



//add button -> dispatches an acction -> calls reducer func -> which modifies slice of redux store

//store->selector ( subscribing to the store)->react component chsnge
//selector is nothing but  ahook
//it gives access to the store

//func(dubwe) calling the func rightaway
// ()=>func(dubwe) calling after callback func