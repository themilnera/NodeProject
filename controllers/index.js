const helloFunction = (req, res) => {
    res.send("Hello world");
};

const ttechFunction = (req, res) => {
    res.send("Ttech is awesome");
};

module.exports = { helloFunction, ttechFunction };