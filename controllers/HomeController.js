class HomeController{

    async index(req, res){
        res.send("Naylson Costa");
    }

}

module.exports = new HomeController();