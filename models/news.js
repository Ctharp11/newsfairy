var orm = require('../config/orm.js');


var news = {

    all: function(){
        orm.all();
    },

    post: function(){
        orm.post();
    }
}

module.exports = news;