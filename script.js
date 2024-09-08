let profilePic = document.getElementByid('profile-pic');
let inputFile = document.getElementByid('input-file');

inputFile.onchange = function(){
	profilePic.src = URL.createObjectURL(inputFile[]);
}