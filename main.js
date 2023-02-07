
function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/QbKbOO2PQ/model.json",modelready);

}
function modelready(){
    classifier.classify(gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;
        document.getElementById("label").innerHTML="I can hear- "+results[0].label;
        document.getElementById("accuracy").innerHTML="Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("label").style.color="rgb("+r+","+g+","+b+")";
        img=document.getElementById("image");
        if(results[0].label=="barking"){
            img.src="dog-gif.gif";
        }
        else if(results[0].label=="meowing"){
            img.src="cat-gif.gif";
        }
        else if(results[0].label=="roaring"){
            img.src="lion-gif.gif";
        }
        else{
            img.src="ear-removebg-preview.png";
        }
    }
}