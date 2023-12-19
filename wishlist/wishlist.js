import { header } from "../navbar/header.js";
let head = document.getElementById("header");

//Appdending header
head.innerHTML = header();



let products = [
    {
      "brandName": "CHANEL",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "CHANEL - GABRIELLE CHANEL ESSENCE Eau de Parfum",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 90,
        "salePrice": "",
        "skuId": "2238145",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s2238145-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s2238145-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s2238145-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s2238145-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s2238145-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s2238145-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s2238145-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "GABRIELLE CHANEL ESSENCE Eau de Parfum",
      "heroImage": "https://www.sephora.com/productimages/sku/s2238145-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s2238145-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s2238145-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s2238145-main-Lhero.jpg",
      "productId": "P449555",
      "rating": "4.5385",
      "reviews": "78",
      "targetUrl": "/product/gabrielle-chanel-essence-eau-de-parfum-P449555"
    },
    {
      "brandName": "CHANEL",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "CHANEL - CHANCE EAU TENDRE Eau de Toilette",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 72,
        "salePrice": "",
        "skuId": "1237379",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s1237379-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s1237379-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s1237379-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s1237379-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s1237379-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s1237379-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s1237379-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "CHANCE EAU TENDRE Eau de Toilette",
      "heroImage": "https://www.sephora.com/productimages/sku/s1237379-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s1237379-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s1237379-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s1237379-main-Lhero.jpg",
      "productId": "P258612",
      "rating": "4.7075",
      "reviews": "571",
      "targetUrl": "/product/chance-eau-tendre-P258612"
    },
    {
      "brandName": "CHANEL",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "CHANEL - CHANCE EAU FRAÎCHE Eau de Toilette",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 72,
        "salePrice": "",
        "skuId": "1001098",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s1001098-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s1001098-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s1001098-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s1001098-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s1001098-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s1001098-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s1001098-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "CHANCE EAU FRAÎCHE Eau de Toilette",
      "heroImage": "https://www.sephora.com/productimages/sku/s1001098-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s1001098-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s1001098-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s1001098-main-Lhero.jpg",
      "productId": "P257900",
      "rating": "4.6737",
      "reviews": "285",
      "targetUrl": "/product/chance-P257900"
    },
    {
      "brandName": "Sephora Favorites",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "Sephora Favorites - Deluxe Perfume Sampler Set",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": true,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": true,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": true,
        "listPrice": 75,
        "salePrice": "",
        "skuId": "2554947",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s2554947-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s2554947-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s2554947-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s2554947-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s2554947-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s2554947-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s2554947-main-Sgrid.jpg"
        },
        "skuType": "Standard",
        "valuePrice": "$130.00"
      },
      "displayName": "Deluxe Perfume Sampler Set",
      "heroImage": "https://www.sephora.com/productimages/sku/s2554947-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s2554947-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s2554947-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s2554947-main-Lhero.jpg",
      "productId": "P480349",
      "rating": "4.3846",
      "reviews": "13",
      "targetUrl": "/product/sephora-favorites-deluxe-perfume-sampler-set-P480349"
    },
    {
      "brandName": "HERMÈS",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "HERMÈS - Mini Replica Coffret Set",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": true,
        "listPrice": 55,
        "salePrice": "",
        "skuId": "2412120",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s2412120-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s2412120-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s2412120-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s2412120-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s2412120-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s2412120-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s2412120-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "Mini Replica Coffret Set",
      "heroImage": "https://www.sephora.com/productimages/sku/s2412120-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s2412120-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s2412120-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s2412120-main-Lhero.jpg",
      "productId": "P469475",
      "rating": "4.2857",
      "reviews": "14",
      "targetUrl": "/product/hermes-replica-coffret-set-P469475"
    },
    {
      "brandName": "CHANEL",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "CHANEL - BLEU DE CHANEL Eau de Toilette",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 90,
        "salePrice": "",
        "skuId": "1284710",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s1284710-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s1284710-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s1284710-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s1284710-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s1284710-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s1284710-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s1284710-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "BLEU DE CHANEL Eau de Toilette",
      "heroImage": "https://www.sephora.com/productimages/sku/s1284710-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s1284710-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s1284710-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s1284710-main-Lhero.jpg",
      "productId": "P270302",
      "rating": "4.7944",
      "reviews": "107",
      "targetUrl": "/product/bleu-de-chanel-P270302"
    },
    {
      "brandName": "CHANEL",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "CHANEL - COCO MADEMOISELLE Eau de Parfum",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 90,
        "salePrice": "",
        "skuId": "513168",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s513168-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s513168-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s513168-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s513168-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s513168-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s513168-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s513168-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "COCO MADEMOISELLE Eau de Parfum",
      "heroImage": "https://www.sephora.com/productimages/sku/s513168-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s513168-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s513168-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s513168-main-Lhero.jpg",
      "productId": "P12495",
      "rating": "4.6112",
      "reviews": "823",
      "targetUrl": "/product/coco-mademoiselle-P12495"
    },
    {
      "brandName": "Valentino",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "Valentino - Donna Born In Roma Eau de Parfum",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 32,
        "salePrice": "",
        "skuId": "2249688",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s2249688-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s2249688-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s2249688-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s2249688-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s2249688-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s2249688-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s2249688-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "Donna Born In Roma Eau de Parfum",
      "heroImage": "https://www.sephora.com/productimages/sku/s2249688-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s2249688-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s2249688-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s2249688-main-Lhero.jpg",
      "productId": "P449116",
      "rating": "4.6073",
      "reviews": "1011",
      "targetUrl": "/product/born-in-roma-P449116"
    },
    {
      "brandName": "Sol de Janeiro",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "Sol de Janeiro - Brazilian Crush Cheirosa ’62 Bum Bum Hair & Body Fragrance Mist",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 2,
        "salePrice": "",
        "skuId": "1930759",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s1930759-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s1930759-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s1930759-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s1930759-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s1930759-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s1930759-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s1930759-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "Brazilian Crush Cheirosa ’62 Bum Bum Hair & Body Fragrance Mist",
      "heroImage": "https://www.sephora.com/productimages/sku/s1930759-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s1930759-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s1930759-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s1930759-main-Lhero.jpg",
      "productId": "P417312",
      "rating": "4.2605",
      "reviews": "1332",
      "targetUrl": "/product/brazilian-crush-body-fragrance-mist-P417312"
    },
    {
      "brandName": "Yves Saint Laurent",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "Yves Saint Laurent - Black Opium Eau de Parfum",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 30,
        "salePrice": "",
        "skuId": "1688852",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s1688852-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s1688852-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s1688852-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s1688852-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s1688852-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s1688852-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s1688852-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "Black Opium Eau de Parfum",
      "heroImage": "https://www.sephora.com/productimages/sku/s1688852-main-grid.jpg",
      "heroImageAltText": "Allure Best of Beauty Seal",
      "image135": "https://www.sephora.com/productimages/sku/s1688852-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s1688852-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s1688852-main-Lhero.jpg",
      "productId": "P394534",
      "rating": "4.6415",
      "reviews": "6851",
      "targetUrl": "/product/black-opium-P394534"
    },
    {
      "brandName": "KILIAN Paris",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "KILIAN Paris - Love, Don't Be Shy",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 48,
        "salePrice": "",
        "skuId": "2320133",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s2320133-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s2320133-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s2320133-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s2320133-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s2320133-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s2320133-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s2320133-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "Love, Don't Be Shy",
      "heroImage": "https://www.sephora.com/productimages/sku/s2320133-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s2320133-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s2320133-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s2320133-main-Lhero.jpg",
      "productId": "P429621",
      "rating": "3.7053",
      "reviews": "974",
      "targetUrl": "/product/love-don-t-be-shy-P429621"
    },
    {
      "brandName": "Yves Saint Laurent",
      "currentSku": {
        "biExclusiveLevel": "none",
        "imageAltText": "Yves Saint Laurent - Libre Eau De Parfum",
        "isAppExclusive": false,
        "isBI": false,
        "isBest": false,
        "isFirstAccess": false,
        "isLimitedEdition": false,
        "isLimitedTimeOffer": false,
        "isNatural": false,
        "isNew": false,
        "isOnlineOnly": false,
        "isOrganic": false,
        "isSephoraExclusive": false,
        "listPrice": 30,
        "salePrice": "",
        "skuId": "2249738",
        "skuImages": {
          "image135": "https://www.sephora.com/productimages/sku/s2249738-main-grid.jpg",
          "image162": "https://www.sephora.com/productimages/sku/s2249738-162.jpg",
          "image250": "https://www.sephora.com/productimages/sku/s2249738-main-hero.jpg",
          "image42": "https://www.sephora.com/productimages/sku/s2249738-main-thumb.jpg",
          "image450": "https://www.sephora.com/productimages/sku/s2249738-main-Lhero.jpg",
          "image62": "https://www.sephora.com/productimages/sku/s2249738-main-Lthumb.jpg",
          "image97": "https://www.sephora.com/productimages/sku/s2249738-main-Sgrid.jpg"
        },
        "skuType": "Standard"
      },
      "displayName": "Libre Eau De Parfum",
      "heroImage": "https://www.sephora.com/productimages/sku/s2249738-main-grid.jpg",
      "image135": "https://www.sephora.com/productimages/sku/s2249738-main-grid.jpg",
      "image250": "https://www.sephora.com/productimages/sku/s2249738-main-hero.jpg",
      "image450": "https://www.sephora.com/productimages/sku/s2249738-main-Lhero.jpg",
      "productId": "P448102",
      "rating": "4.5168",
      "reviews": "3365",
      "targetUrl": "/product/libre-eau-de-parfum-P448102"
    }]

localStorage.setItem('wish', JSON.stringify(products));

//Catching data from localStorage;
let cartData = JSON.parse(localStorage.getItem("wish")) || [];

//catching container
let cartProducts = document.getElementById("cartItemsTable");
let Price;
const displayData = (data) => {
  cartProducts.innerHTML = "";
  data.map((el, index) => {
    console.log(data);
    let {
      brandName,
      displayName,
      image450,
      currentSku: { listPrice: price },
    } = el;

    let row = document.createElement("div");
    row.setAttribute("id", "row");

    // let col1 = document.createElement("d");

    let img = document.createElement("img");
    img.src = image450;
    img.setAttribute("class", "cartImage");

    // col1.append(img);

    let col2 = document.createElement("div");
    col2.setAttribute("id", "secondDiv");

    let innDiv = document.createElement("div");
    let Title = document.createElement("p");
    Title.innerText = displayName;
    Title.setAttribute("id", "cartTitle");
    Title.setAttribute("class", "cartHover");
    let desc = document.createElement("p");
    desc.innerText = brandName;
    desc.setAttribute("class", "cartHover");
    let itemCode = document.createElement("p");
    let code = Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000;
    itemCode.innerText = `ITEM ${code}`;
    itemCode.style.color = "#666666";
    itemCode.style.fontSize = "1.3vh";

    innDiv.append(Title, desc, itemCode);
    let div = document.createElement("div");
    div.setAttribute("id", "btnForCart");

    let btnLoves = document.createElement("button");
    btnLoves.innerText = `Move to Loves`;

    btnLoves.addEventListener("click", () => {
      let wishArr = JSON.parse(localStorage.getItem("wish")) || [];
      wishArr.push(el);
      localStorage.setItem("wish", JSON.stringify(wishArr));
    });

    //Added col two elements
    col2.append(innDiv, div);

    let col3 = document.createElement("div");
    col3.setAttribute("id", "thirdDiv");

    Price = document.createElement("p");

    Price.innerText = `$${price}`;
    console.log(price);

    col3.append(Price);

    let col4 = document.createElement("div");
    col4.setAttribute("id", "cartBtns");
    el.qty = 1;
    let addToCartBtn = document.createElement("button");
    addToCartBtn.innerText = "Add to Basket";

    addToCartBtn.addEventListener("click", () => {
      addToCart(el);
    });
    let iconHeart = document.createElement("span");
    iconHeart.setAttribute("id", "removeFromWish");
    iconHeart.innerHTML = `<svg
    viewBox="0 0 24 24"
    style="width: 2vw"
    id="wishlistIcon"
  >
  <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>
    >
  </svg>`;
    iconHeart.addEventListener("click", () => {
      getDelete(index);
    });
    col4.append(addToCartBtn, iconHeart);

    row.append(img, col2, col3, col4);

    cartProducts.append(row);
  });
};
displayData(cartData);
//Delete Func
const getDelete = (index) => {
  cartData.splice(index, 1);
  localStorage.setItem("wish", JSON.stringify(cartData));
  displayData(cartData);
};
//Adding item to cart
function addToCart(el) {
  console.log(el);
  alert("Product is successfully added to Basket");
  let cartData = JSON.parse(localStorage.getItem("cart")) || [];
  cartData.push(el);
  localStorage.setItem("cart", JSON.stringify(cartData));
}
