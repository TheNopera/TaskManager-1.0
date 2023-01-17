

module.exports.getDate = function() {


    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return today.toLocaleDateString("pt-BR", options);


}