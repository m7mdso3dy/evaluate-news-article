
// TODO: include your scss file here
import handleSubmit from './js/handleSubmit';
import './styles/style.scss';
// TODO: get the button for submit
const btn = document.querySelector('.btn-submit');
// TODO: add event listener to it when the click to call handleSubmit function
btn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = document.querySelector('#article-url').value;
    handleSubmit(url);
})
/**
 * TODO: Get Value of the input for URL
 *  TODO: Check if it's URL or not
 *      yes
 *          send it to the backend
 *      no
 *          show user message it's not valid URL
 */
