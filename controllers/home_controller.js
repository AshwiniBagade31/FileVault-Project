// home_controller.js

// Controller for rendering the home page.
module.exports.home = (req, res) => {
    return res.render('home', {
        title: "NodeDrop | Home Page"
    });
}