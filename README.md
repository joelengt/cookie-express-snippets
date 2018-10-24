# cookie-express-snippets
cookies npm libraries to get, set cookie 



```js
  Cookie.set('name', 'joel', { expires: 7, path: '/' })
	Cookies.set('neko','my name');
	Cookies.set('usagi','my name', { expires: 5 });
```


```js
 Cookies.get('neko');
```
		
```js
 Cookies.delete('neko');
```	
		
```js
var obj = {
  name: 'joel',
  lastname: 'gonzales'
}

var valueJSON = JSON.stringify(obj)
Cookies.set('human', valueJSON, { expires: 5, path: '/' })
Cookies.set('human_data', valueJSON)
var parseJSON = Cookies.get('human')
var valueParsed = JSON.parse(parseJSON)
```
