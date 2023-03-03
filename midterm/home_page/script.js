function switchWindImage() {
    var value = document.getElementById("windSlider").value;
    document.getElementById("windDisplay").innerHTML = '<img src="./resources/windVelPics/' + value + '.JPG"  width="1000" height="500" class="d-inline-block align-top" alt=""/>';
    document.getElementById("windDate").innerHTML = value + '/2022';
}