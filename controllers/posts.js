module.exports = function (cb) {
    setTimeout(function() {
        cb(null, [
            {
                title: "Hello World!"
              , content: "Hello World content."
            }
          , {
                title: "Hello World again!"
              , content: "Hello World again content."
            }
        ]);
    }, 10);
};
