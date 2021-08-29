## Randeelkv Application for Node Backend APIs

* By Default Node is Async ( does not wait for results)
* because of the Node is not good for CPU intensive apps ( video / image processing s

# Global Object

* in Browser variables / functions are considered as the part of global/window object but in node its not
* Node each project can refer to multiple files because of this the above mentioned global definition is not there
* Instead moduler concept is introduced, with that each file can produce private and public methods inside a modules
* each file is its own modules