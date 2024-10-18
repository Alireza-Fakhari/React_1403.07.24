import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./card01.css";
import "./card02.css";
import "./card03.css";
import Card04 from "./component/Card/Card04";

// Card01
const Card01 = ReactDOM.createRoot(document.getElementById("card01"));
Card01.render(
  <React.StrictMode>
    <div class="card01-width">
      <div class="swiper-slide swiper-slide-active">
        <div class="sc-item-content">
          <div class="img-container">
            <img
              class="img-product"
              decoding="async"
              src="./assets/course01.webp"
              alt="تصویر محصول"
            />
            <div class="image-border"></div>
          </div>
          <div class="product-content-area">
            <div class="product-content-header">
              <div class="product-cats">
                <a href="">ux</a> / <a href="">دیزاین</a>
              </div>
              <a href="" class="product-title">
                طراحی تجربه کاربری (ux)
              </a>
            </div>
            <div class="product-meta">
              <div class="product-time-duration">
                <div class="icon-container ml-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M27.0938 14.2037C27.0938 21.5493 21.1405 27.5013 13.7962 27.5013C6.45199 27.5013 0.498657 21.5493 0.498657 14.2037C0.498657 6.86079 6.45199 0.906128 13.7962 0.906128C21.1405 0.906128 27.0938 6.86079 27.0938 14.2037Z"
                      fill="#83B4FF"
                    ></path>
                    <path
                      d="M18.5484 19.276C18.3742 19.276 18.1987 19.2308 18.0378 19.1363L12.8171 16.0221C12.5166 15.8412 12.3318 15.5154 12.3318 15.1644V8.45307C12.3318 7.90255 12.7786 7.45575 13.3291 7.45575C13.8796 7.45575 14.3264 7.90255 14.3264 8.45307V14.5979L19.0604 17.421C19.5324 17.7042 19.688 18.3159 19.4061 18.7893C19.2186 19.1018 18.8875 19.276 18.5484 19.276Z"
                      fill="#83B4FF"
                    ></path>
                  </svg>
                </div>
                <span class="time">2 ساعت</span>
              </div>
              <div class="product-author">
                <img
                  decoding="async"
                  src="./assets/course01-avatar.png"
                  alt="تصویر نویسنده"
                />
                <span>مدیر سایت</span>
              </div>
            </div>
            <div class="product-button-area">
              <div class="product-price">
                <span class="price-prefix ml-2"> قیمت </span>
                <span class="woocommerce-Price-amount amount">
                  <bdi>
                    {" "}
                    4/000{" "}
                    <span class="woocommerce-Price-currencySymbol">تومان</span>
                  </bdi>
                </span>
              </div>
              <a href="#" class="add-cart-btn">
                خرید
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide swiper-slide-active">
        <div class="sc-item-content">
          <div class="img-container">
            <img
              class="img-product"
              decoding="async"
              src="./assets/course01-02.webp"
              alt="تصویر محصول"
            />
            <div class="image-border"></div>
          </div>
          <div class="product-content-area">
            <div class="product-content-header">
              <div class="product-cats">
                <a href="">برندینگ</a> / <a href="">لوگو</a>
              </div>
              <a href="" class="product-title">
                تایپوگرافی و طراحی لوگو
              </a>
            </div>
            <div class="product-meta">
              <div class="product-time-duration">
                <div class="icon-container ml-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M27.0938 14.2037C27.0938 21.5493 21.1405 27.5013 13.7962 27.5013C6.45199 27.5013 0.498657 21.5493 0.498657 14.2037C0.498657 6.86079 6.45199 0.906128 13.7962 0.906128C21.1405 0.906128 27.0938 6.86079 27.0938 14.2037Z"
                      fill="#83B4FF"
                    ></path>
                    <path
                      d="M18.5484 19.276C18.3742 19.276 18.1987 19.2308 18.0378 19.1363L12.8171 16.0221C12.5166 15.8412 12.3318 15.5154 12.3318 15.1644V8.45307C12.3318 7.90255 12.7786 7.45575 13.3291 7.45575C13.8796 7.45575 14.3264 7.90255 14.3264 8.45307V14.5979L19.0604 17.421C19.5324 17.7042 19.688 18.3159 19.4061 18.7893C19.2186 19.1018 18.8875 19.276 18.5484 19.276Z"
                      fill="#83B4FF"
                    ></path>
                  </svg>
                </div>
                <span class="time">1 ساعت</span>
              </div>
              <div class="product-author">
                <img
                  decoding="async"
                  src="./assets/course01-avatar.png"
                  alt="تصویر نویسنده"
                />
                <span>مدیر سایت</span>
              </div>
            </div>
            <div class="product-button-area">
              <div class="product-price">
                <span class="price-prefix ml-2"> قیمت </span>
                <span class="woocommerce-Price-amount amount">
                  <bdi>
                    {" "}
                    2/000{" "}
                    <span class="woocommerce-Price-currencySymbol">تومان</span>
                  </bdi>
                </span>
              </div>
              <a href="#" class="add-cart-btn">
                خرید
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide swiper-slide-active">
        <div class="sc-item-content">
          <div class="img-container">
            <img
              class="img-product"
              decoding="async"
              src="./assets/course01-03.webp"
              alt="تصویر محصول"
            />
            <div class="image-border"></div>
          </div>
          <div class="product-content-area">
            <div class="product-content-header">
              <div class="product-cats">
                <a href="">برندینگ</a> / <a href="">تولید محتوا</a>
              </div>
              <a href="" class="product-title">
                دوره جامع استراتژی محتوا
              </a>
            </div>
            <div class="product-meta">
              <div class="product-time-duration">
                <div class="icon-container ml-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M27.0938 14.2037C27.0938 21.5493 21.1405 27.5013 13.7962 27.5013C6.45199 27.5013 0.498657 21.5493 0.498657 14.2037C0.498657 6.86079 6.45199 0.906128 13.7962 0.906128C21.1405 0.906128 27.0938 6.86079 27.0938 14.2037Z"
                      fill="#83B4FF"
                    ></path>
                    <path
                      d="M18.5484 19.276C18.3742 19.276 18.1987 19.2308 18.0378 19.1363L12.8171 16.0221C12.5166 15.8412 12.3318 15.5154 12.3318 15.1644V8.45307C12.3318 7.90255 12.7786 7.45575 13.3291 7.45575C13.8796 7.45575 14.3264 7.90255 14.3264 8.45307V14.5979L19.0604 17.421C19.5324 17.7042 19.688 18.3159 19.4061 18.7893C19.2186 19.1018 18.8875 19.276 18.5484 19.276Z"
                      fill="#83B4FF"
                    ></path>
                  </svg>
                </div>
                <span class="time">9 ساعت و نیم</span>
              </div>
              <div class="product-author">
                <img
                  decoding="async"
                  src="./assets/course01-avatar.png"
                  alt="تصویر نویسنده"
                />
                <span>مدیر سایت</span>
              </div>
            </div>
            <div class="product-button-area">
              <div class="product-price">
                <span class="price-prefix ml-2"> قیمت </span>
                <span class="woocommerce-Price-amount amount">
                  <bdi>
                    {" "}
                    3/500{" "}
                    <span class="woocommerce-Price-currencySymbol">تومان</span>
                  </bdi>
                </span>
              </div>
              <a href="#" class="add-cart-btn">
                خرید
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-slide swiper-slide-active">
        <div class="sc-item-content">
          <div class="img-container">
            <img
              class="img-product"
              decoding="async"
              src="./assets/course01-04.webp"
              alt="تصویر محصول"
            />
            <div class="image-border"></div>
          </div>
          <div class="product-content-area">
            <div class="product-content-header">
              <div class="product-cats">
                <a href="">دیزاین</a> / <a href="">رابط کاربری</a>
              </div>
              <a href="" class="product-title">
                آموزش جامع طراحی UI/UX
              </a>
            </div>
            <div class="product-meta">
              <div class="product-time-duration">
                <div class="icon-container ml-1">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      d="M27.0938 14.2037C27.0938 21.5493 21.1405 27.5013 13.7962 27.5013C6.45199 27.5013 0.498657 21.5493 0.498657 14.2037C0.498657 6.86079 6.45199 0.906128 13.7962 0.906128C21.1405 0.906128 27.0938 6.86079 27.0938 14.2037Z"
                      fill="#83B4FF"
                    ></path>
                    <path
                      d="M18.5484 19.276C18.3742 19.276 18.1987 19.2308 18.0378 19.1363L12.8171 16.0221C12.5166 15.8412 12.3318 15.5154 12.3318 15.1644V8.45307C12.3318 7.90255 12.7786 7.45575 13.3291 7.45575C13.8796 7.45575 14.3264 7.90255 14.3264 8.45307V14.5979L19.0604 17.421C19.5324 17.7042 19.688 18.3159 19.4061 18.7893C19.2186 19.1018 18.8875 19.276 18.5484 19.276Z"
                      fill="#83B4FF"
                    ></path>
                  </svg>
                </div>
                <span class="time">2 ساعت و نیم</span>
              </div>
              <div class="product-author">
                <img
                  decoding="async"
                  src="./assets/course01-avatar.png"
                  alt="تصویر نویسنده"
                />
                <span>مدیر سایت</span>
              </div>
            </div>
            <div class="product-button-area">
              <div class="product-price">
                <span class="price-prefix ml-2"> قیمت </span>
                <span class="woocommerce-Price-amount amount">
                  <bdi>
                    {" "}
                    1/500{" "}
                    <span class="woocommerce-Price-currencySymbol">تومان</span>
                  </bdi>
                </span>
              </div>
              <a href="#" class="add-cart-btn">
                خرید
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>
);

// Card02
const Card02 = ReactDOM.createRoot(document.getElementById("card02"));
Card02.render(
    React.createElement("div", {className: "card02-width"},
      React.createElement("div", {className: "swiper-slide-02"},
        React.createElement("div", {className: "post-item-content-02"},
          React.createElement("div", {className: "post-content-top-02"},
            React.createElement("div", {className: "post-cover-02"},
              React.createElement("a", {href: ""},
                React.createElement("img", {className: "attachment-full-02", src: "./assets/course02-01.webp"})
              )
            ),
            React.createElement("div", {className: "post-details-02"},
              React.createElement("div", {className: "post-content-header-02"},
                React.createElement("div", {className: "post-title-wrap-02"},
                  React.createElement("a",{href: "#",},
                    React.createElement("h2", {className: "post-title-02"}, "راه اندازی SBI برای نمایشگاه جهانی 2025")
                  ),
                  React.createElement("span", {className: "ah-post-like-btn-02"},
                    React.createElement("svg", {xmlns: "http://www.w3.org/2000/svg", className: "icon-tabler-heart-02", width: "44px", height: "44px", viewBox: "0 0 24 24", stroke: "#333", fill: "#fefefe"},
                      React.createElement("path", {stroke: "none", d: "M0 0h24v24H0z", fill: "none"}),
                      React.createElement("path", {d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"})
                    )
                  )
                )
              )
            )
          ),
          React.createElement("div", {className: "post-button-02"},
            React.createElement("a", {href: "#"},
              React.createElement("span",{},"مشاهده بیشتر")
            )
          )
        )
      ),
      React.createElement("div", {className: "swiper-slide-02"},
        React.createElement("div", {className: "post-item-content-02"},
          React.createElement("div", {className: "post-content-top-02"},
            React.createElement("div", {className: "post-cover-02"},
              React.createElement("a", {href: ""},
                React.createElement("img", {className: "attachment-full-02", src: "./assets/course02-02.webp"})
              )
            ),
            React.createElement("div", {className: "post-details-02"},
              React.createElement("div", {className: "post-content-header-02"},
                React.createElement("div", {className: "post-title-wrap-02"},
                  React.createElement("a",{href: "#",},
                    React.createElement("h2", {className: "post-title-02"}, "راه اندازی SBI برای نمایشگاه جهانی 2025")
                  ),
                  React.createElement("span", {className: "ah-post-like-btn-02"},
                    React.createElement("svg", {xmlns: "http://www.w3.org/2000/svg", className: "icon-tabler-heart-02", width: "44px", height: "44px", viewBox: "0 0 24 24", stroke: "#333", fill: "#fefefe"},
                      React.createElement("path", {stroke: "none", d: "M0 0h24v24H0z", fill: "none"}),
                      React.createElement("path", {d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"})
                    )
                  )
                )
              )
            )
          ),
          React.createElement("div", {className: "post-button-02"},
            React.createElement("a", {href: "#"},
              React.createElement("span",{},"مشاهده بیشتر")
            )
          )
        )
      ),
      React.createElement("div", {className: "swiper-slide-02"},
        React.createElement("div", {className: "post-item-content-02"},
          React.createElement("div", {className: "post-content-top-02"},
            React.createElement("div", {className: "post-cover-02"},
              React.createElement("a", {href: ""},
                React.createElement("img", {className: "attachment-full-02", src: "./assets/course02-03.webp"})
              )
            ),
            React.createElement("div", {className: "post-details-02"},
              React.createElement("div", {className: "post-content-header-02"},
                React.createElement("div", {className: "post-title-wrap-02"},
                  React.createElement("a",{href: "#",},
                    React.createElement("h2", {className: "post-title-02"}, "راه اندازی SBI برای نمایشگاه جهانی 2025")
                  ),
                  React.createElement("span", {className: "ah-post-like-btn-02"},
                    React.createElement("svg", {xmlns: "http://www.w3.org/2000/svg", className: "icon-tabler-heart-02", width: "44px", height: "44px", viewBox: "0 0 24 24", stroke: "#333", fill: "#fefefe"},
                      React.createElement("path", {stroke: "none", d: "M0 0h24v24H0z", fill: "none"}),
                      React.createElement("path", {d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"})
                    )
                  )
                )
              )
            )
          ),
          React.createElement("div", {className: "post-button-02"},
            React.createElement("a", {href: "#"},
              React.createElement("span",{},"مشاهده بیشتر")
            )
          )
        )
      ),
      React.createElement("div", {className: "swiper-slide-02"},
        React.createElement("div", {className: "post-item-content-02"},
          React.createElement("div", {className: "post-content-top-02"},
            React.createElement("div", {className: "post-cover-02"},
              React.createElement("a", {href: ""},
                React.createElement("img", {className: "attachment-full-02", src: "./assets/course02-01.webp"})
              )
            ),
            React.createElement("div", {className: "post-details-02"},
              React.createElement("div", {className: "post-content-header-02"},
                React.createElement("div", {className: "post-title-wrap-02"},
                  React.createElement("a",{href: "#",},
                    React.createElement("h2", {className: "post-title-02"}, "راه اندازی SBI برای نمایشگاه جهانی 2025")
                  ),
                  React.createElement("span", {className: "ah-post-like-btn-02"},
                    React.createElement("svg", {xmlns: "http://www.w3.org/2000/svg", className: "icon-tabler-heart-02", width: "44px", height: "44px", viewBox: "0 0 24 24", stroke: "#333", fill: "#fefefe"},
                      React.createElement("path", {stroke: "none", d: "M0 0h24v24H0z", fill: "none"}),
                      React.createElement("path", {d: "M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"})
                    )
                  )
                )
              )
            )
          ),
          React.createElement("div", {className: "post-button-02"},
            React.createElement("a", {href: "#"},
              React.createElement("span",{},"مشاهده بیشتر")
            )
          )
        )
      )
    )
);


// Card03
const Card03 = ReactDOM.createRoot(document.getElementById("card03"));
let card03 = () => {
  return (
    <div class="card03-width">
      <div class="owl-item active">
        <div class="sc-item-content-03">
          <div class="sc-items-top-03">
            <div class="product-cover-wrap-03">
              <div class="product-cover-03">
                <a class="fimage" href="">
                  <img
                    src="./assets/course03-01.webp"
                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                    alt=""
                    sizes="(max-width: 250px) 100vw, 250px"
                  />
                </a>
              </div>
            </div>
            <a href="" class="ah-has-text">
              <h3 class="product-title-03">دریل گیربکسی AEG</h3>
            </a>
          </div>
          <div class="sc-items-bottom-03">
            <div class="product-price-wrap-03 with-label">
              <div class="mwprprice ah-has-text ah-text-center">
                <span class="price-label-03 pl-2">قیمت:</span>
                <span class="regular-price-03 main-price">
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      1,600,000&nbsp;
                      <span class="woocommerce-Price-currencySymbol">
                        تومان
                      </span>
                    </bdi>
                  </span>
                </span>
              </div>
            </div>
            <div class="item-buttons-03">
              <a href="" class="add-to-cart-btn ah-is-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z"
                    fill="white"
                  ></path>
                  <path
                    d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                    fill="white"
                  ></path>
                </svg>
                افزودن به سبد خرید
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="owl-item active">
        <div class="sc-item-content-03">
          <div class="sc-items-top-03">
            <div class="product-cover-wrap-03">
              <div class="product-cover-03">
                <a class="fimage" href="">
                  <img
                    src="./assets/course03-02.webp"
                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                    alt=""
                    sizes="(max-width: 250px) 100vw, 250px"
                  />
                </a>
              </div>
            </div>
            <a href="" class="ah-has-text">
              <h3 class="product-title-03">دریل چکشی رونیکس 12A</h3>
            </a>
          </div>
          <div class="sc-items-bottom-03">
            <div class="product-price-wrap-03 with-label">
              <div class="mwprprice ah-has-text ah-text-center">
                <span class="price-label-03 pl-2">قیمت:</span>
                <span class="regular-price-03 main-price">
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      1,280,000&nbsp;
                      <span class="woocommerce-Price-currencySymbol">
                        تومان
                      </span>
                    </bdi>
                  </span>
                </span>
              </div>
            </div>
            <div class="item-buttons-03">
              <a href="" class="add-to-cart-btn ah-is-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z"
                    fill="white"
                  ></path>
                  <path
                    d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                    fill="white"
                  ></path>
                </svg>
                افزودن به سبد خرید
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="owl-item active">
        <div class="sc-item-content-03">
          <div class="sc-items-top-03">
            <div class="product-cover-wrap-03">
              <div class="product-cover-03">
                <a class="fimage" href="">
                  <img
                    src="./assets/course03-03.webp"
                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                    alt=""
                    sizes="(max-width: 250px) 100vw, 250px"
                  />
                </a>
              </div>
            </div>
            <a href="" class="ah-has-text">
              <h3 class="product-title-03">دریل چکشی رونیکس 2211</h3>
            </a>
          </div>
          <div class="sc-items-bottom-03">
            <div class="product-price-wrap-03 with-label">
              <div class="mwprprice ah-has-text ah-text-center">
                <span class="price-label-03 pl-2">قیمت:</span>
                <span class="regular-price-03 main-price">
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      1,580,000&nbsp;
                      <span class="woocommerce-Price-currencySymbol">
                        تومان
                      </span>
                    </bdi>
                  </span>
                </span>
              </div>
            </div>
            <div class="item-buttons-03">
              <a href="" class="add-to-cart-btn ah-is-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z"
                    fill="white"
                  ></path>
                  <path
                    d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                    fill="white"
                  ></path>
                </svg>
                افزودن به سبد خرید
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="owl-item active">
        <div class="sc-item-content-03">
          <div class="sc-items-top-03">
            <div class="product-cover-wrap-03">
              <div class="product-cover-03">
                <a class="fimage" href="">
                  <img
                    src="./assets/course03-04.webp"
                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                    alt=""
                    sizes="(max-width: 250px) 100vw, 250px"
                  />
                </a>
              </div>
            </div>
            <a href="" class="ah-has-text">
              <h3 class="product-title-03">مینی فرز ادون مدل AG115</h3>
            </a>
          </div>
          <div class="sc-items-bottom-03">
            <div class="product-price-wrap-03 with-label">
              <div class="mwprprice ah-has-text ah-text-center">
                <span class="price-label-03 pl-2">قیمت:</span>
                <span class="regular-price-03 main-price">
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      1,390,000&nbsp;
                      <span class="woocommerce-Price-currencySymbol">
                        تومان
                      </span>
                    </bdi>
                  </span>
                </span>
              </div>
            </div>
            <div class="item-buttons-03">
              <a href="" class="add-to-cart-btn ah-is-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z"
                    fill="white"
                  ></path>
                  <path
                    d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                    fill="white"
                  ></path>
                </svg>
                افزودن به سبد خرید
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="owl-item active">
        <div class="sc-item-content-03">
          <div class="sc-items-top-03">
            <div class="product-cover-wrap-03">
              <div class="product-cover-03">
                <a class="fimage" href="">
                  <img
                    src="./assets/course03-05.webp"
                    class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image"
                    alt=""
                    sizes="(max-width: 250px) 100vw, 250px"
                  />
                </a>
              </div>
            </div>
            <a href="" class="ah-has-text">
              <h3 class="product-title-03">موتور برق رونیکس 4790</h3>
            </a>
          </div>
          <div class="sc-items-bottom-03">
            <div class="product-price-wrap-03 with-label">
              <div class="mwprprice ah-has-text ah-text-center">
                <span class="price-label-03 pl-2">قیمت:</span>
                <span class="regular-price-03 main-price">
                  <span class="woocommerce-Price-amount amount">
                    <bdi>
                      1,630,000&nbsp;
                      <span class="woocommerce-Price-currencySymbol">
                        تومان
                      </span>
                    </bdi>
                  </span>
                </span>
              </div>
            </div>
            <div class="item-buttons-03">
              <a href="" class="add-to-cart-btn ah-is-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M6 4.5C6 4.91421 5.66421 5.25 5.25 5.25C4.83579 5.25 4.5 4.91421 4.5 4.5C4.5 3.04648 5.05253 1.90123 5.9236 1.12694C6.78087 0.364923 7.9027 0 9 0C10.0973 0 11.2191 0.364923 12.0764 1.12694C12.9475 1.90123 13.5 3.04648 13.5 4.5C13.5 4.91421 13.1642 5.25 12.75 5.25C12.3358 5.25 12 4.91421 12 4.5C12 3.45352 11.615 2.72377 11.0799 2.24806C10.5309 1.76008 9.7777 1.5 9 1.5C8.2223 1.5 7.46913 1.76008 6.92015 2.24806C6.38497 2.72377 6 3.45352 6 4.5Z"
                    fill="white"
                  ></path>
                  <path
                    d="M5.25 6.75C4.83579 6.75 4.5 7.08579 4.5 7.5C4.5 7.91421 4.83579 8.25 5.25 8.25H12.75C13.1642 8.25 13.5 7.91421 13.5 7.5C13.5 7.08579 13.1642 6.75 12.75 6.75H5.25Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.99999 18C16.1196 18 19.0865 17.25 17.6456 10.875C17.5881 10.6505 17.5327 10.4326 17.479 10.2211C16.1867 5.13267 15.8355 3.75 8.99999 3.75C2.16451 3.75 1.81335 5.13265 0.520991 10.221C0.467265 10.4325 0.411912 10.6505 0.354399 10.875C-1.08651 17.25 1.88035 18 8.99999 18ZM1.97901 10.5742C1.92608 10.7824 1.87091 10.9995 1.81289 11.2261C1.47623 12.7232 1.43979 13.7246 1.56896 14.3932C1.68496 14.9937 1.93117 15.3305 2.30888 15.5867C2.75325 15.888 3.47777 16.1391 4.64386 16.2967C5.79512 16.4524 7.23107 16.5 8.99999 16.5C10.7689 16.5 12.2049 16.4524 13.3561 16.2967C14.5222 16.1391 15.2468 15.888 15.6911 15.5867C16.0688 15.3305 16.315 14.9937 16.431 14.3932C16.5602 13.7246 16.5238 12.7232 16.1871 11.2261C16.1291 10.9995 16.0739 10.7825 16.021 10.5744C15.7374 9.45853 15.5183 8.59654 15.2702 7.87846C14.9809 7.04075 14.7069 6.57524 14.3981 6.27022C13.7953 5.67465 12.6119 5.25 8.99999 5.25C5.38807 5.25 4.20473 5.67465 3.60187 6.27022C3.29312 6.57523 3.01915 7.04075 2.72976 7.87846C2.4817 8.59652 2.26261 9.45846 1.97901 10.5742Z"
                    fill="white"
                  ></path>
                </svg>
                افزودن به سبد خرید
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Card03.render(
  <React.StrictMode>
  {card03()}</React.StrictMode>);

// Card04
const card04 = ReactDOM.createRoot(document.getElementById("card04"));
card04.render(
  <React.StrictMode>
    <Card04 />
  </React.StrictMode>
);
