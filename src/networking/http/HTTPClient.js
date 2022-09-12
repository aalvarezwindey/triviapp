/**
 * HTTP Client abstraction ir order to no depend on specefic implementation (fetch, axios, etc)
 */
class HTTPClient {
  get(url) {
    return fetch(url);
  }

  /** NOTE: implement more HTTP client methods such post, put, delete, etc. */
}

export default HTTPClient;
