/* JavaScript DOM Exercises 01 */

const paragraph = document.querySelector('p');
//paragraph.innerText = 'mama';
/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long 
  in the paragraph text (with a yellow background 
  for example)
*/

 paragraph.innerHTML = paragraph.innerHTML.split(' ').map((word) => {
  if (word.length > 8) {
    return `<span style="background-color: yellow;">${word}</span>`;
  }
  return word;
}).join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after 
  the paragraph tag.
  (http://officeipsum.com/)
*/
const link = document.createElement('a');
link.innerText = 'http://officeipsum.com/';
link.setAttribute('href','/');
document.querySelector('p').after(link);
/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line 
  in the paragraph text.
  A sentence can be assumed to be a string of 
  text terminated with a period (.)
*/
paragraph.innerHTML = paragraph.innerHTML.split('.').map((sentence) => {
    return `<br/>${sentence}`;
}).join(".");
/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag 
  and display the count afer the heading.
  You can assume that all words are separated by 
  one singular whitespace.
*/
let counter = 0;
paragraph.innerHTML = paragraph.innerHTML.split(' ').map((word) => {
  if (word.length > 1) {
    counter++;
    return word;
  }
  return word;
}).join(" ");
const count = document.createElement('h3');
count.innerText = `Total words in p: ${counter}`;
document.querySelector('h1').after(count);
/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking 
  faces (🤔) and exclamation marks (!) with 
  astonished faces (😲) 
*/
paragraph.innerHTML = document.querySelector('p').innerHTML.replaceAll('?','🤔');
paragraph.innerHTML = document.querySelector('p').innerHTML.replaceAll('!','😲');
