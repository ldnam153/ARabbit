
import data from '../data/data';

module.exports={
    getProduct(id) {
        for (let i = 0; i < data.product.length; i++) {
          if(data.product[i].id === id)
            return data.product[i];
        }
    },
    getSaleProducts(){
        var list_discount=[];
        for (let i=0;i<data.discount.length;i++){
            list_discount.push(this.getProduct(data.discount[i]));
        }
        return list_discount;
    },
    getRecommendProducts(){
        var list_discount=[];
        for (let i=0;i<data.sugggest.length;i++){
            list_discount.push(this.getProduct(data.sugggest[i]));
        }
        return list_discount;
    },
    getBestSellerProducts(){
        var list_discount=[];
        for (let i=0;i<data.best_saler.length;i++){
            list_discount.push(this.getProduct(data.best_saler[i]));
        }
        return list_discount;
    },
    getNewestProducts(){
        var list_discount=[];
        for (let i=0;i<data.newest.length;i++){
            list_discount.push(this.getProduct(data.newest[i]));
        }
        return list_discount;
    }
}