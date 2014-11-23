var tools = {
  titleize: function(input){
    // manipulate the input the match the required behaviour

    var a = input.split(/_| |\b/);
    for(var i=0,l=a.length; i<l; i++) {
        a[i] = a[i].substr(0,1).toUpperCase() + 
                 (a[i].length > 1 ? a[i].substr(1).toLowerCase() : "");
    }
    return a.join(" ");

    //input.split(" ").map(function(v) { return "1" + v }).join(" ");
  }
};

module.exports = tools;