const helloFunction = (req, res) => {
    res.send("Hello world");
};

const ttechFunction = (req, res) => {
    res.send("Ttech is awesome");
};

const newFunction = (req, res) => {
    res.send(`<h1>I am sleepy</h1>`);
};

module.exports = { helloFunction, ttechFunction, newFunction };