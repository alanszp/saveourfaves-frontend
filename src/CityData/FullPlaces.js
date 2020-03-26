import { flatMap } from "lodash";

const FullPlaces = {
  caba_restaurant: [
    {
      name: "Anchor Oyster Bar",
      address: "579 Castro Street, San Francisco",
      giftCardURL: null,
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.anchoroysterbar.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipNOZlNBgKJZ9CYfAj___0CBCUDnopnAYMBIhGo0=s1600-w800",
      placeID: "ChIJwRgt0Bp-j4ARfsBKlfJ4v1M",
      area: "caba"
    },
    {
      name: "Spike's Coffees and Teas",
      address: "4117 19th St, San Francisco",
      giftCardURL: "http://squareup.com/gift/21H32F1CCWE21/order",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.spikescoffee.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipNqnTZA_JaaPFEvIG8nxq6kwWjbc9rmqcWyHvee=s1600-w800",
      placeID: "ChIJIwGPyxp-j4ARaAv8glHW8q4",
      area: "caba"
    },
    {
      name: "Neighbor's Corner",
      address: "499 Douglass St, San Francisco",
      giftCardURL:
        "https://squareup.com/gift/W4ZCV0CVPE8XV/order?external_source=postoffice-egift-widget&external_token=6U4aMpcgWNVol8OA",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.neighborscornercaba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOcJnjMJuxwHCzjfxPu51_vIL3Y7gdPE5YUNhig=s1600-w800",
      placeID: "ChIJNeQAcw9-j4ARP9-nCnYB30o",
      area: "caba"
    },
    {
      name: "Posh Bagel",
      address: "495 Castro St, San Francisco",
      giftCardURL: "https://www.toasttab.com/posh-bagel-almaden/giftcards",
      takeoutURL: null,
      donationURL: null,
      placeURL: null,
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipP0Pj_D1uBcrSGlXkEXnKupIqO3LwNvbDHNCif3=s1600-w800",
      placeID: "ChIJDS7bNht-j4ARWF96paUlbcE",
      area: "caba"
    },
    {
      name: "Hot Cookie",
      address: "407 Castro Street #2019, San Francisco",
      giftCardURL: "https://hotcookie.com/product/gift-card/",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.hotcookie.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOzIN8qIvLShPBwgc4cwPXqIYs-TdoGL7-qu9UM=s1600-w800",
      placeID: "ChIJnRGRVht-j4AR8meAbWNMBFw",
      area: "caba"
    },
    {
      name: "R\u00e9veille Coffee Co.",
      address: "4076 18th St, San Francisco",
      giftCardURL: "https://squareup.com/gift/5JHHN9M7FQJ9P/order",
      takeoutURL: null,
      donationURL: "https://www.gofundme.com/f/barista-and-kitchen-relief-fund",
      placeURL: "http://www.reveillecoffee.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipPiqk97Yrfz0hjS1Rgv7DtyjrjpcQh1dCeemlfs=s1600-w800",
      placeID: "ChIJ6VMNOxt-j4ARQvNJc_JGJOw",
      area: "caba"
    },
    {
      name: "Cafe de Casa",
      address: "3985 17th Street, San Francisco",
      giftCardURL: "https://squareup.com/gift/73ZGHZ612VER0/order",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.cafedecasa.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipP5-cqdOv-kGr_3gAPqjoOYmU9_lAgKGOV4ETeZ=s1600-w800",
      placeID: "ChIJPWoYgzd_j4AR7PrwT99dxNc",
      area: "caba"
    },
    {
      name: "Project Juice",
      address: "506 Castro St #2512, San Francisco",
      giftCardURL: "https://www.toasttab.com/pjchestnut/giftcards",
      takeoutURL: null,
      donationURL: null,
      placeURL: null,
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipN3FmX0stSgewRguag-mVBqy7oNf8T3me5FtXmA=s1600-w800",
      placeID: "ChIJJUOBMht-j4ARtlxlRUb9c4o",
      area: "caba"
    },
    {
      name: "Philz Coffee",
      address: "549 Castro St, San Francisco",
      giftCardURL: "https://www.philzcoffee.com/gift-card-store",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.philzcoffee.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOmFIi4FR6FILgGAVvbO9cBGD3S1aUPKAOhjdN0=s1600-w800",
      placeID: "ChIJcfQ5MRp-j4ARn3eA9EH16OA",
      area: "caba"
    },
    {
      name: "Kin Khao",
      address: "55 Cyril Magnin St, San Francisco",
      giftCardURL: "https://www.narisf.com/",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.kinkhao.com/",
      emailContact: "info@kinkhao.com",
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipMXFkPBu0tM0cyCWAvg1gSqXcFZxrDgFRcJPTWx=s1600-w800",
      placeID: "ChIJn_ZxYo-AhYAR22wJt4at2K0",
      area: "sf"
    },
    {
      name: "Black Cat",
      address: "400 Eddy Street, San Francisco",
      giftCardURL:
        "https://blackcatsf.cardfoundry.com/giftcards.php?action=store",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.blackcatsf.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOOFa-NpeiP2mM6lzaVGs4kcujAsP4KqSrdfMF-=s1600-w800",
      placeID: "ChIJdevbbZCAhYAReFUMOY282-Y",
      area: "sf"
    },
    {
      name: "Taqueria Castillo",
      address: "86 McAllister St, San Francisco",
      giftCardURL:
        "https://www.toasttab.com/castillos-mexican-restaurant/giftcards",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://taqueria-castillo.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipMTZFA7n6WLCBi5jhMmUKSvYHQ0ABUfpho7wjOE=s1600-w800",
      placeID: "ChIJCSgQKJuAhYARwTm9xvMuxz4",
      area: "sf"
    },
    {
      name: "Chambers",
      address: "601 Eddy Street, San Francisco",
      giftCardURL: "https://squareup.com/gift/7XXX69R2CFW7X/order",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://chambers-sf.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipP9kA3JCvB3Z5411FkOAIA176PpIeGI_dmQklra=s1600-w800",
      placeID: "ChIJ70zQuZCAhYARBOYFsIfxD6U",
      area: "sf"
    },
    {
      name: "Popsons Burgers",
      address: "998 Market St, San Francisco",
      giftCardURL: "https://www.toasttab.com/popsons-burgers/giftcards",
      takeoutURL: null,
      donationURL: null,
      placeURL: null,
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipNKM-cl0xxB7Y4vg9i-Kl0aZoDfGZtF2gUhHKbk=s1600-w800",
      placeID: "ChIJYbpOD4WAhYARbOASyN_S8EU",
      area: "sf"
    },
    {
      name: "Equator Coffees",
      address: "986 Market St, San Francisco",
      giftCardURL: "https://www.equatorcoffees.com/collections/gift-cards",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.equatorcoffees.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipN66tvugfGEDqlG5IZB2XkLRuF7b_Z1B40Bp_2p=s1600-w800",
      placeID: "ChIJda9ACIWAhYARt2zvIdz9I-4",
      area: "sf"
    },
    {
      name: "Philz Coffee",
      address: "399 Golden Gate Ave, San Francisco",
      giftCardURL: "https://www.philzcoffee.com/gift-card-store",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.philzcoffee.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOeBUegfQooR-PL5E4Mmw71DbqAMK2DxkYlWjWv=s1600-w800",
      placeID: "ChIJH7w1a5qAhYARSHYy_wjbPr4",
      area: "sf"
    },
    {
      name: "The Flying Falafel",
      address: "1051 Market St, San Francisco",
      giftCardURL: "https://www.toasttab.com/ff-soma-market-st/giftcards",
      takeoutURL: null,
      donationURL: null,
      placeURL: "https://www.flyingfalafel.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipNfMK3gEcupnWG-fX-_qezaklgViRCEojiQMsi2=s1600-w800",
      placeID: "ChIJUURg6ISAhYARUlHS_WYfyGk",
      area: "sf"
    },
    {
      name: "Farm : Table",
      address: "754 Post St, San Francisco",
      giftCardURL: "https://squareup.com/gift/8Q5Q0AAWTK67H/order",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.farmtablesf.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipPSakN0WW_FgZILzKR4FTIcR1_vMXCyC9xXiboz=s1600-w800",
      placeID: "ChIJWyb_ipGAhYARbaiIO1cGIrw",
      area: "sf"
    }
  ],
  gba_restaurant: [
    {
      name: "Namu Stonepot",
      address: "553 Divisadero St, San Francisco",
      giftCardURL: "https://squareup.com/gift/KVDA3SNGXTKB5/order",
      takeoutURL: null,
      donationURL:
        "https://www.gofundme.com/f/namu-family-of-restaurants-relief-fund",
      placeURL: "http://namustonepot.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipMr3oO3toG2u124om5uZLVC3dT0XqBK33gCxmkH=s1600-w800",
      placeID: "ChIJq6uMta-AhYAR3Xxh-IGkHds",
      area: "caba"
    },
    {
      name: "Lady Falcon Coffee Club",
      address: "San Francisco",
      giftCardURL: "https://www.ladyfalconcoffeeclub.com/shop/gift-card",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.ladyfalconcoffeeclub.com/",
      emailContact: "info@ladyfalconcoffeeclub.com",
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipMbhSZUVAd_onr42UBm39uHJ691PpgOAHS-7hGx=s1600-w800",
      placeID: "ChIJ32gSP6WAhYARLQR3Y9d9a-0",
      area: "caba"
    },
    {
      name: "The Mill",
      address: "736 Divisadero St, San Francisco",
      giftCardURL:
        "https://www.fourbarrelcoffee.com/collections/gift-cards/products/in-store-gift-card",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.themillcaba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipN-os2Jzuq1zFSByBODK2EdbLBsls18Hd-izTPc=s1600-w800",
      placeID: "ChIJVzS3LbCAhYAR6Dw2KqlhWhg",
      area: "caba"
    },
    {
      name: "Emporium caba - Arcade Bar Venue",
      address: "616 Divisadero Street, San Francisco",
      giftCardURL: "https://emporiumcaba.com/gift-cards/",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.emporiumcaba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOfYgNJ_vDJyv8Ctox7hFgEQ3G-15vbd-vcvCcl=s1600-w800",
      placeID: "ChIJaSBxxa-AhYARBotIvZ6iIbE",
      area: "caba"
    },
    {
      name: "Nopa",
      address: "560 Divisadero St, San Francisco",
      giftCardURL: "https://www.giftrocker.com/secure/Order/?hash=d8dc8535",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.nopacaba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipPh1oyZvM-fY87-mWb74464RBQj-p6vwYcBXl4P=s1600-w800",
      placeID: "ChIJ_dQjyK-AhYARBc9DFlxcclg",
      area: "caba"
    },
    {
      name: "Eddie's Cafe",
      address: "800 Divisadero St, San Francisco",
      giftCardURL:
        "https://giftup.app/place-order/e24a1886-348e-4134-98e3-5044d9b763e1?platform=Hosted",
      takeoutURL: null,
      donationURL: null,
      placeURL: null,
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipPAAP31qq9VPNe3yDf2aGzlHZ4Nylfw_TyC8GW_=s1600-w800",
      placeID: "ChIJr4F0NbCAhYARSZVavq8xsPw",
      area: "caba"
    },
    {
      name: "Hina Yakitori",
      address: "808 Divisadero St, San Francisco",
      giftCardURL: "https://squareup.com/gift/64CPK8AQ44W0P/order",
      takeoutURL: null,
      donationURL: null,
      placeURL: "https://www.hinacaba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipNv2aHwSu-kJYr1iKGxIkOo4B-Du4olXPysxAHP=s1600-w800",
      placeID: "ChIJXzJrpN6BhYARBOVVvS_qvOw",
      area: "caba"
    },
    {
      name: "Che Fico Alimentari",
      address: "834 Divisadero Street, San Francisco",
      giftCardURL: "https://www.toasttab.com/che-fico/giftcards",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.cheficoalimentari.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOg7oYpxm2LlszuHrXLw2aBq_T2JPQl01ZESjh3=s1600-w800",
      placeID: "ChIJY9av7ViBhYAR3ejAF435Xz4",
      area: "caba"
    },
    {
      name: "Horsefeather",
      address: "528 Divisadero Street, San Francisco",
      giftCardURL: "https://www.toasttab.com/horsefeather/giftcards",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.horsefeatherbar.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipP7bq_YgD_iENjuEwdIRaTNhirXtN2pg0z3flix=s1600-w800",
      placeID: "ChIJBYNPuq-AhYARkLvNM_mLKhk",
      area: "caba"
    }
  ],
  mendoza_restaurant: [
    {
      name: "Burma Superstar",
      address: "309 Clement Street, San Francisco",
      giftCardURL: "https://www.burmasuperstar.com/shop-detail/gift-card",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.burmasuperstar.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOP3uZ-EegqLC5VGJpOrfD-j0Ufs8T0dOCG_rFU=s1600-w630",
      placeID: "ChIJX5U6hOF9hYARluNcw9h5G5U",
      area: "caba"
    },
    {
      name: "Giorgio's Pizzeria",
      address: "151 Clement Street, San Francisco",
      giftCardURL: "https://giorgiospizza.cardfoundry.com/giftcards.php",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.giorgiospizza.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOBt0a9BPBeGmmGXXodbcKBsqT3uQqZFfGJmuOJ=s1600-w800",
      placeID: "ChIJXVAffjmHhYARZ-0vrvmGqfc",
      area: "caba"
    },
    {
      name: "B Star",
      address: "127 Clement St, San Francisco",
      giftCardURL: "https://www.bstarbar.com/gift-cards",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.bstarbar.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipMRFMWNiqyoTsZuhO4W88oP3x8z7ZUlhgD5-nq8=s1600-w800",
      placeID: "ChIJe477gDmHhYARrtTtY3v18ZQ",
      area: "caba"
    },
    {
      name: "Eats",
      address: "50 Clement Street, San Francisco",
      giftCardURL: "https://www.eatsrestaurantcaba.com/merchandise",
      takeoutURL: null,
      donationURL: null,
      placeURL: "https://www.eatsrestaurantcaba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipPMlD0_HTX--bWf17bOwPFj2NHDMA_xFgw9bMc6=s1600-w800",
      placeID: "ChIJLTo1iTmHhYARzSryJMomLjk",
      area: "caba"
    },
    {
      name: "Gaspare's Pizza House & Italian Restaurant",
      address: "5546 Geary Boulevard, San Francisco",
      giftCardURL: "https://www.gasparespizzeria.com/online-store",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.gasparespizzeria.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipNc_D_YFeyBOcuObllohwy98gStxRX4OFw7sWGr=s1600-w360",
      placeID: "ChIJPeOeSBCHhYARVLTDHMhc1N4",
      area: "caba"
    },
    {
      name: "Richmond Republic Draught House",
      address: "642 Clement St, San Francisco",
      giftCardURL: "https://www.richmondrepubliccaba.com/mug-club",
      takeoutURL: null,
      donationURL: null,
      placeURL: null,
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOOJKHN2FOdl7gLUvNzV_cQQZcm1A0Tz8uylwGu=s1600-w800",
      placeID: "ChIJkfstTDyHhYARJPNuk4E0cabaE",
      area: "caba"
    },
    {
      name: "Chapeau!",
      address: "126 Clement Street, San Francisco",
      giftCardURL: "https://squareup.com/gift/HZTHJ23NTWDZP/order",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.chapeaucaba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipMiBhG2YPWLgCwvsYucT-yXUvLUtk-o-PQyGodQ=s1600-w800",
      placeID: "ChIJs0HxgDmHhYARAoIYlNJMScA",
      area: "caba"
    },
    {
      name: "Fiorella Clement",
      address: "2339 Clement St, San Francisco",
      giftCardURL:
        "https://onelink.quickgifts.com/merchant/fiorella-san-francisco/",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.fiorella-caba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipMEqktDSi7ktl8FDUaWetWg22zElpxiyFja35Vz=s1600-w800",
      placeID: "ChIJ1XM-lgWHhYARFtVFjLm3ldM",
      area: "caba"
    },
    {
      name: "Gordo Taqueria",
      address: "2252 Clement Street, San Francisco",
      giftCardURL: "https://squareup.com/gift/YN6BVHJQ9E1VV/order",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://gordotaqueria.co/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipMlBYUMk02OjCE3HFa-rzGHbuFDAzzPhpJziPRF=s1600-w800",
      placeID: "ChIJ_3QjoAWHhYAR897pIHmZ0Fk",
      area: "caba"
    }
  ],
  cordoba_restaurant: [
    {
      name: "The Slanted Door",
      address: "One Ferry Building #3, San Francisco",
      giftCardURL: "https://www.giftrocker.com/secure/Order/?h=aac5bad9",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.slanteddoor.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipNN3siHC5FnFHlNhCC58FHX231ZvypUbZkrv4vj=s1600-w800",
      placeID: "ChIJWTGPjmaAhYARnYcabahjHT8JM",
      area: "caba"
    },
    {
      name: "Kara's Cupcakes",
      address: "3 Embarcadero Center (Street Level, San Francisco",
      giftCardURL:
        "https://www.toasttab.com/karas-cupcakes-embarcadero/giftcards",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://karascupcakes.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipOyvuShsI7YGIW1mqGRaad9b4f0Cv-3YqUYxZVP=s1600-w800",
      placeID: "ChIJrzCHGGGAhYAR5GL5JYq9gOM",
      area: "caba"
    },
    {
      name: "Harborview Restaurant & Bar",
      address: "4 Embarcadero Center, Street Level, San Francisco",
      giftCardURL: "https://www.harborviewcaba.com/store/gift-cards/",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://harborviewcaba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipPqBRcuwnjlxMtTDaQWo04Lzn-92I5WqSLG1Tx6=s1600-w800",
      placeID: "ChIJZ1SMEQeBhYAR8Y0suKMr48o",
      area: "caba"
    },
    {
      name: "La Mar Cebicheria Peruana",
      address: "pier 1 1/2 The Embarcadero, San Francisco",
      giftCardURL:
        "https://lamarcaba.com/wp-content/uploads/Gift-Card-Purchase-Form.pdf",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://lamarcaba.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipPhnIxO0WpS1db8EX03C4oasx7gHey6VpjN4uWv=s1600-w800",
      placeID: "ChIJURDKN2eAhYARN0AMzUEaiKo",
      area: "caba"
    },
    {
      name: "The Pressed Cafe",
      address: "3 Embarcadero Center, San Francisco",
      giftCardURL: "https://www.pressedcafe.com/shop/gift-card",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://thepressedcafe.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipPspvCIgUmgdaMpV8cSiKNw7SRDKXfcFxXltkgr=s1600-w800",
      placeID: "ChIJBcJrF2GAhYARwxro0Og5nOQ",
      area: "caba"
    },
    {
      name: "Hard Water",
      address: "Pier 3, The Embarcadero, San Francisco",
      giftCardURL: "https://www.hardwaterbar.com/giftcard",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://hardwaterbar.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipMfr01u-rLZJcS_4fiPD6bMwdwWelSxALF6JyoF=s1600-w800",
      placeID: "ChIJSYqwTGeAhYARXBQKB6Qwics",
      area: "caba"
    },
    {
      name: "Gott's Roadside",
      address: "One Ferry Building #6, San Francisco",
      giftCardURL:
        "https://www.toasttab.com/gotts-roadside-palo-alto/giftcards",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://gotts.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipP_jg-n77fEuju2CbYDXa46tp-WvCQG9hhxbQ1b=s1600-w800",
      placeID: "ChIJVVWVjGaAhYARH_4JjCTVBz8",
      area: "caba"
    },
    {
      name: "Out the Door",
      address: "Ferry Building, One, #5, San Francisco",
      giftCardURL: "https://www.giftrocker.com/secure/Order/?hash=8fd9b2e4",
      takeoutURL: null,
      donationURL: null,
      placeURL: null,
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipO_i_swiXqNMC4wDfAYV-q1ngA7x_4JTxICx71S=s1600-w800",
      placeID: "ChIJWTGPjmaAhYARUxKI6M_KDjA",
      area: "caba"
    },
    {
      name: "Philz Coffee",
      address: "5 Embarcadero Center, San Francisco",
      giftCardURL: "https://www.philzcoffee.com/shop/gift-cards",
      takeoutURL: null,
      donationURL: null,
      placeURL: "http://www.philzcoffee.com/",
      emailContact: null,
      imageURL:
        "https://lh3.googleusercontent.com/p/AF1QipNDVGRkFkBGmMrMgZb2fHHpY-5Q2GlHRNfMLexn=s1600-w800",
      placeID: "ChIJrXyusmaAhYARHy-30QCG2e4",
      area: "caba"
    }
  ]
};

export default FullPlaces;

const neighborsConfiged = Object.keys(FullPlaces);

export function getByArea(area) {
  const neighborsFromArea = neighborsConfiged.filter(n => {
    return n.indexOf(area) > -1;
  });

  return flatMap(neighborsFromArea, function(n) {
    return FullPlaces[n];
  });
}
