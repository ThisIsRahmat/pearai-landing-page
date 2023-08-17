'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// // import PhoneFrame  from '/components/PhoneFrame'
import Phone  from '../assets/rectangle.svg';
import VideoDemo from './VideoDemo'
import Spline from '@splinetool/react-spline';


const designStyles = [
  {
    title: 'Contemporary',
    photos: [
      'contemporary_1.png',
      'contemporary_2.png',
      'contemporary_3.png',
      'contemporary_4.png',
      'contemporary_5.png',
      'contemporary_6.png',
    ],
    photo_titles: [
      'contemporary_1.png',
      'Small Glass Vase $31.99',
      'Flores Table Lamp with Pleated Shade $69.97',
      'Wabi-Sabi Wall Art $103.13',
      'Jaxx Green Marble Side Table Short $499',
      'contemporary_6.png',
    ], 
    product_links: [
      'https://www.westelm.com/products/benson-leather-chair-h11998/?pkey=cliving-room-chairs',
      'https://www2.hm.com/en_us/productpage.1124569001.html',
      'https://www.crateandbarrel.com/flores-table-lamp-with-pleated-shade/s467511?localedetail=US&storeid=633&a=1552&campaignid=10461646743&adgroupid=103999389019&targetid=pla-298538622663&pla_sku=467511&pcat=HSW&ag=adult&gclid=CjwKCAjwt52mBhB5EiwA05YKo5KgzFM1v7jhpX6uLjvQTF26sbh82_wbS_amOI5wd2Qc3mBwMRrtzBoC-dkQAvD_BwE',
      'https://www.etsy.com/listing/1517624894/wabi-sabi-wall-art-brown-textured-art?external=1&rec_type=ad&ref=landingpage_similar_listing_top-4&pro=1&frs=1&plkey=96075504ded112a2f1f04bc8a78a1341ebaf9fc4%3A1517624894',
      'https://www.cb2.com/jaxx-green-marble-side-table-short/s647816',
      'https://www.westelm.com/products/terracotta-vases-d15591/?pkey=cvases-botanicals',
    ],
    spline_url: 'contemporary_demo.mp4',
  },
    {
    title: 'Mid-century modern',
    photos: [
      'mid-century_modern_1.png',
      'mid-century_modern_2.png',
      'mid-century_modern_3.png',
      'mid-century_modern_4.png',
      'mid-century_modern_5.png',
      'mid-century_modern_6.png',
    ],
    photo_titles: [
      'Ogden Burled Wood Console Table $300',
      'contemporary_2.png',
      'Albers Red Yellow Green Geometric Squares $153.99',
      'contemporary_4.png',
      'Nora Dining Chair $313',
      'Dome Antique Table Lamp $149.99',
    ],
    product_links: [
      'https://www.target.com/p/ogden-burled-wood-console-table-threshold-designed-with-studio-mcgee/-/A-85630185',
      'https://www.westelm.com/products/mid-century-turned-wood-tabletop-planters-d9746/?cm_src=WsiPip1&recstrat=View-View-1%7CVCB-GRP-AFF-QNT&cm_sp=ossa_id_5_shown_6_v2',
      'https://www.wayfair.com/decor-pillows/pdp/idea4wall-framed-canvas-print-wall-art-set-albers-red-yellow-green-geometric-squares-abstract-shapes-illustrations-modern-art-decorative-multicolor-for-living-room-bedroom-office-sfta3545.html?piid=72679377%2C71660076',
      'https://www.westelm.com/products/margo-selby-puzzle-geo-pillow-cover-t5576/?catalogId=71&sku=2257989&cm_ven=PLA&cm_cat=Google&cm_pla=Pillows%20%26%20Decor%20%3E%20Pillows&region_id=669950&cm_ite=2257989_14465514686&gclid=CjwKCAjwt52mBhB5EiwA05YKo-sGPI7kyx_1FFw5dCH3f3-XH13ZF17wda86gSldryvArRGT6cpFqxoCCKYQAvD_BwE',
      'https://edloefinch.com/products/nora-dining-chair-olive-green-set-of-2?variant=9533260922916&utm_source=google_shopping&utm_medium=organic&utm_campaign=organic_shopping&utm_content=shopify_US_979268501540_9533260922916&gclid=CjwKCAjwt52mBhB5EiwA05YKo726ngMkbTdDQH8Xmg3iM9ZPYtKgdXOJqBKjQnriBfkeQdURjANINRoCxs0QAvD_BwE',
      'https://www.worldmarket.com/p/dome-antique-brass-and-clear-glass-table-lamp-57006609.html?store=store393',
    ],
    spline_url: 'contemporary_demo.mp4',
  },
  {
    title: 'Scandinavian',
    photos: [
      'scandinavian_1.png',
      'scandinavian_2.png',
      'scandinavian_3.png',
      'scandinavian_4.png',
      'scandinavian_5.png',
      'scandinavian_6.png',
    ],
    photo_titles: [
      'contemporary_1.png',
      'Plastic Chair with Wooden Legs - White $59.36 ',
      'Barnes Golden Natural Wood Nesting Coffee Tables 2 Piece Set $299.99',
      'Black Bretson Accent Stool $96',
      'AVEO Table Lamp ',
      'Graphic Neutrals NO3 Poster $8.97',
    ],
    product_links: [
      'https://www.walmart.com/ip/Nordic-U-Shape-Vase-for-Flowers-Modern-Ceramic-Minimalist-Nordic-Boho-Vase-for-Centrepiece-Home-Decor-Entranceway-Kitchen-Table-or-Gift/2287871006?wmlspartner=wlpa&selectedSellerId=101294080',
      'https://www.bedbathandbeyond.com/Home-Garden/Elon-Series-Plastic-Chair-with-Wood-Base/18063040/product.html?opre=1&option=30109767',
      'https://www.worldmarket.com/p/barnes-golden-natural-wood-nesting-coffee-tables-2-piece-set-622478.html?store=store393&lid=58700008480351168&campaignid=20375016143&channel=local&acctid=21700000001660222&storeid=CP388&merchid=5165106&network=x&mrkgcl=660&product_id=622478&prodlang=en&prodctry=US&camp=ppc%3Agoogle%3A_ssc_%2B_Furniture&gclid=CjwKCAjwt52mBhB5EiwA05YKo1Zh2rWDSqPW--f0zD4LKUVmaFZUTCQQPVkTRZBCfjF-qlm1x1_deRoCLv0QAvD_BwE&locationid=9003529&device=c&gclsrc=aw.ds',
      'https://www.jossandmain.com/furniture/pdp/bretson-solid-wood-utility-stool-j001325522.html?piid=1990591876',
      'https://www.amazon.com/AVEO-Designs-Bedside-Bedrooms-Decoration/dp/B09Q3C224L',
      'https://desenio.com/p/posters-prints/art-prints/abstract-art/neutral-graphic-shapes/',
    ],
    spline_url: 'contemporary_demo.mp4',
  },

  {
    title: 'Coastal',
    photos: [
      'coastal_1.png',
      'coastal_2.png',
      'coastal_3.png',
      'coastal_4.png',
      'coastal_5.png',
      'coastal_6.png',
    ],
    photo_titles: [
      'Faux Potted Plants $79.95',
      'Slatted Wood Accent Chair $254.99',
      'Sylvie Pale Blue Sea $54.99',
      'White Seagrass Hamper With Lid $89.99',
      'Costa Mesa Round Rattan Table $130.00',
      'Blue Striped Linen Pillow Cover $44.00',
    ],
    product_links: [
      'https://www.crateandbarrel.com/faux-potted-fern/s575374?localedetail=US&srsltid=ASuE1wQb9PHcCZjodVg4PxJYpOiaLCN--mcDhA4SDuqbJ5VrIW1xH9bvaog',
      'https://www.target.com/p/slatted-wood-accent-chair-with-cushions-cream-natural-hearth-38-hand-8482-with-magnolia/-/A-80176894?ref=tgt_adv_xsf&AFID=google&CPNG=Furniture&adgroup=324-7',
      'https://www.target.com/p/18-34-x-24-34-sylvie-pale-blue-sea-by-the-creative-bunch-studio-framed-wall-canvas-gray-kate-38-laurel-all-things-decor/-/A-85269008?ref=tgt_adv_xsf&AFID=google&CPNG=Home%2BDecor&adgroup=74-12&lnm=d30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e',
      'https://www.containerstore.com/s/laundry-cleaning/hampers-carts/white-seagrass-hamper-with-lid/12d?productId=11014371&country=US&currency=USD&cid=cse%7cPMAX%7cGoogle%7cTCSP_X_US_EN_OtherHome_PMAX_X_18789347654___en%7c&utm_source=google&utm_campaign=pla&adpos=&scid=scplp10081830&sc_intid=10081830&gclid=CjwKCAjwt52mBhB5EiwA05YKo1zfKMcuDhS3Fn2LkKPACcHWBvd-N-rvfKdyE20FQKMreb4oFVvbqRoCAvsQAvD_BwE&gclsrc=aw.ds',
      'https://www.target.com/p/costa-mesa-round-rattan-wrapped-accent-table-tan-threshold-8482-designed-with-studio-mcgee/-/A-78182431?ref=tgt_adv_xsf&AFID=google&CPNG=Furniture&adgroup=249-17&lnm=d30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e',
      'https://www.etsy.com/listing/1521144795/blue-striped-linen-pillow-cover-modern?gpla=1&gao=1&',
    ],
    spline_url: 'contemporary_demo.mp4',
  },
];

export default function Demo() {

  const [selectedStyle, setSelectedStyle] = useState('Contemporary');

  const handleStyleClick = (style) => {
    setSelectedStyle((prevStyle) => (prevStyle === style ? prevStyle : style));
  };

    // Find the selected design style based on the selectedStyle
    const selectedDesignStyle = designStyles.find((style) => style.title === selectedStyle);


  return (
    <div className="relative flex justify-center flex-row space-x-3">  {/* Add space-x-10 for gap */}



{/* List of Design Styles */}

<div className="sm:space-y-2 w-1/3 sm:text-right text-[13.13px] sm:text-[19.04px]  z-05"> 
<div className="flex-col">
  <div class="basis-1/4">
  
  {designStyles.map((style) => (
    <div key={style.title} className="mb-1">
      <button
        className={`uppercase sm:text-[19.04px] p-1 sm:-mt-1 -ml-10 tracking-wide ${
          selectedStyle === style.title
            ? 'text-[#D4BBF8] font-semibold bg-[#004F30] rounded-md p-1 sm:pl-3 pr-3'
            : 'text-[#004F30] font-semibold p-1 sm:pl-3 pr-3'
        }`}
        style={{ whiteSpace: 'nowrap' }}
        onClick={() => handleStyleClick(style.title)}
      >
        {style.title}
      </button>
    </div>
  ))}
  </div>


  <div className="flex justify-center items-center mt-10">
  {/* VideoDemo */}
  <div className="relative z-10 sm:scale-[.95] basis-1/2 rotate-[7deg] bottom-6 left-6">
    <VideoDemo className="absolute bottom-2 left-3" />
  </div>
        
{/* Arrow */}
<div className="-left-55 flex scale-[.75] absolute bottom-20">
    {/* Arrow SVG */}
    <span className="sr-only">Arrow design</span>
    <img
      className=" left-10 w-auto rotate-130.49° h-6 sm:h-10"
      src="arrow.svg"
      alt="Arrow"
    />
  </div>

  </div>

  
  </div>
  </div>

{/* Table with Interior Projects */}
<div className=" bg-white sm:border-[2.95px]  border-green-700 rounded-lg overflow-hidden mb-10 -mt-2 z-05 " style={{ width: '427.77px', height: '760px' }}>
  <table className="  sm:border-[2.95px] w-full border-collapse rounded-l overflow-hidden  border-green-700 sm:text-[12.23px] text-[4.9px] text-[#004F30]" style={{ background: 'white' }}>
    <tbody>
      {selectedDesignStyle &&
        [...Array(Math.ceil(selectedDesignStyle.photos.length / 2))].map((_, rowIndex) => (
          <tr key={rowIndex} style={{ height: `${731 / Math.ceil(selectedDesignStyle.photos.length / 2)}px` }}>
            {[0, 1].map((colIndex) => {
              const photoIndex = rowIndex * 2 + colIndex;
              const photo = selectedDesignStyle.photos[photoIndex];
              const photo_title = selectedDesignStyle.photo_titles[photoIndex];
              const product_link = selectedDesignStyle.product_links[photoIndex];
              return (
                <td
                  key={colIndex}
                  className="border-[2.95px] rounded-lg border-green-700 p-4"
                  style={{ width: '50%', position: 'relative' }}
                >
                    <Link href={product_link}>
                  <div
                    className="h-full flex items-center justify-center"
                    style={{ width: '100%', paddingTop: '98%', position: 'relative' }}
                  >
                  
                    {photo && (
                      <img
                        src={`/${selectedStyle}/${photo}`}
                        layout="fill"
                        objectFit="contain"
                        alt="Interior product"
                      />
                    )}
                  </div>

           
                  <div className="text-center mt-2">
  {photo_title && (
     <p
     className="text-[12.23px] text-center text-transform: capitalize mb-2 leading-[15px] font-bold hover:underline-offset-2"
   >
      {photo_title}
    </p>
  )}


</div>
</Link>

                </td>
              );
            })}
          </tr>
        ))}
    </tbody>
  </table>
</div>




    </div>
  
        

  );
}
 