window.onload = function() {
    
    function* generator() {
    var tweets = yield $.getJSON("data/tweets.json");
    console.log(tweets);
    var friends = yield $.getJSON("data/fb-friends.json");
}

function genWrapper(generator) {
    var myGen = generator();
    function handle(yielded){
        if (!yielded.done){
        yielded.value.then(function(data){
            return handle(myGen.next(data));
        });
    }
}

handle(myGen.next());
}
};
