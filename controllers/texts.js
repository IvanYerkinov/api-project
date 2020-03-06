const Text = require('../models/text');

module.exports = (app) => {
    app.post("/text/new", (req, res) => {
        var text = new Text(req.body);

        text.save();
        res.redirect('/')
    });

    app.get("/text/new/:string", (req, res) => {
        var input = req.params.string;
        var text = new Text();
        text.textbody = input;

        text.save()
        res.redirect('/text')
    });

    app.get("/text/:id", (req, res) => {
        Text.findById(req.params.id)
        .then(text => {
            res.json(text);
        })
        .catch(err => {
              console.log(err.message);
          });
    });

    app.get("/text", (req, res) => {
        Text.find({})
        .then(texts => {
            res.json(texts)
        }).catch(err => {
            console.log(err.message);
        });
    });

    app.get("/", (req, res) => {
        Text.find({})
        .then(texts => {
            res.render("home", {texts});
        }).catch(err => {
            console.log(err.message);
        });

    });

    app.get("/text/:id/delete", (req, res) => {
        Text.deleteOne({_id: req.params.id}, function(err) {
            if (err) return handleError(err);
        });
        res.redirect('/text')
    });

    app.get("/text/:id/update", (req, res) => {
        Text.findById(req.params.id)
        .then(text => {
            res.render("text-update", {text});
        })
        .catch(err => {
              console.log(err.message);
          });
    });

    app.get("/text/:id/update/:string", (req, res) => {
        Text.findById(req.params.id)
        .then(text => {
            input = req.params.string;
            text.textbody = input;
            text.save();
            res.redirect("/text");
        })
        .catch(err => {
              console.log(err.message);
          });
    });

    app.post("/text/:id/update", (req, res) => {
        Text.findById(req.params.id)
        .then(text => {
            text.textbody = req.body.updatetext;
            text.save();
            res.redirect('/');
        })
    });

};
