const profileInfoButton = document.querySelector('.profile__info-button');
const profileButton = document.querySelector('.invitation__button');
const profileTitle = document.querySelector('.profile__info-title');
const profileSubtitle = document.querySelector('.profile__info-subtitle');
const popup = document.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
const closeButton = popup.querySelector('.popup__close');
const formElement = document.querySelector('.form');
const nameInput = document.querySelector('#input-name');
const jobInput = document.querySelector('#input-job');
const cards = document.querySelector('.cards');
const popupPlaces = document.querySelector('.popup-places');
const closePlacesButton = popupPlaces.querySelector('.popup__close');
const popupNewPlaces = popupPlaces.querySelector('.popup__new-places');
const popupProfile = document.querySelector('.popup-profile');
const formAdd = document.querySelector('#form-add');
const buttonElement = formAdd.querySelector('.form__submit');


// Открытие попап 
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupOnEsc);
  popup.addEventListener('click', closePopupOnOverlay);
};


// Закрытие попапов
function closePopup(popup) {

  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupOnEsc);
  popup.removeEventListener('click', closePopupOnOverlay);
}

// закрытие попап кликом на оверлей
function closePopupOnOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}
  
// закрытие попап нажатием на esc
function closePopupOnEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// функция очистки формы карточки
function resetFormAdd(formAdd) {
  formAdd.reset();
}

// Открытие и закрытие попапа с добавлением карточки
profileButton.addEventListener('click', () => openPopupPlaces());
closePlacesButton.addEventListener('click', () => closePopup(popupPlaces));


// редактирование профиля
const submitEditProfileForm = evt => {
    evt.preventDefault();
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;
    closePopup(popupProfile);
}
formElement.addEventListener('submit', submitEditProfileForm);
