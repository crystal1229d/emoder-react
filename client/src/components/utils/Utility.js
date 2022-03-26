function formatPrice(price, option='') {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export { formatPrice }