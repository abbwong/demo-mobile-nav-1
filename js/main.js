const btn = document.querySelector('.toggle-btn'); 
/* how we select things -const is their variable, document,querysecletor will grab the element or a class we want */

btn.addEventListener('click', function(){
    document.querySelector('.main-menu').classList.toggle('open-nav');/*  doesnt take a period due to already epecting a class name*/
});

// A: The element to attach the event listener to (usually a button).
// B: The element in html that we will add and remove the class to.
// C: The name of the CSS class (in the css file) to toggle. No period (.)/* c is the open and closed class */
