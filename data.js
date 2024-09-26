let products = [
  {
    name: 'iPhone 14',
    brand: 'Apple',
    price: 999,
    storage: '128GB',
    img: 'https://th.bing.com/th/id/OIP.QMoSvoCVbjLCjipQ2anUqwAAAA?w=398&h=639&rs=1&pid=ImgDetMain',
  },
  {
    name: 'Samsung Galaxy S22',
    brand: 'Samsung',
    price: 799,
    storage: '128GB',
    img: 'https://www.mobiledokan.com/media/1710779129UiX99.webp',
  },
  {
    name: 'Google Pixel 6',
    brand: 'Google',
    price: 599,
    storage: '128GB',
    img: 'https://th.bing.com/th/id/OIP.fhUu1o959Rep066xVkqFgQHaHa?w=600&h=600&rs=1&pid=ImgDetMain',
  },
  {
    name: 'OnePlus 10 Pro (Stock Out)',
    brand: 'OnePlus',
    price: 899,
    storage: '256GB',
    img: 'https://example.com/oneplus10pro.jpg',
  }, // Example image
  {
    name: 'Xiaomi Mi 11',
    brand: 'Xiaomi',
    price: 749,
    storage: '128GB',
    img: 'https://3g.co.uk/userfiles/reviews/62c8139ca07f1-xiaomi-mi-11-review.jpg',
  },
  {
    name: 'Sony Xperia 1',
    brand: 'Sony',
    price: 999,
    storage: '256GB',
    img: 'https://media.very.co.uk/i/very/VLKE8_SQ1_0000000004_BLACK_SLf?$pdp_1650x2199_hi_res$&fmt=webp',
  },
  {
    name: 'Huawei P40',
    brand: 'Huawei',
    price: 699,
    storage: '128GB',
    img: 'https://th.bing.com/th/id/OIP.QMoSvoCVbjLCjipQ2anUqwAAAA?w=398&h=639&rs=1&pid=ImgDetMain',
  },
  {
    name: 'Oppo Find X5',
    brand: 'Oppo',
    price: 999,
    storage: '256GB',
    img: 'https://media.very.co.uk/i/very/VLKE8_SQ1_0000000004_BLACK_SLf?$pdp_1650x2199_hi_res$&fmt=webp',
  },
  {
    name: 'Motorola Edge 20',
    brand: 'Motorola',
    price: 599,
    storage: '128GB',
    img: 'https://assets.mydeal.com.au/44487/motorola-g84-dual-sim-256gb-12gb-6-5-10817541_00.jpg?v=KcZp41720728014&imgclass=dealpageimage',
  },
  {
    name: 'Nokia G50',
    brand: 'Nokia',
    price: 299,
    storage: '64GB',
    img: 'https://assets.mydeal.com.au/44487/motorola-edge-50-fusion-5g-dual-sim-256gb-12gb-pre-order-11796705_00.jpg?v=SLbdg1720717732&imgclass=dealpageimage',
  },
];

let cardCount = 0;
let subTotal = 0;
function displayProducts() {
  for (let item of products) {
    const card = document.createElement('div');
    card.innerHTML = `
      <div class="card bg-base-100 w-96 shadow-xl  h-full">
    <figure class="px-10 pt-10">
      <img class="h-[300px]" src="${item.img}" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${item.name}</h2>
      <p>price: ${item.price} $</p>
      <div class="card-actions">
        <button onclick="addToCard('${item.name}', ${item.price})" class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
    `;
    document.getElementById('cards').append(card);
  }
}
function addToCard(name, price) {
  cardCount++;
  subTotal += price;
  console.log(subTotal);
  const cardCountContainer = document.getElementById('card-count');
  const cardTotalContainer = document.getElementById('card-total');
  const subTotalContainer = document.getElementById('sub-total');
  cardCountContainer.innerText = cardCount;
  cardTotalContainer.innerText = cardCount;
  subTotalContainer.innerText = subTotal;
}

displayProducts();
