import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
     <div className='container mt-5 p-5'>
         <Card className="text-center">
          <Card.Body>
            <Card.Title>React Router Dom</Card.Title>
            <Card.Text style={{textAlign:"justify"}}>
            React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.The major advantage of react-router is that the page does not have to be refreshed when a link to another page is clicked, for example. Moreover, it is fast, very fast compared to traditional page navigation. This means that the user experience is better and the app has overall better performance.React Router Dom v6 has many useful components and to create fully functioning routing, you need most of these.Router(usually imported as BrowserRouter):  It is the parent component that is used to store all of the other components. Everything within this will be part of the routing functionalityRoutes: routes are used to define the navigation paths within a single-page application (SPA). Routes determine which components should be rendered based on the current URL or location of the application.Route: This component checks the current URL and displays the component associated with that exact path. All routes are placed within the Routes components.Link: Link component is used to create links to different routes.The Route component takes 2 parameters. The first one is the path that will be in the url and the second is the component that will be displayed if the current URL matches the path in the first parameter.
            </Card.Text>
            <Link className='btn btn-warning' variant="primary">Know More</Link>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Link className='btn btn-success' to={'/contact'}>Contact</Link>
            </Card.Footer>
        </Card>
     </div>
    </>
  )
}

export default About
