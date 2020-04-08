//   for displaying data in Items (ProductList)

const Products = [
    {
      id: 1,
      title: "OnePlus 7T Pro",
      img: "img/product-1.jpg",
      price: 54999,
      company: "OnePlus",
      info:"OnePlus 7T Pro smartphone was launched on 10th October 2019. The phone comes with a 6.67-inch touchscreen display with a resolution of 1440x3120 pixels at a pixel density of 516 pixels per inch (ppi) and an aspect ratio of 19.5:9. OnePlus 7T Pro is powered by an octa-core Qualcomm Snapdragon 855+ processor. It comes with 8GB of RAM. The OnePlus 7T Pro runs Android 10 and is powered by a 4085mAh non-removable battery. The OnePlus 7T Pro supports proprietary fast charging.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 2,
      title: "Apple iPhone 11",
      img: "img/product-2.jpg",
      price: 64999,
      company: "Apple",
      info:"The iPhone 11 is a successor to the iPhone XR and the name represents a reset in Apple's naming strategy to emphasise that this is the  iPhone for everyone. Powered by Apple's own A13 Bionic chip, the iPhone 11 trio are the fastest smartphones you can buy today, with the closest competition at the time of filing this review being last year's iPhone lineup.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 3,
      title: "Apple iPhone 11 Pro Max",
      img: "img/product-3.jpg",
      price: 89999,
      company: "Apple",
      info:"The biggest iPhone in Apple's lineup, the iPhone 11 Pro Max looks like an incremental upgrade over the iPhone XS Max but it brings some significant changes under the hood. There's a triple camera setup at the back now, letting you choose between the Wide, Ultra Wide, and Telephoto lenses. The Camera app makes it seamless to pick one or the other, presenting the Ultra Wide camera as a 0.5x zoom, which is certainly an interesting perspective. All this is backed by improved HDR and a brand new Night Mode, which means you get excellent image and video quality in most conditions. For the first time in years, Apple's phones not only compete, but often surpass the competition in terms of low light photography.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 4,
      title: "OnePlus 7T",
      img: "img/product-4.jpg",
      price: 44999,
      company: "OnePlus",
      info:"OnePlus has taken a bunch of features from the more expensive OnePlus 7 Pro and put them into the OnePlus 7T, which is the successor to the OnePlus 7. To add to this confusion, the older two models have only been on the market for around four months prior to this launch. While some buyers will love having more features and power, there are others who will be disappointed that this company has raised the price of its base model yet again.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 5,
      title: "Redmi Note 8 Pro",
      img: "img/product-5.jpg",
      price: 14999,
      company: "Redmi",
      info:"Redmi Note 8 Pro smartphone was launched on 29th August 2019. The phone comes with a 6.53-inch touchscreen display with a resolution of 1080x2340 pixels and an aspect ratio of 19.5:9. Redmi Note 8 Pro is powered by an octa-core MediaTek Helio G90T processor that features 2 cores clocked at 2.05GHz and 6 cores clocked at 2GHz. It comes with 6GB of RAM. The Redmi Note 8 Pro runs Android 9 Pie and is powered by a 4500mAh non-removable battery. The Redmi Note 8 Pro supports proprietary fast charging.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 6,
      title: "Redmi 8A Dual",
      img: "img/product-6.jpg",
      price: 9999,
      company: "Redmi",
      info:"Redmi 8A Dual smartphone was launched on 11th February 2020. The phone comes with a 6.22-inch touchscreen display with a resolution of 720x1520 pixels and an aspect ratio of 19:9. Redmi 8A Dual is powered by a 1.45GHz octa-core Qualcomm Snapdragon 439 processor that features 4 cores clocked at 1.95GHz and 4 cores clocked at 1.45GHz. It comes with 2GB of RAM. The Redmi 8A Dual runs Android 9.0 and is powered by a 5000mAh battery. The Redmi 8A Dual supports proprietary fast charging.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 7,
      title: "OPPO Reno3 Pro",
      img: "img/product-7.jpg",
      price: 19999,
      company: "Oppo",
      info: "The Oppo Reno 3 Pro was launched in China late last year as a 5G enabled smartphone. Right after the China launch, we saw multiple rumours hinting that this smartphone would soon come to India, but then it seemed as though the Reno 3 Pro making its way to India would be a completely different device that only shares a name with its Chinese equivalent. Oppo finally took the wraps off the Reno 3 Pro earlier this month, and sure enough, a lot of these rumours have been confirmed.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 8,
      title: "Realme 5 Pro",
      img: "img/product-8.jpg",
      price: 16999,
      company: "Realme",
      info:"Realme has done a good job of keeping us on our toes since it first debuted in India as a subsidiary of Oppo in mid-2018. The new Realme 5 (Review) and Realme 5 Pro succeed the Realme 3 (Review) and Realme 3 Pro (Review) — the number 4 considered unlucky in some Asian cultures — highlighting the young company's remarkable turnaround rate. Four generations of a product is a lot to deliver for a brand that's barely fifteen months old. Realme has managed to keep up with or displace market leaders Xiaomi, Lenovo, Honor, Asus, and Samsung, by releasing fresh new models each time the bar is raised",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 9,
      title: "Huawei Y9 Prime 2019",
      img: "img/product-9.jpg",
      price: 15999,
      company: "Huawei",
      info:"Huawei Y9 Prime 2019 smartphone was launched on 13th May 2019. The phone comes with a 6.59-inch touchscreen display with a resolution of 1080x2340 pixels at a pixel density of 391 pixels per inch (ppi) and an aspect ratio of 19.5:9. Huawei Y9 Prime 2019 is powered by an octa-core HiSilicon Kirin 710 processor that features 4 cores clocked at 2.2 MHz and 4 cores clocked at 1.7 MHz. It comes with 4GB of RAM. The Huawei Y9 Prime 2019 runs Android Pie and is powered by a 4000mAh battery.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 10,
      title: "Realme X",
      img: "img/product-10.jpg",
      price: 27999,
      company: "Realme",
      info:"The Realme X is a premium offering from Realme, which features an in-display fingerprint sensor and a pop-up selfie camera, under Rs. 20,000. It features a 6.53-inch, full-HD+ OLED display that produces good colours and has adequate brightness. The in-display fingerprint sensor also works very well and there's face unlock too, which we found to be equally fast. ",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 11,
      title: "Apple iPhone 11 Pro",
      img: "img/product-11.jpg",
      price: 84999,
      company: "Apple",
      info:"iPhone 11 Pro smartphone was launched on 10th September 2019. The phone comes with a 5.80-inch touchscreen display with a resolution of 1125x2436 pixels at a pixel density of 458 pixels per inch (ppi). iPhone 11 Pro is powered by a hexa-core Apple A13 Bionic processor. It comes with 4GB of RAM. The iPhone 11 Pro runs iOS 13 and is powered by a 3046mAh non-removable battery. The iPhone 11 Pro supports wireless charging, as well as proprietary fast charging.",
      inCart: false,
      count: 0,
      total: 0
    },
    {
      id: 12,
      title: "Honor 9X",
      img: "img/product-12.jpg",
      price: 14999,
      company: "Honor",
      info:"Honor 9X succeeds the Honor 8X and brings some notable aesthetic as well as performance upgrades. The notch-less full-HD+ display is sufficiently sharp and punchy, but outdoor visibility is a bit sub-par and the large size makes one-handed usage difficult. The Kirin 710F ticking at its heart handles day-to-day tasks with ease, but it stutters at graphics-intensive games, and synthetic benchmarks narrate the same story as well.",
      inCart: false,
      count: 0,
      total: 0
    }
  ];

  //   for Displaying data in the Iteminfo !

  
const Info = {
    id: 1,
    title: "OnePlus 7T Pro",
    img: "img/product-1.jpg",
    price: 54999,
    company: "OnePlus",
    info:"OnePlus 7T Pro smartphone was launched on 10th October 2019. The phone comes with a 6.67-inch touchscreen display with a resolution of 1440x3120 pixels at a pixel density of 516 pixels per inch (ppi) and an aspect ratio of 19.5:9. OnePlus 7T Pro is powered by an octa-core Qualcomm Snapdragon 855+ processor. It comes with 8GB of RAM. The OnePlus 7T Pro runs Android 10 and is powered by a 4085mAh non-removable battery. The OnePlus 7T Pro supports proprietary fast charging.",
    inCart: false,
    count: 0,
    total: 0
  };

//   for displaying data in Items (ProductList)
  export {Products,Info};