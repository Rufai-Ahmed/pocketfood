import { iCarousel, iFAQ, iInfo, iNav, iTestimonial } from "../interfaces";

export const navData: iNav[] = [
  {
    name: "About",
    link: "/about",
  },
  {
    name: "FAQs",
    link: "/faqs",
  },
  {
    name: "Business",
    link: "/business",
  },
];

export const carouselData: iCarousel[] = [
  {
    img: "/assets/local.webp",
    em: "Local",
    b: "champion",
    list: [
      "weekly meal plan",
      "budgeted meals to fill you belly and make your pockets smile",
      "starting from N1,500 per meal",
    ],
  },
  {
    img: "/assets/local.webp",
    em: "Local",
    b: "champion",
    list: [
      "weekly meal plan",
      "budgeted meals to fill you belly and make your pockets smile",
      "starting from N1,500 per meal",
    ],
  },
];

export const infoData: iInfo[] = [
  {
    id: 0,
    img: "/assets/1.webp",
    b: "Save Time And Reduce Meal Decision Stress",
    p: "Plan meals effortlessly; subscribe to weekly and monthly meal plans from your favorite food plug, leaving you more time to do your thing.",
    button: "Subscribe to meal plan",
  },
  {
    id: 1,
    img: "/assets/2.webp",
    b: "Beat Your Health Goals Through AI",
    p: "Input your dietary preferences, health goals and let our AI generate a personalized meal plan for you based on your nutrition data.",
    button: "Get started",
  },
  {
    id: 2,
    img: "/assets/3.webp",
    b: "Order Your Favorite Meals, Delivered On Your Terms",
    p: "Not just for planning, Pocket Food is your go-to for on the spot cravings. Order one-off meals from nearby restaurants anytime you want and get them delivered in minutes.",
    button: "Get started",
  },
  {
    id: 3,
    img: "/assets/4.webp",
    p: "Adjust delivery times and frequencies on your terms. Pause or skip meals anytime - Modify plans, swap or order one-off meals whenever you want.",
    button: "Get started",
    b: "Enjoy A Flexible Food Delivery Experience",
  },
];

export const images: string[] = infoData.map((el: iInfo) => el.img!);

export const testimonialData: iTestimonial[] = [
  {
    img: "/assets/testimony-1.webp",
    p: "PocketFood has an excellent delivery service! Their pricing is very affordable and they always find ways to improve their services. Plus, their customer service is awesome... and they reward their customers, something most companies in the same business never do. I highly recommend.",
    bp: "Technical Support Agent",
    b: "Patrick Aziken",
  },
  {
    img: "/assets/tesimony-2.webp",
    p: "I always thank God for the day I came across them on Twitter. As someone who doesn't cook, I've been able to cut cost of feeding by a large margin, food is very delicious, delivered right on time and in large quantities. Also the best customer service you can ever ask for.",
    bp: "Sr. Product Designer, LemiF",
    b: "David Fayemi",
  },
  {
    img: "/assets/testimony-3.webp",
    p: "I’ve been using pocket food for about 4 months and it has saved me the stress of thinking about what to eat while saving me from always eating rice every other day. Recommended pocket food to a few friends and they also found it to be reliable and consistent.",
    bp: "Finance Associate, Rendeavour",
    b: "Oluwakorede Ajose",
  },
];

export const faqData: iFAQ[] = [
  {
    q: "How does pocket food work?",
    ans: "Absolutely! You can order individual meals without any subscription commitment. Enjoy the flexibility of getting your preferred meal whenever you desire. Your Meal, Your Way, Anytime!",
  },
  {
    q: "Is Pocketfood suitable for specific diets or health conditions?",
    ans: "Absolutely! You can order individual meals without any subscription commitment. Enjoy the flexibility of getting your preferred meal whenever you desire. Your Meal, Your Way, Anytime!",
  },
  {
    q: "Can I order one-off meals without a subscription?",
    ans: "Absolutely! You can order individual meals without any subscription commitment. Enjoy the flexibility of getting your preferred meal whenever you desire. Your Meal, Your Way, Anytime!",
  },
  {
    q: "What if I need to change my delivery address or date?",
    ans: "Absolutely! You can order individual meals without any subscription commitment. Enjoy the flexibility of getting your preferred meal whenever you desire. Your Meal, Your Way, Anytime!",
  },
  {
    q: "Can I specify food preferences and allergies in my profile?",
    ans: "Absolutely! You can order individual meals without any subscription commitment. Enjoy the flexibility of getting your preferred meal whenever you desire. Your Meal, Your Way, Anytime!",
  },
  {
    q: "Can I pause my subscription or skip meals for a certain period?",
    ans: "Absolutely! You can order individual meals without any subscription commitment. Enjoy the flexibility of getting your preferred meal whenever you desire. Your Meal, Your Way, Anytime!",
  },
  {
    q: "Is pocketfood available in my area?",
    ans: "Absolutely! You can order individual meals without any subscription commitment. Enjoy the flexibility of getting your preferred meal whenever you desire. Your Meal, Your Way, Anytime!",
  },
];
