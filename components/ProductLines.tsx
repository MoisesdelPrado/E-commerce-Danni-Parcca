import React, { useState } from 'react';
import ProductBox from './ProductBox';
import Link from 'next/link';
import { ProductInfo } from '../types/index';


const ProductLines = (products:any) => {
  
    
    const [main, showMain] = useState({display: "none"});
    const [summit, showSummit] = useState({display: "none"});
    const [fields, showFields] = useState({display: "none"});
    const [waterfall, showWaterfall] = useState({display: "none"});
    const [meadows, showMeadows] = useState({display: "none"});
    const [farmland, showFarmland] = useState({display: "none"});
    const [offshore, showOffshore] = useState({display: "none"});
    const [skyline, showSkyline] = useState({display: "none"});

  return (
    <div className="mx-auto mt-52 w-full pt-32 pb-20">
      <div className="mx-auto lg:w-3/4 sm:w-5/6 flex flex-col shadow-2xl">
          <div className="mx-auto text-center align-center">
            PRODUCT LINES
          </div>
                <div className="w-full mx-auto justify-center flex flex-row">
                  <div id="Summit" 
                  className="flex flex-grow-1 w-full p-1 h-96 justify-center transition-transform ease-in-out delay-1000 duration-1000 bg-summit" 
                  onMouseOver={() => {
                    showMain({display:"flex"}); 
                    showSummit({display:"flex"});
                    showFields({display:"none"});
                    showWaterfall({display:"none"});
                    showMeadows({display:"none"});
                    showFarmland({display:"none"});
                    showOffshore({display:"none"});
                    showSkyline({display:"none"});
                  }}
                  >
                    SUMMIT
                  </div>
                  <div id="Fields" 
                  className="flex flex-grow-1 w-full p-1 justify-center transition-transform ease-in-out delay-1000 duration-1000 bg-fields"
                  onMouseOver={() => {
                    showMain({display:"flex"}); 
                    showSummit({display:"none"});
                    showFields({display:"flex"});
                    showWaterfall({display:"none"});
                    showMeadows({display:"none"});
                    showFarmland({display:"none"});
                    showOffshore({display:"none"});
                    showSkyline({display:"none"});
                  }}
                  >
                    FIELDS
                  </div>
                  <div id="Waterfall" 
                  className="flex flex-grow-1 w-full p-1 mx-auto justify-center bg-waterfall"
                  onMouseOver={() => {
                    showMain({display:"flex"}); 
                    showSummit({display:"none"});
                    showFields({display:"none"});
                    showWaterfall({display:"flex"});
                    showMeadows({display:"none"});
                    showFarmland({display:"none"});
                    showOffshore({display:"none"});
                    showSkyline({display:"none"});
                  }}
                  >
                    WATERFALL
                  </div>
                  <div id="Meadows" 
                  className="flex flex-grow-1 w-full p-1 justify-center bg-meadows"
                  onMouseOver={() => {
                    showMain({display:"flex"}); 
                    showSummit({display:"none"});
                    showFields({display:"none"});
                    showWaterfall({display:"none"});
                    showMeadows({display:"flex"});
                    showFarmland({display:"none"});
                    showOffshore({display:"none"});
                    showSkyline({display:"none"});
                  }}
                  >
                    MEADOWS
                  </div>
                  <div id="Farmland" 
                  className="flex flex-grow-1 w-full p-1 justify-center bg-farmland"
                  onMouseOver={() => {
                    showMain({display:"flex"}); 
                    showSummit({display:"none"});
                    showFields({display:"none"});
                    showWaterfall({display:"none"});
                    showMeadows({display:"none"});
                    showFarmland({display:"flex"});
                    showOffshore({display:"none"});
                    showSkyline({display:"none"});
                  }}
                  >
                    FARMLAND
                  </div>
                  <div id="Offshore" 
                  className="flex flex-grow-1 w-full p-1 justify-center bg-offshore"
                  onMouseOver={() => {
                    showMain({display:"flex"}); 
                    showSummit({display:"none"});
                    showFields({display:"none"});
                    showWaterfall({display:"none"});
                    showMeadows({display:"none"});
                    showFarmland({display:"none"});
                    showOffshore({display:"flex"});
                    showSkyline({display:"none"});
                  }}
                  >
                    OFFSHORE
                  </div>
                  <div id="Skyline" 
                  className="flex flex-grow-1 w-full p-1 justify-center bg-skyline"
                  onMouseOver={() => {
                    showMain({display:"flex"}); 
                    showSummit({display:"none"});
                    showFields({display:"none"});
                    showWaterfall({display:"none"});
                    showMeadows({display:"none"});
                    showFarmland({display:"none"});
                    showOffshore({display:"none"});
                    showSkyline({display:"flex"});
                  }}
                  >
                    SKYLINE
                  </div>
                </div>
          <div id="main" className="w-full mx-auto text-center align-center" style={main}>
              <div id="SummitShowBox" className="flex flex-row gap-5 w-full p-10 transition-transform ease-in-out delay-1000 duration-1000 bg-summit" style={summit}>
                    {products == null?
                    <div></div>
                    :
                    products
                    .filter((product:ProductInfo) => product.Product_line == "Summit")
                    .map((product:ProductInfo) => {
                      return (
                        <div>
                          <Link 
                          key={product.Product_name} 
                          href={{
                            pathname:`/products/[productPage]`,
                            query: { productPage: product.Product_name }
                          }}
                          as={`products/${product.Product_name}`}
                          >
                            <a><ProductBox key={product.Id} prod={product} /></a>
                          </Link>
                        </div>
                      )
                    })}
              </div>
            <div id="FieldsShowBox" className="flex flex-row gap-5 w-full p-10 transition-transform bg-fields" style={fields}>
                  { products &&
                    (products
                    .filter((product:ProductInfo) => product.Product_line == "Fields")
                    .map((product:ProductInfo) => {
                      return (
                        <div>
                          <Link 
                          key={product.Product_name} 
                          href={{
                            pathname:`/products/[productPage]`,
                            query: { productPage: product.Product_name }
                          }}
                          as={`products/${product.Product_name}`}
                          >
                            <a><ProductBox key={product.Id} prod={product} /></a>
                          </Link>
                        </div>
                      )
                    }))}
            </div>
              <div id="WaterfallShowBox" className="flex flex-row gap-5 w-full p-10 transition-transform bg-waterfall" style={waterfall}>
                    { products &&
                    (products
                      .filter((product:ProductInfo) => product.Product_line == "Waterfall")
                      .map((product:ProductInfo) => {
                        return (
                          <div>
                            <Link 
                            key={product.Product_name} 
                            href={{
                              pathname:`/products/[productPage]`,
                              query: { productPage: product.Product_name }
                            }}
                            as={`products/${product.Product_name}`}
                            >
                              <a><ProductBox key={product.Id} prod={product} /></a>
                            </Link>
                          </div>
                        )
                      }))}
              </div>
              <div id="MeadowsShowBox" className="flex flex-row gap-5 w-full p-10 transition-transform bg-meadows" style={meadows}>
                    { products &&
                    (products
                      .filter((product:ProductInfo) => product.Product_line == "Meadows")
                      .map((product:ProductInfo) => {
                        return (
                          <div>
                            <Link 
                            key={product.Product_name} 
                            href={{
                              pathname:`/products/[productPage]`,
                              query: { productPage: product.Product_name }
                            }}
                            as={`products/${product.Product_name}`}
                            >
                              <a><ProductBox key={product.Id} prod={product} /></a>
                            </Link>
                          </div>
                        )
                      }))}
              </div>
              <div id="FarmlandShowBox" className="flex flex-row gap-5 w-full p-10 transition-transform bg-farmland" style={farmland}>
                    { products &&
                    (products
                      .filter((product:ProductInfo) => product.Product_line == "Farmland")
                      .map((product:ProductInfo) => {
                        return (
                          <div>
                            <Link 
                            key={product.Product_name} 
                            href={{
                              pathname:`/products/[productPage]`,
                              query: { productPage: product.Product_name }
                            }}
                            as={`products/${product.Product_name}`}
                            >
                              <a><ProductBox key={product.Id} prod={product} /></a>
                            </Link>
                          </div>
                        )
                      }))}
              </div>
              <div id="OffshoreShowBox" className="flex flex-row gap-5 w-full p-10 transition-transform bg-offshore" style={offshore}>
                    {products &&
                    (products
                      .filter((product:ProductInfo) => product.Product_line == "Offshore")
                      .map((product:ProductInfo) => {
                        return (
                          <div>
                            <Link 
                            key={product.Product_name} 
                            href={{
                              pathname:`/products/[productPage]`,
                              query: { productPage: product.Product_name }
                            }}
                            as={`products/${product.Product_name}`}
                            >
                              <a><ProductBox key={product.Id} prod={product} /></a>
                            </Link>
                          </div>
                        )
                      }))}
              </div>
              <div id="SkylineShowBox" className="flex flex-row gap-5 w-full p-10 transition-transform bg-skyline" style={skyline}>
                    { products &&
                    (products
                      .filter((product:ProductInfo) => product.Product_line == "Skyline")
                      .map((product:ProductInfo) => {
                        return (
                          <div>
                            <Link 
                            key={product.Product_name} 
                            href={{
                              pathname:`/products/[productPage]`,
                              query: { productPage: product.Product_name }
                            }}
                            as={`products/${product.Product_name}`}
                            >
                              <a><ProductBox key={product.Id} prod={product} /></a>
                            </Link>
                          </div>
                        )
                      }))}
              </div>
          </div>
      </div>
    </div>
  )
};

export default ProductLines;