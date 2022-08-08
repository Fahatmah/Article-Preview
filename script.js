var toggleShare = document.querySelector('.toggled__share__options');
var shareButton = document.querySelector('.share__button');
var profile = document.querySelector('.profile');

shareButton.addEventListener('click', function () {
	profile.classList.toggle('hide');
  toggleShare.classList.toggle('show');
  shareButton.classList.toggle('translateY')
});
