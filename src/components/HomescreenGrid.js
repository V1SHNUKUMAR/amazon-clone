import React from "react";

const HomescreenGrid = () => {
  const gridItemsData = [
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

  return (
    <div className="main-grid p-4 pt-0 absolute top-[70%] z-10 w-full md:top-[60%] lg:top-[50%]">
      <div className="grid place-items-center gap-4 md:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <GridItem
          title={gridItemsData[0].title}
          images={gridItemsData[0].images}
          buttonName={gridItemsData[0].buttonName}
        />
        <GridItem
          title={gridItemsData[1].title}
          images={gridItemsData[1].images}
          buttonName={gridItemsData[1].buttonName}
        />
        <GridItem
          title={gridItemsData[2].title}
          images={gridItemsData[2].images}
          buttonName={gridItemsData[2].buttonName}
        />
        {/* sign in + ad component*/}
        <GridItem
          title={"Sign in for your best experience"}
          images={null}
          buttonName={null}
        />
        <GridItem
          title={gridItemsData[3].title}
          images={gridItemsData[3].images}
          buttonName={gridItemsData[3].buttonName}
        />
        <GridItem
          title={gridItemsData[4].title}
          images={gridItemsData[4].images}
          buttonName={gridItemsData[4].buttonName}
        />
        <GridItem
          title={gridItemsData[5].title}
          images={gridItemsData[5].images}
          buttonName={gridItemsData[5].buttonName}
        />
        <GridItem
          title={gridItemsData[6].title}
          images={gridItemsData[6].images}
          buttonName={gridItemsData[6].buttonName}
        />
      </div>
    </div>
  );
};

export default HomescreenGrid;

const GridItem = (props) => {
  const { title, images, buttonName } = props;

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col justify-between gap-4 bg-white p-4 drop-shadow-sm h-full w-full ">
        <h1 className="text-sm font-bold sm:text-base md:text-xl">{title}</h1>
        {images !== null ? (
          <div className="grid grid-cols-2 place-items-center gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                // style={images.length === 1 ? { aspectRatio: "1/1" } : null}
                className="cursor-pointer space-y-1 md:space-y-0 h-full"
              >
                <img className="w-96" src={image.imageUrl} alt="product" />
                {image.label && (
                  <p className="text-[.7rem] md:text-xs">{image.label}</p>
                )}
              </div>
            ))}
          </div>
        ) : null}
        <p className="cursor-pointer w-fit text-cyan-800 text-xs hover:underline hover:text-orange-700 md:text-sm">
          {buttonName}
        </p>

        {images === null ? (
          <button className="sign-in-button bg-yellow-300 w-full p-1.5 rounded-lg text-sm duration-200 hover:bg-yellow-400 ">
            Sign in securely
          </button>
        ) : null}
      </div>
      {images === null ? (
        <div className="ad cursor-pointer overflow-hidden">
          <img
            className="object-cover object-center"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/malar/March23/LR_379X304._SY304_CB595115209_.jpg"
            alt="img"
          />
        </div>
      ) : null}
    </div>
  );
};
