var screen = {
    clear: function(){
        // function to clear console
        process.stdout.write("\033c");
    },
    write: function(data, mode){
        var output = data;
        
        if(mode === "json"){
            output = JSON.stringify(data, null, 4);
        }
        console.log(new Date(),output);
    }
};

module.exports = screen;