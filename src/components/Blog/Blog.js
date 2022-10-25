import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <h2 className='blog-header'>Welcome to Blog</h2>
            <div className='blog-ques'>
                <h3>what is cors?</h3>
                <p><strong>Answer: </strong>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.
                    An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.</p>
            </div>
            <div className='blog-ques'>
                <h3>Why are you using firebase?</h3>
                <p><strong>Answer: </strong>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</p>
            </div>
            <div className='blog-ques'>
                <h3>What other options do you have to implement authentication?</h3>
                <p><strong>Answer: </strong>Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            </div>
            <div className='blog-ques'>
                <h3>How does the private route work?</h3>
                <p><strong>Answer: </strong>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            </div>
            <div className='blog-ques'>
                <h3>What is Node?</h3>
                <p><strong>Answer: </strong>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following "hello world" example, many connections can be handled concurrently. Upon each connection, the callback is fired, but if there is no work to be done, Node.js will sleep.</p>
            </div>
            <div className='blog-ques'>
                <h3>How does Node work?</h3>
                <p><strong>Answer: </strong>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>
        </div>
    );
};

export default Blog;