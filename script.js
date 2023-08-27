/* Новые элементы должны добавляться в список по нажатию на Enter */

const sendInput = document.querySelector('#input');
const groceries = document.querySelector('.groceries');


sendInput.addEventListener('keydown',function(event){
    if (event.key == 'Enter') {
    const messagesPurchase = sendInput.value;
    
    const firstPurchase = document.createElement('div');
    
    firstPurchase.classList.add('shopping');

    firstPurchase.addEventListener('click', function(){
    firstPurchase.classList.toggle('done');
    })
    
    firstPurchase.textContent = messagesPurchase; 


    if (messagesPurchase != '') {
        groceries.append(firstPurchase);
    }

    sendInput.value = '';

    }
     
})









/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
