export const isShipping = (state) => {
    return state.adverts.filter(advert => advert.shipping === 1)
}