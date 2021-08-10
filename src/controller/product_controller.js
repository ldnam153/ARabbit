
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
    },
    getDressProducts(){
        var list_discount=[];
        for (let i=0;i<data.dress_products.length;i++){
            list_discount.push(this.getProduct(data.dress_products[i]));
        }
        return list_discount;
    },
    getNearKeywords(){
        return data.gan_day;
    },
    getHotKeywords(){
        return data.noi_bat;
    },
    getCameraItemFiding(){
        var list_discount=[];
        for (let i=0;i<data.findWithCamera.length;i++){
            list_discount.push(this.getProduct(data.findWithCamera[i]));
        }
        return list_discount;
    }
    ,
    getCatList(){
        var productsID = data.cart;

        
        var products = [];
        for(var i = 0; i < productsID.length; i++){
            var p = this.getProduct(productsID[i])
            p.isSelected = true,
            p.property = p.properties[0]
            p.number = 1
            products.push(p);
        }
        var shops = []
        var temp = ""
        var shop = []
        for(var i = 0; i < products.length; i++){
            if (temp != products[i].shop){
              shop = []
            temp = products[i].shop
              shop.push(products[i])
            var s = {}
            s.products = shop
            shops.push(s)
          }
          else {
              shop.push(products[i])
          }
        }
        for (var i = 0; i < shops.length; i++){
            shops[i].id = "6242" + i.toString()
            shops[i].time = ""
            shops[i].isSelected = true;
            shops[i].shop = shops[i].products[0].shop
            shops[i].shopId = shops[i].products[0].shopID
        }

        return shops;
    }
}