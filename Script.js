document.addEventListener('DOMContent Loaded', function(){
   
    function addToCart() {
        const course = this.parentElement;
        const title = 
        course.querySelector('h3').textContent;
        const cartItems = document.getElementById(cart-items);
        const li = document.createElement('li');
        li.textContent = title;
        cartItems.appendChild(li);
    }
    const addToCartButtons = document.querySelectorAll('.course button');
    addToCartButtons.foreach(button =>{
        button.addEventListener('click',addToCart);
    });
    function checkout() {
        const cartItems= document.getElementById('cart-items');
        const items = cartItems.querySelectorAll('li');
        if (items.length > 0){
            alert('Redirecting to checkout page...');
        }
        else{
            alert('Your cart is empty. Please add course before proceeding to checkout.');
        }
        }
    const checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', checkout);
    });