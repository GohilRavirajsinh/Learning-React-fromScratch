# What is new in **Project**

## Onclick(() => ) with callback
```javascript

<button
  onClick={() => setColor("pink")}
  className="outline-none px-4 py-1 rounded text-black shadow-lg" style={{ backgroundColor: "pink" }}>pink</button>

```

## setPassword(prev => {}) previous value using exact previous value many times we can use.
```javascript 

<button
  onClick={() => {
    const colors = ["red", "blue", "green", "yellow"]; // add as many colors as you like
    setPassword(prev => {
      const currentIndex = colors.indexOf(prev);
      return colors[(currentIndex + 1) % colors.length];
    });
}}

// Example
// setNumberAllowed((prev) => !prev) // Reverse the previous value of setNumberAllowed, so yha True or False flip hota rahega 

```