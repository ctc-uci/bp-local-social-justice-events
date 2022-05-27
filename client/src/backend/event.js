import Axios from 'axios';
import Config from './config.json';

/**
 * We use axios to create REST calls to our backend
 *
 * We have provided the login rest call for your
 * reference to build other rest calls with.
 *
 * This is an async function. Which means calling this function requires that
 * you "chain" it with a .then() function call.
 * <br>
 * What this means is when the function is called it will essentially do it "in
 * another thread" and when the action is done being executed it will do
 * whatever the logic in your ".then()" function you chained to it
 * @example
 * login(request)
 * .then(response => alert(JSON.stringify(response.data, null, 2)));
 */

async function getEvents() {
  const options = {
    method: 'GET', // Method type ("POST", "GET", "DELETE", ect)
    baseURL: Config.baseUrl, // Base URL (localhost:8080 for example)
    url: Config.event.get, // Path of URL ("/event")
    data: {}, // Data to send in Body (The RequestBody to send)
  };

  return Axios.request(options);
}

async function addEvent(addEventRequest) {
  const requestBody = {
    title: addEventRequest.title,
    datetime: addEventRequest.datetime,
    address: addEventRequest.address,
    url: addEventRequest.url,
    tag: addEventRequest.tag,
  };

  console.log(requestBody);

  const options = {
    method: 'POST', // Method type ("POST", "GET", "DELETE", ect)
    baseURL: Config.baseUrl, // Base URL (localhost:8080 for example)
    url: Config.event.add, // Path of URL ("/event")
    data: requestBody, // Data to send in Body (The RequestBody to send)
  };

  // console.log(options);

  return Axios.request(options);
}

export default {
  getEvents,
  addEvent,
};
