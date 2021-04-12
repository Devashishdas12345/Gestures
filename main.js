var camera = document.getElementById("camera");
Webcam.attach(camera);

Webcam.set({
    width: 350,
    height: 250,
    image_format: "png",
    png_quality: 1000000
});

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id= "captured_image" src= "' + data_uri + '">';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/S1Xk_iy60/model.json' , modelLoaded);

function modelLoaded() {
    console.log("Model loaded!!!");
}

function check() {
    var img = document.getElementById("captured_image");
    classifier.classify(img , gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.error("Error🚷🚷🚷");
        console.log("Error🚷🚷🚷");
        window.alert("Error🚷🚷🚷")
    }
    
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        if (results[0] == "Amazing") {
            document.getElementById("update_emoji").innerHTML = "F";
        }

        else if (results[0] == "Best") {
            document.getElementById("update_emoji").innerHTML = "F";
        }

        if (results[0] == "Victory") {
            document.getElementById("update_emoji").innerHTML = "F";
        }
    }
}