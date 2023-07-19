// we have 4 grids and 8 productSlider

import React from "react";
import ProductSlider from "./ProductSlider";
import Footer from "./Footer";
import SigninSuggestion from "./SigninSuggestion";
import { Link } from "react-router-dom";

const HomescreenGrid = () => {
  const grid_1ItemsData = [
    {
      title: "Appliances for your home | Up to 55% off",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
          label: "Air conditioners",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
          label: "Refrigerators",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
          label: "Microwaves",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
          label: "Washing machines",
        },
      ],
      buttonName: "See more",
    },
    {
      title: "Prime exclusive offers | Travel tickets",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Flight_186x116._SY116_CB600937888_.jpg",
          label: "Get up to 25% off* on flight tickers",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Train_186x116._SY116_CB600937888_.jpg",
          label: "Zero gateway fees on trains",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/Bus_186x116._SY116_CB600937888_.jpg",
          label: "Flat 10% back on bus tickets",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/PD23/QC/SW_186x116._SY116_CB600937888_.jpg",
          label: "Products for your travel needs",
        },
      ],
      buttonName: "See all offers",
    },
    {
      title: "Up to 50% off | Monitor blood sugar",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Pharmacy/GW/2023/WK28/PC_CC_Set_379x304_01._SY304_CB601485788_.jpg",
          label: "",
        },
      ],
      buttonName: "Visit the store",
    },
    {
      title: "Up to 70% off | Clearance store",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg",
          label: "",
        },
      ],
      buttonName: "See more",
    },
    {
      title: "Revamp your home in style",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg",
          label: "Bedsheets, curtains & more",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg",
          label: "Home decoration",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg",
          label: "Home storage",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg",
          label: "Lighting solutions",
        },
      ],
      buttonName: "Explore all",
    },
    {
      title: "Automotive essentials | Up to 60% off",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
          label: "Cleaning Accessories",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
          label: "Tyre & rim care",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
          label: "Helmets",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
          label: "Vacuum cleaner",
        },
      ],
      buttonName: "See more",
    },
    {
      title: "Up to 70% off | Styles for men",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
          label: "Clothing",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
          label: "Footwear",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
          label: "Watches",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
          label: "Bags & luggage",
        },
      ],
      buttonName: "End of season sale",
    },
  ];

  // Props to be passed to ProductSlider
  const productSlider1Data = {
    title: "Todays Deals",
    buttonName: "See all deals",
    allProductsData: [
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/31sIEzlmGTL._AC_SY200_.jpg",
        off: "76",
        offerName: "Prime Day Early Deal",
        productTitle: "Branded suitcase trolleys - American Tourist",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/31PHsQXYqrL._AC_SY200_.jpg",
        off: "48",
        offerName: "Deal of the day",
        productTitle: "Bata, Hush Puppies & more",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/31nQtukA3bL._AC_SY200_.jpg",
        off: "80",
        offerName: "Deal of the day",
        productTitle: "Deals on RED TAPE",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/51RwTTvO3IL._AC_SY200_.jpg",
        off: "42",
        offerName: "Deal of the day",
        productTitle: "Best Selling Toys from Einstein box",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/51kdwtY1KvL._AC_SY200_.jpg",
        off: "87",
        offerName: "Deal of the day",
        productTitle: "Wallpapers from wolpin",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/51cJxhsBpaL._AC_SY200_.jpg",
        off: "21",
        offerName: "Deal of the day",
        productTitle: "Best Selling Toys from Smartivity",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/41sx753+kXL._AC_SY200_.jpg",
        off: "75",
        offerName: "Prime day early deal",
        productTitle: "Lowest prices on Smart Bulbs",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/61BH6SaNgzL._AC_SY200_.jpg",
        off: "60",
        offerName: "Deal of the day",
        productTitle: "Best deals from Wonderful Foods",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/31B9dfuJThS._AC_SY200_.jpg",
        off: "64",
        offerName: "Deal of the day",
        productTitle: "Best offers on PUMA",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/41qY1aOu08L._AC_SY200_.jpg",
        off: "68",
        offerName: "Deal of the day",
        productTitle: "Top selling ladders",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/51MTW5OKkUS._AC_SY200_.jpg",
        off: "87",
        offerName: "Deal of the day",
        productTitle: "Wallpapers from Wolpin",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/41LX67HXDkS._AC_SY200_.jpg",
        off: "80",
        offerName: "Deal of the day",
        productTitle: "Prime early deal for French connection",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/315RaKdrF3L._AC_SY200_.jpg",
        off: "57",
        offerName: "Deal of the day",
        productTitle: "Blockbuster deals on Bergner kadhai, tawa and many more",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/31NDLo8vP7L._AC_SY200_.jpg",
        off: "29",
        offerName: "Deal of the day",
        productTitle: "WaterScience best deals Bath Faucets and many more",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/51gZymWcITL._AC_SY200_.jpg",
        off: "64",
        offerName: "Deal of the day",
        productTitle: "Totes & Shoulder Bags Min 70% off",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/71ZP1Ux8uEL._UL1200__AC_SY200_.jpg",
        off: "59",
        offerName: "Deal of the day",
        productTitle: "Best Offers on PUMA Footwear & Clothing and many more",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/31+JUVeDCmL._AC_SY200_.jpg",
        off: "34",
        offerName: "Deal of the day",
        productTitle: "Deals on Layasa",
      },
    ],
  };

  const productSlider2Data = {
    title: "Flat 45% off | Furnitures from stores nearby",
    buttonName: "See all offers",
    allProductsData: [
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/31kFu+3RnIL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/61GnO+UavZL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/71FqnBJbzfS._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/81RzcJRbA5L._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/61ncThYRYrL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/51JsqdjgzOL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/71vhSZO3o8L._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/51jKA5vIxBL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/41XynESDsDL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/61onaYlcDDL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/61cP21vjC-L._AC_SY200_.jpg",
      },
    ],
  };

  const productSlider3Data = {
    title: "Up to 50% off | Women's fashion from stores near by",
    buttonName: "See all offers",
    allProductsData: [
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/61NPBdDBojL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/81lSpbHtVDL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/51j9uND0DQL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/61F6xL4cMYL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/31Dv4PiE8eL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/41asxiEZAnL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/51YkL+O5zQL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/81T8Txq2VGL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/61VmOcTl-uL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/61Jcpqe0hcL._AC_SY200_.jpg",
      },
      {
        imageUrl:
          "https://m.media-amazon.com/images/I/416HPjPH+YL._AC_SY200_.jpg",
      },
    ],
  };

  const grid_2ItemsData = [
    {
      title: "Up to 70% off | Clearance store",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg",
          label: "",
        },
      ],
      buttonName: "See more",
    },
    {
      title: "Automotive essentials | Up to 60% off",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
          label: "Cleaning Accessories",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
          label: "Tyre & rim care",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
          label: "Helmets",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
          label: "Vacuum cleaner",
        },
      ],
      buttonName: "See more",
    },
    {
      title: "Revamp your home in style",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_1_Low._SY116_CB670263840_.jpg",
          label: "Bedsheets, curtains & more",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_2_Low._SY116_CB670263840_.jpg",
          label: "Home decoration",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_3_Low._SY116_CB670263840_.jpg",
          label: "Home storage",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/GW/MSO/April/372x232_4_Low._SY116_CB670263840_.jpg",
          label: "Lighting solutions",
        },
      ],
      buttonName: "Explore all",
    },

    {
      title: "Up to 70% off | Styles for men",
      images: [
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
          label: "Clothing",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
          label: "Footwear",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
          label: "Watches",
        },
        {
          imageUrl:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
          label: "Bags & luggage",
        },
      ],
      buttonName: "End of season sale",
    },
  ];

  return (
    <div
      id="main-grid"
      className=" pt-0 absolute top-[70%] z-10 w-full md:top-[60%] lg:top-[50%]"
    >
      <div className="p-4">
        {/* grid 1 of 4 */}
        <div
          id="grid-1/4"
          className="grid place-items-center gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          <GridItem
            title={grid_1ItemsData[0].title}
            images={grid_1ItemsData[0].images}
            buttonName={grid_1ItemsData[0].buttonName}
          />
          <GridItem
            title={grid_1ItemsData[1].title}
            images={grid_1ItemsData[1].images}
            buttonName={grid_1ItemsData[1].buttonName}
          />
          <GridItem
            title={grid_1ItemsData[2].title}
            images={grid_1ItemsData[2].images}
            buttonName={grid_1ItemsData[2].buttonName}
          />
          {/* sign in + ad component*/}
          <GridItem
            title={"Sign in for your best experience"}
            images={null}
            buttonName={null}
          />
          <GridItem
            title={grid_1ItemsData[3].title}
            images={grid_1ItemsData[3].images}
            buttonName={grid_1ItemsData[3].buttonName}
          />
          <GridItem
            title={grid_1ItemsData[4].title}
            images={grid_1ItemsData[4].images}
            buttonName={grid_1ItemsData[4].buttonName}
          />
          <GridItem
            title={grid_1ItemsData[5].title}
            images={grid_1ItemsData[5].images}
            buttonName={grid_1ItemsData[5].buttonName}
          />
          <GridItem
            title={grid_1ItemsData[6].title}
            images={grid_1ItemsData[6].images}
            buttonName={grid_1ItemsData[6].buttonName}
          />
        </div>
        {/* productSlider */}
        <div id="productSlider1" className="p-5 bg-white my-4">
          <ProductSlider
            title={productSlider1Data.title}
            buttonName={productSlider1Data.buttonName}
            allProductsData={productSlider1Data.allProductsData}
          />
        </div>
        <div id="productSlider2" className="p-5 bg-white my-4">
          <ProductSlider
            title={productSlider2Data.title}
            buttonName={productSlider2Data.buttonName}
            allProductsData={productSlider2Data.allProductsData}
          />
        </div>
        <div id="productSlider3" className="p-5 bg-white my-4">
          <ProductSlider
            title={productSlider3Data.title}
            buttonName={productSlider3Data.buttonName}
            allProductsData={productSlider3Data.allProductsData}
          />
        </div>
        {/* advertisement */}
        <img
          className="object-cover object-center w-full md:w-3/4 my-4 mx-auto"
          src={
            "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          }
          alt="ad"
        />
        {/* grid 2 of 4 */}
        <div
          id="grid-1/4"
          className="grid place-items-center gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          <GridItem
            title={grid_2ItemsData[0].title}
            images={grid_2ItemsData[0].images}
            buttonName={grid_2ItemsData[0].buttonName}
          />
          <GridItem
            title={grid_2ItemsData[1].title}
            images={grid_2ItemsData[1].images}
            buttonName={grid_2ItemsData[1].buttonName}
          />
          <GridItem
            title={grid_2ItemsData[2].title}
            images={grid_2ItemsData[2].images}
            buttonName={grid_2ItemsData[2].buttonName}
          />
          <GridItem
            title={grid_2ItemsData[3].title}
            images={grid_2ItemsData[3].images}
            buttonName={grid_2ItemsData[3].buttonName}
          />
        </div>
        {/* offer poster */}
        <div className=" md:p-4 my-4 bg-white">
          <img
            className="cursor-pointer"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/APAYMOVIE/BAdhaaiDo/DF_1_GWeditorial_2300x646._CB599982488_.jpg"
            alt=""
          />
        </div>
      </div>
      {/* SignIn component */}
      <SigninSuggestion />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomescreenGrid;

// grid item component
const GridItem = (props) => {
  const { title, images, buttonName } = props;

  return (
    <div className="flex flex-col gap-4 h-full">
      {images !== null ? (
        <div className="flex flex-col justify-between gap-2 bg-white p-4 drop-shadow-sm h-full w-full ">
          <h1 className=" font-bold text-base md:text-xl">{title}</h1>

          {images.length !== 1 ? (
            <div>
              <Link
                to={"/products-listing-page"}
                className="grid grid-cols-2 place-items-center gap-2"
              >
                {" "}
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="cursor-pointer space-y-1 md:space-y-0 h-full"
                  >
                    <img className="w-96" src={image.imageUrl} alt="product" />
                    {image.label && <p className="text-sm">{image.label}</p>}
                  </div>
                ))}
              </Link>
            </div>
          ) : (
            <img src={images[0].imageUrl} alt="" />
          )}

          <p className="cursor-pointer w-fit text-cyan-800 text-sm hover:underline hover:text-orange-700">
            {buttonName}
          </p>
        </div>
      ) : null}
      {images === null ? (
        // advertisement
        <>
          <div className="p-4 bg-white drop-shadow-sm">
            <h1 className="text-xl font-bold leading-6 mb-3">{title}</h1>
            <Link to={"/sign-in"}>
              <button className="sign-in-button bg-yellow-300 w-full p-3 md:p-1.5 rounded-lg text-sm duration-200 hover:bg-yellow-400 ">
                Sign in securely
              </button>
            </Link>
          </div>
          <div className="cursor-pointer relative">
            <img
              className="object-cover object-center"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/LR_379X304._SY304_CB595115209_.jpg"
              alt="img"
            />
            <p className="absolute -bottom-[5.5%] right-0 z-30 text-[12px] text-gray-500">
              Sponsored
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};
