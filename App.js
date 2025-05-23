import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/001/241/135/large_2x/female-chef-holding-platter-with-lid-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Search = () => {
  return <>{"Search"}</>;
};
//inline css
const ResterauntCard = (props) => {
  //   console.log(props);//an object received as arguments from JSX by React
  const { resData } = props; //Destructing props to capture resData key
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info; // Optional Chaining
  return (
    // <div
    //   className="res-card"
    //   style={{
    //     width: "200px",
    //     height: "300px",
    //     backgroundColor: "antiquewhite",
    //     margin: "5px",
    //     padding: "7px",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignContent: "center",
    //   }}
    // >
    <div className="res-card">
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5>{cuisines.join(" , ")}</h5>
        <h5>{avgRating}</h5>
      </div>
    </div>
  );
};

const resObj = [
  {
    info: {
      id: "242282",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/8874a698-b2fe-4838-a02f-d4288ba3cdf0_242282.JPG",
      locality: "Rajiv Chowk",
      areaName: "Connaught Place",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.5,
      parentId: "630",
      avgRatingString: "4.5",
      totalRatingsString: "2.9K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-23 22:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/bolt%206.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/bolt%206.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "66% OFF",
        subHeader: "UPTO ₹126",
        headerTypeV2: 12,
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "18K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7b08cfc-8296-4d0b-89d9-dde4ad499671",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/mcdonalds-rajiv-chowk-connaught-place-rest242282",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "152971",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/61a19651-713d-4f7d-849d-f4ba3a8d5e5f_152971.JPG",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
      avgRating: 4.6,
      parentId: "547",
      avgRatingString: "4.6",
      totalRatingsString: "6.3K+",
      sla: {
        deliveryTime: 12,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-24 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/bolt%206.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/bolt%206.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹64",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "6.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7b08cfc-8296-4d0b-89d9-dde4ad499671",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/kfc-connaught-place-rest152971",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "16865",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/264a0803-7875-4806-bf25-93bad4586776_16865.JPG",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.2,
      parentId: "721",
      avgRatingString: "4.2",
      totalRatingsString: "5.2K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹79",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "6.5K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7b08cfc-8296-4d0b-89d9-dde4ad499671",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/pizza-hut-connaught-place-rest16865",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "8614",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/2d2383cf-fab7-4413-917e-ad2a1c41e250_8614.jpg",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.4,
      parentId: "166",
      avgRatingString: "4.4",
      totalRatingsString: "42K+",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 0.3,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "0.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-24 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/bolt%206.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/bolt%206.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹139",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "9.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7b08cfc-8296-4d0b-89d9-dde4ad499671",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/burger-king-connaught-place-rest8614",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "58217",
      name: "Theobroma",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/e7609212-5025-4618-a6fa-c3f5524190b2_58217.jpg",
      locality: "Mezzanine",
      areaName: "Connaught Place",
      costForTwo: "₹400 for two",
      cuisines: ["Bakery", "Desserts"],
      avgRating: 4.6,
      parentId: "1040",
      avgRatingString: "4.6",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 11,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-24 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/bolt%206.png",
            description: "bolt!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/bolt%206.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹166 OFF",
        subHeader: "ABOVE ₹999",
        discountTag: "FLAT DEAL",
        headerTypeV2: 12,
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "3.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7b08cfc-8296-4d0b-89d9-dde4ad499671",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/theobroma-mezzanine-connaught-place-rest58217",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "169835",
      name: "NIC Ice Creams",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/22/52818bb7-73c1-4aea-8161-40b3701b1513_169835.jpg",
      locality: "Beadon Pura",
      areaName: "Karol Bagh",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "6249",
      avgRatingString: "4.6",
      totalRatingsString: "9.5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-24 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹148",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7b08cfc-8296-4d0b-89d9-dde4ad499671",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/nic-ice-creams-beadon-pura-karol-bagh-rest169835",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "355348",
      name: "Grameen Kulfi",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/16/d60db686-5b39-416a-ad30-7d81a8d4b585_355348.jpg",
      locality: "Bagh",
      areaName: "Karol Bagh",
      costForTwo: "₹120 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.7,
      veg: true,
      parentId: "12175",
      avgRatingString: "4.7",
      totalRatingsString: "723",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-24 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "66% OFF",
        subHeader: "UPTO ₹126",
        headerTypeV2: 12,
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7b08cfc-8296-4d0b-89d9-dde4ad499671",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/grameen-kulfi-bagh-karol-bagh-rest355348",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "659837",
      name: "Bakingo",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/5/15/a88247b8-0e4b-4634-9427-a95c13a2447e_659837.jpg",
      locality: "Naiwala",
      areaName: "Karol Bagh",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.6,
      parentId: "3818",
      avgRatingString: "4.6",
      totalRatingsString: "9.5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-24 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Desserts.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Desserts.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "ABOVE ₹3000",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7b08cfc-8296-4d0b-89d9-dde4ad499671",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/bakingo-naiwala-karol-bagh-rest659837",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "169244",
      name: "Taco Bell",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/7/f5a699b0-7e91-4215-896b-f8fe92a62f81_169244.JPG",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.5,
      parentId: "1557",
      avgRatingString: "4.5",
      totalRatingsString: "7.6K+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 0.4,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "0.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-05-23 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "bolt/bolt%206.png",
            description: "bolt!",
          },
          {
            imageId: "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "bolt/bolt%206.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Ratnesh_Badges/Rx_Awards_2025/Global%20Flavours.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.2",
          ratingCount: "3.3K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-d7b08cfc-8296-4d0b-89d9-dde4ad499671",
    },
    cta: {
      link: "https://www.swiggy.com/city/delhi/taco-bell-connaught-place-rest169244",
      type: "WEBLINK",
    },
  },
];
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="res-container">
        {resObj.map((item) => (
          <ResterauntCard resData={item} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root.render(<AppLayout />);
