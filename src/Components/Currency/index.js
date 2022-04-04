import React from "react";
import "./Currency.css";
import chart from "./chart.png";

export default function Index() {
  return (
    <section className="currency">
      <div className="sc-16r8icm-0 eMxKgr container">
        <div className="n78udj-0 jskEGI">
          <div className="sc-16r8icm-0 kjciSH top-summary-container">
            <div className="sc-16r8icm-0 kDzKwW nameSection">
              <div className="sc-16r8icm-0 gpRPnR nameHeader">
                <img
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                  height={32}
                  width={32}
                  alt="BTC"
                />
                <h2 className="sc-1q9q90x-0 jCInrl h1" color="text">
                  Bitcoin<small className="nameSymbol">BTC</small>
                </h2>
                <span className="sc-80eeb0-1 iuAjRY">
                  <button
                    className="x0o17e-0 eCXbyL sc-7pvt85-0 ccOrkS"
                    style={{ width: "auto", padding: "0px 8px" }}
                  >
                    <span className="icon-Star" />
                  </button>
                </span>
              </div>
              <div
                display="flex"
                style={{ flexWrap: "wrap" }}
                className="sc-16r8icm-0 bILTHz"
              >
                <div className="namePill namePillPrimary">Xếp hạng 1</div>
              </div>
            </div>
            <div className="sc-16r8icm-0 kjciSH priceSection">
              <h1 className="priceHeading">
                Giá Bitcoin{/* */}{" "}
                <small>
                  ({/* */}BTC{/* */})
                </small>
              </h1>
              <div className="sc-16r8icm-0 kjciSH priceTitle">
                <div className="priceValue ">
                  <span>$43,510.94</span>
                </div>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    padding: "5px 10px",
                  }}
                  className="sc-15yy2pl-0 gEePkg"
                >
                  <span className="icon-Caret-up" />
                  2.66{/* */}%
                </span>
              </div>
              <div className="n78udj-3 emihhf">
                <span>
                  <img
                    src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                    height={24}
                    width={24}
                    alt="BTC"
                  />
                  &nbsp;&nbsp;<b>Bitcoin</b>&nbsp;{/* */}BTC
                </span>
                <span>
                  <div className="imn55z-0 hCqbVS price">
                    <span>Price: </span>
                    <div>$43,510.94</div>&nbsp;
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#fff",
                      }}
                      className="sc-15yy2pl-0 gEePkg"
                    >
                      <span className="icon-Caret-up" />
                      2.66{/* */}%
                    </span>
                  </div>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <button
                      className="x0o17e-0 eCXbyL sc-7pvt85-0 ccOrkS"
                      style={{ width: "auto", padding: "0px 8px" }}
                    >
                      Add to Main Watchlist &nbsp;
                      <span className="icon-Star" />
                    </button>
                  </span>
                </span>
              </div>
            </div>
            <div className="sc-16r8icm-0 hMKivi linksSection">
              <div className="sc-10up5z1-0 fnmeDB">
                <div className="sc-16r8icm-0 sc-10up5z1-1 eUVvdh">
                  <div className="heading hideOnDesktop">Liên kết</div>
                  <div className="mobileContent">
                    <div className="links-text">
                      Trang web, Trình duyệt, Mạng xã hội, v.v.
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      height="20px"
                      width="20px"
                      viewBox="0 0 24 24"
                      className="sc-16r8icm-0 eVwNUa modalTriggerMobile"
                    >
                      <path
                        d="M9 6L15 12L9 18"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <ul className="content">
                    <li>
                      <a
                        className="link-button"
                        lang="vi"
                        rel="nofollow noopener"
                        href="https://bitcoin.org/"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path d="M11.877 15.9787C11.8146 16.8242 11.4524 17.6196 10.8555 18.2217L9.94675 19.1305C9.27191 19.7958 8.36141 20.1672 7.41381 20.1638C6.46621 20.1604 5.5584 19.7825 4.88834 19.1124C4.21828 18.4423 3.84034 17.5345 3.83695 16.5868C3.83355 15.6392 4.20497 14.7287 4.87021 14.0538L5.779 13.145C6.38116 12.5483 7.1765 12.186 8.02192 12.1235L9.67229 10.4731C8.76285 10.2319 7.80611 10.2331 6.89728 10.4766C5.98845 10.72 5.15923 11.1973 4.49215 11.8608L3.58335 12.7697C2.56946 13.7837 1.99991 15.159 2 16.5929C2.00009 18.0269 2.5698 19.4021 3.5838 20.416C4.59781 21.43 5.97305 21.9995 7.40698 21.9994C8.84092 21.9994 10.2161 21.4296 11.23 20.4156L12.1388 19.5068C12.802 18.8395 13.279 18.0102 13.5225 17.1014C13.7659 16.1926 13.7673 15.236 13.5265 14.3265L11.877 15.9787Z" />
                          <path d="M15.9793 11.8768C16.8248 11.8144 17.6202 11.4522 18.2222 10.8553L19.131 9.9465C19.7963 9.27163 20.1677 8.3611 20.1643 7.41348C20.1609 6.46585 19.783 5.55801 19.1129 4.88793C18.4429 4.21786 17.535 3.83991 16.5874 3.83651C15.6398 3.83312 14.7293 4.20455 14.0545 4.8698L13.1457 5.77863C12.549 6.3808 12.1868 7.17616 12.1242 8.02161L10.4738 9.67203C10.2327 8.76256 10.2339 7.80579 10.4773 6.89693C10.7208 5.98807 11.198 5.15883 11.8616 4.49173L12.7704 3.58291C13.7844 2.56899 15.1596 1.99943 16.5935 1.99951C18.0275 1.9996 19.4027 2.56932 20.4165 3.58336C21.4304 4.5974 22 5.97267 21.9999 7.40665C21.9998 8.84063 21.4301 10.2158 20.4161 11.2298L19.5073 12.1386C18.84 12.8018 18.0108 13.2789 17.102 13.5223C16.1932 13.7658 15.2366 13.7672 14.3271 13.5264L15.9793 11.8768Z" />
                          <path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 16.4483 8.60535 16.544 8.36434 16.5441Z" />
                        </svg>
                        <div className="buttonName">bitcoin.org</div>
                        <div className="sc-16r8icm-0 sc-10up5z1-3 iTgjYQ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="16px"
                            width="16px"
                            viewBox="0 0 24 24"
                            className="sc-16r8icm-0 coGWQa"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li>
                      <button className="link-button" aria-expanded="false">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M16.4153 16.4153L20 20M18.5455 11.2727C18.5455 15.2893 15.2894 18.5454 11.2728 18.5454C7.25612 18.5454 4 15.2893 4 11.2727C4 7.2561 7.25612 4 11.2728 4C15.2894 4 18.5455 7.2561 18.5455 11.2727Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="buttonName">Trình duyệt</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                    <li>
                      <button className="link-button" aria-expanded="false">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M12 12C9.7912 12 8 10.1681 8 7.90909V7.09091C8 4.83191 9.7912 3 12 3C14.2088 3 16 4.83191 16 7.09091V7.90909C16 10.1681 14.2088 12 12 12Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M20 19.2884C20 17.8156 19.0424 16.5205 17.6528 16.1335C16.1376 15.7105 14.0688 15.2727 12 15.2727C9.9312 15.2727 7.8624 15.7105 6.3472 16.1335C4.9576 16.5205 4 17.8156 4 19.2884V21H20V19.2884Z"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="buttonName">Cộng đồng</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M6 9L12 15L18 9"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </li>
                    <li />
                    <li>
                      <a
                        className="link-button"
                        lang="vi"
                        rel="nofollow noopener"
                        href="https://github.com/bitcoin/bitcoin"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M7 8L3 12L7 16M17 8L21 12L17 16"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 19L14 5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="buttonName">Mã nguồn</div>
                        <div className="sc-16r8icm-0 sc-10up5z1-3 iTgjYQ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="16px"
                            width="16px"
                            viewBox="0 0 24 24"
                            className="sc-16r8icm-0 coGWQa"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-button"
                        lang="vi"
                        rel="nofollow noopener"
                        href="https://bitcoin.org/bitcoin.pdf"
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          height="16px"
                          width="16px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 coGWQa"
                        >
                          <path
                            d="M13.75 3H6.75C6.28587 3 5.84075 3.18964 5.51256 3.52721C5.18437 3.86477 5 4.32261 5 4.8V19.2C5 19.6774 5.18437 20.1352 5.51256 20.4728C5.84075 20.8104 6.28587 21 6.75 21H17.25C17.7141 21 18.1592 20.8104 18.4874 20.4728C18.8156 20.1352 19 19.6774 19 19.2V8.4M13.75 3L19 8.4M13.75 3V8.4H19M15.5 12.9H8.5M15.5 16.5H8.5M10.25 9.3H8.5"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="buttonName">Sách trắng</div>
                        <div className="sc-16r8icm-0 sc-10up5z1-3 iTgjYQ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            height="16px"
                            width="16px"
                            viewBox="0 0 24 24"
                            className="sc-16r8icm-0 coGWQa"
                          >
                            <path
                              d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeMiterlimit={10}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div display="none" className="sc-16r8icm-0 kHmOmq">
                  <div className="sc-90sd2b-0 kzTgpF">
                    <div className="sc-90sd2b-1 dWBXwc">
                      <div className="sc-90sd2b-2 kZmzHf">
                        <h4 color="text" className="sc-1q9q90x-0 jBqXqt">
                          Bitcoin Liên kết
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          height="24px"
                          width="24px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 jZwKai sc-90sd2b-3 evVqNC"
                        >
                          <path
                            d="M18 6L6 18M18 18L6 6"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="sc-90sd2b-4 guFTCp">
                        <div className="sc-16r8icm-0 eMxKgr">
                          <div className="sc-16r8icm-0 jKrmxw">
                            <div className="sc-16r8icm-0 iyfDkY">
                              <h6 className="modalHeading">Liên kết</h6>
                            </div>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://bitcoin.org/"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path d="M11.877 15.9787C11.8146 16.8242 11.4524 17.6196 10.8555 18.2217L9.94675 19.1305C9.27191 19.7958 8.36141 20.1672 7.41381 20.1638C6.46621 20.1604 5.5584 19.7825 4.88834 19.1124C4.21828 18.4423 3.84034 17.5345 3.83695 16.5868C3.83355 15.6392 4.20497 14.7287 4.87021 14.0538L5.779 13.145C6.38116 12.5483 7.1765 12.186 8.02192 12.1235L9.67229 10.4731C8.76285 10.2319 7.80611 10.2331 6.89728 10.4766C5.98845 10.72 5.15923 11.1973 4.49215 11.8608L3.58335 12.7697C2.56946 13.7837 1.99991 15.159 2 16.5929C2.00009 18.0269 2.5698 19.4021 3.5838 20.416C4.59781 21.43 5.97305 21.9995 7.40698 21.9994C8.84092 21.9994 10.2161 21.4296 11.23 20.4156L12.1388 19.5068C12.802 18.8395 13.279 18.0102 13.5225 17.1014C13.7659 16.1926 13.7673 15.236 13.5265 14.3265L11.877 15.9787Z" />
                                <path d="M15.9793 11.8768C16.8248 11.8144 17.6202 11.4522 18.2222 10.8553L19.131 9.9465C19.7963 9.27163 20.1677 8.3611 20.1643 7.41348C20.1609 6.46585 19.783 5.55801 19.1129 4.88793C18.4429 4.21786 17.535 3.83991 16.5874 3.83651C15.6398 3.83312 14.7293 4.20455 14.0545 4.8698L13.1457 5.77863C12.549 6.3808 12.1868 7.17616 12.1242 8.02161L10.4738 9.67203C10.2327 8.76256 10.2339 7.80579 10.4773 6.89693C10.7208 5.98807 11.198 5.15883 11.8616 4.49173L12.7704 3.58291C13.7844 2.56899 15.1596 1.99943 16.5935 1.99951C18.0275 1.9996 19.4027 2.56932 20.4165 3.58336C21.4304 4.5974 22 5.97267 21.9999 7.40665C21.9998 8.84063 21.4301 10.2158 20.4161 11.2298L19.5073 12.1386C18.84 12.8018 18.0108 13.2789 17.102 13.5223C16.1932 13.7658 15.2366 13.7672 14.3271 13.5264L15.9793 11.8768Z" />
                                <path d="M8.36434 16.5441C8.18462 16.5441 8.00895 16.4907 7.85954 16.3909C7.71012 16.291 7.59367 16.1491 7.5249 15.983C7.45613 15.817 7.43814 15.6343 7.47319 15.458C7.50824 15.2817 7.59476 15.1198 7.72182 14.9927L14.9922 7.72213C15.1636 7.55658 15.3932 7.46498 15.6315 7.46705C15.8697 7.46912 16.0977 7.5647 16.2662 7.7332C16.4347 7.9017 16.5302 8.12965 16.5323 8.36794C16.5344 8.60623 16.4428 8.8358 16.2772 9.00721L9.00686 16.2778C8.83646 16.4483 8.60535 16.544 8.36434 16.5441Z" />
                              </svg>
                              bitcoin.org
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://github.com/bitcoin/bitcoin"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path
                                  d="M7 8L3 12L7 16M17 8L21 12L17 16"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M10 19L14 5"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Mã nguồn
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://bitcoin.org/bitcoin.pdf"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path
                                  d="M13.75 3H6.75C6.28587 3 5.84075 3.18964 5.51256 3.52721C5.18437 3.86477 5 4.32261 5 4.8V19.2C5 19.6774 5.18437 20.1352 5.51256 20.4728C5.84075 20.8104 6.28587 21 6.75 21H17.25C17.7141 21 18.1592 20.8104 18.4874 20.4728C18.8156 20.1352 19 19.6774 19 19.2V8.4M13.75 3L19 8.4M13.75 3V8.4H19M15.5 12.9H8.5M15.5 16.5H8.5M10.25 9.3H8.5"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Sách trắng
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                          <div className="sc-16r8icm-0 jKrmxw">
                            <div className="sc-16r8icm-0 iyfDkY">
                              <h6 className="modalHeading">Trình duyệt</h6>
                            </div>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="noopener"
                              href="https://blockchain.coinmarketcap.com/chain/bitcoin"
                              target="_blank"
                            >
                              blockchain.coinmarketcap.com
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://blockchain.info/"
                              target="_blank"
                            >
                              blockchain.info
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://live.blockcypher.com/btc/"
                              target="_blank"
                            >
                              live.blockcypher.com
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://blockchair.com/bitcoin"
                              target="_blank"
                            >
                              blockchair.com
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://explorer.viabtc.com/btc"
                              target="_blank"
                            >
                              explorer.viabtc.com
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                          <div className="sc-16r8icm-0 jKrmxw">
                            <div className="sc-16r8icm-0 iyfDkY">
                              <h6 className="modalHeading">Cộng đồng</h6>
                            </div>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://bitcointalk.org"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path
                                  d="M12 12C9.7912 12 8 10.1681 8 7.90909V7.09091C8 4.83191 9.7912 3 12 3C14.2088 3 16 4.83191 16 7.09091V7.90909C16 10.1681 14.2088 12 12 12Z"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M20 19.2884C20 17.8156 19.0424 16.5205 17.6528 16.1335C16.1376 15.7105 14.0688 15.2727 12 15.2727C9.9312 15.2727 7.8624 15.7105 6.3472 16.1335C4.9576 16.5205 4 17.8156 4 19.2884V21H20V19.2884Z"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeMiterlimit={10}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              bitcointalk.org
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                            <a
                              className="modalLink"
                              lang="vi"
                              rel="nofollow noopener"
                              href="https://reddit.com/r/bitcoin"
                              target="_blank"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                height="16px"
                                width="16px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 jNymak"
                              >
                                <path
                                  d="M22 11.8218C22 10.396 20.9167 9.23762 19.5833 9.23762C19 9.23762 18.5 9.41584 18.0833 9.77228C16.5833 8.79208 14.75 8.16832 12.75 8.07921L13.75 4.60396L16.5833 5.31683C16.6667 6.38614 17.5 7.27723 18.5833 7.27723C19.6667 7.27723 20.5833 6.29703 20.5833 5.13861C20.5833 3.9802 19.6667 3 18.5833 3C17.8333 3 17.1667 3.44554 16.8333 4.15842L13.5 3.35644C13.25 3.26733 12.9167 3.44554 12.8333 3.71287L11.5833 8.07921C9.5 8.16832 7.41667 8.70297 5.91667 9.77228C5.5 9.41584 5 9.23762 4.41667 9.23762C3.08333 9.23762 2 10.396 2 11.8218C2 12.7129 2.41667 13.5149 3 13.9604C3 14.1386 3 14.4059 3 14.5842C3 16.3663 4 17.9703 5.75 19.2178C7.41667 20.3762 9.66667 21 12 21C14.3333 21 16.5833 20.3762 18.25 19.2178C20 17.9703 21 16.3663 21 14.5842C21 14.4059 21 14.2277 21 14.0495C21.5833 13.5149 22 12.7129 22 11.8218ZM18.6667 4.15842C19.1667 4.15842 19.5833 4.60396 19.5833 5.13861C19.5833 5.67327 19.1667 6.11881 18.6667 6.11881C18.1667 6.11881 17.75 5.67327 17.75 5.13861C17.75 4.60396 18.1667 4.15842 18.6667 4.15842ZM7.66667 13.4257C7.66667 12.6238 8.33333 12 9 12C9.75 12 10.3333 12.7129 10.3333 13.4257C10.3333 14.1386 9.75 14.8515 9 14.8515C8.33333 14.8515 7.66667 14.2277 7.66667 13.4257ZM15.3333 17.6139C14.6667 18.3267 13.5833 18.6832 12.0833 18.6832C10.5833 18.6832 9.5 18.3267 8.83333 17.6139C8.58333 17.3465 8.58333 16.9901 8.83333 16.8119C9.08333 16.5446 9.41667 16.5446 9.58333 16.8119C10.0833 17.3465 10.9167 17.6139 12.0833 17.6139C13.25 17.6139 14.0833 17.3465 14.5833 16.8119C14.8333 16.5446 15.1667 16.5446 15.3333 16.8119C15.5 17.0792 15.5 17.4356 15.3333 17.6139ZM15 14.8515C14.25 14.8515 13.5833 14.2277 13.5833 13.4257C13.5833 12.6238 14.25 12 15 12C15.75 12 16.3333 12.7129 16.3333 13.4257C16.3333 14.1386 15.75 14.8515 15 14.8515Z"
                                  fill="currenColor"
                                />
                              </svg>
                              Reddit
                              <div className="sc-16r8icm-0 sc-10up5z1-3 jertNB">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  height="16px"
                                  width="16px"
                                  viewBox="0 0 24 24"
                                  className="sc-16r8icm-0 coGWQa"
                                >
                                  <path
                                    d="M12 11.9998L20 4M20 4H14.1817M20 4L19.9999 9.81802M9.81819 6.90946H5.77777C4.79594 6.90946 4 7.70537 4 8.68718V18.2223C4 19.2041 4.79594 20 5.77778 20H15.3131C16.295 20 17.0909 19.2041 17.0909 18.2223V14.182"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div display="none" className="sc-16r8icm-0 kHmOmq">
                  <div className="sc-90sd2b-0 kzTgpF">
                    <div className="sc-90sd2b-1 dWBXwc">
                      <div className="sc-90sd2b-2 kZmzHf">
                        <h4 color="text" className="sc-1q9q90x-0 jBqXqt">
                          Bitcoin Thẻ
                        </h4>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          height="24px"
                          width="24px"
                          viewBox="0 0 24 24"
                          className="sc-16r8icm-0 jZwKai sc-90sd2b-3 evVqNC"
                        >
                          <path
                            d="M18 6L6 18M18 18L6 6"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeMiterlimit={10}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="sc-90sd2b-4 guFTCp">
                        <div className="sc-16r8icm-0 csifPj">
                          <div className="sc-16r8icm-0 hgKnTV">
                            <h6 className="modalHeading">Algorithm</h6>
                            <div className="sc-10up5z1-2 iEatlr">
                              <a href="/vi/view/pow/" className="cmc-link">
                                <div className="tagBadge">PoW</div>
                              </a>
                              <a href="/vi/view/sha-256/" className="cmc-link">
                                <div className="tagBadge">SHA-256</div>
                              </a>
                            </div>
                          </div>
                          <div className="sc-16r8icm-0 hgKnTV">
                            <h6 className="modalHeading">Category</h6>
                            <div className="sc-10up5z1-2 iEatlr">
                              <a
                                href="/vi/view/store-of-value/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">Store Of Value</div>
                              </a>
                              <a
                                href="/vi/view/state-channel/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">State Channel</div>
                              </a>
                              <a
                                href="/vi/view/coinbase-ventures-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Coinbase Ventures Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/three-arrows-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Three Arrows Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/polychain-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Polychain Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/binance-labs-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Binance Labs Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/blockchain-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Blockchain Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/boostvc-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  BoostVC Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/cms-holdings-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  CMS Holdings Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/dcg-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">DCG Portfolio</div>
                              </a>
                              <a
                                href="/vi/view/dragonfly-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  DragonFly Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/electric-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Electric Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/fabric-ventures-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Fabric Ventures Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/framework-ventures-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Framework Ventures Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/galaxy-digital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Galaxy Digital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/huobi-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Huobi Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/alameda-research-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Alameda Research Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/a16z-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">a16z Portfolio</div>
                              </a>
                              <a
                                href="/vi/view/1confirmation-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  1Confirmation Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/winklevoss-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Winklevoss Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/usv-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">USV Portfolio</div>
                              </a>
                              <a
                                href="/vi/view/placeholder-ventures-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Placeholder Ventures Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/pantera-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Pantera Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/multicoin-capital-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Multicoin Capital Portfolio
                                </div>
                              </a>
                              <a
                                href="/vi/view/paradigm-portfolio/"
                                className="cmc-link"
                              >
                                <div className="tagBadge">
                                  Paradigm Portfolio
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="sc-16r8icm-0 hgKnTV">
                            <h6 className="modalHeading">Others</h6>
                            <div className="sc-10up5z1-2 iEatlr">
                              <a href="/vi/view/mineable/" className="cmc-link">
                                <div className="tagBadge">Mineable</div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* phần nội dung */}
      <div className="sc-16r8icm-0 jKrmxw container">
        <div style={{ display: "initial" }}>
          <div display=",,flex" className="sc-16r8icm-0 sc-19zk94m-1 gRSJaB">
            <div
              style={{
                maxWidth: "930px",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}
              className="sc-16r8icm-0 dSXRna"
            >
              <div className="sc-16r8icm-0 kjciSH">
                <div className="sc-19zk94m-2 cEhSvA">
                  <div className="sc-1k1vs7f-0 gudABy">
                    <div>
                      <div className="sc-117f5dm-0 cjTISQ">
                        <h3 color="text" className="sc-1q9q90x-0 fyQGwp">
                          biểu đồ Bitcoin sang USD
                        </h3>
                        <div className="sc-16r8icm-0 kjciSH table-control-left chart-actions">
                          <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              height="20px"
                              width="20px"
                              viewBox="0 0 24 24"
                              color="text2"
                              className="sc-16r8icm-0 jERQuy"
                            >
                              <path d="M5 16C5 15.4477 4.55228 15 4 15C3.44772 15 3 15.4477 3 16V18C3 19.1046 3.89543 20 5 20H7C7.55228 20 8 19.5523 8 19C8 18.4477 7.55228 18 7 18H5V16ZM3 8C3 8.55228 3.44772 9 4 9C4.55228 9 5 8.55228 5 8V6H7C7.55228 6 8 5.55228 8 5C8 4.44772 7.55228 4 7 4H5C3.89543 4 3 4.89543 3 6V8ZM19 18H17C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20H19C20.1046 20 21 19.1046 21 18V16C21 15.4477 20.5523 15 20 15C19.4477 15 19 15.4477 19 16V18ZM17 4C16.4477 4 16 4.44772 16 5C16 5.55228 16.4477 6 17 6H19V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V6C21 4.89543 20.1046 4 19 4H17Z" />
                            </svg>
                          </button>
                          <div
                            display="none,block,block"
                            className="sc-16r8icm-0 iCWHtY"
                          >
                            <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                height="20px"
                                width="20px"
                                viewBox="0 0 24 24"
                                color="text2"
                                className="sc-16r8icm-0 jERQuy"
                              >
                                <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" />
                                <path d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z" />
                                <path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="sc-16r8icm-0 kjciSH table-control-left table-control-chart-type">
                        <img
                          alt="chart"
                          style={{ width: "100%" }}
                          src={chart}
                        ></img>
                      </div>
                      {/* <div className="sc-117f5dm-0 cjTISQ">
                    <div className="sc-16r8icm-0 kjciSH table-control-left table-control-chart-type">
                      <div className="iazzsz-0 cVJmRr ButtonSwitcher">
                        <div
                          className="slider"
                          style={{
                            width: "48px",
                            height: "30px",
                            left: "3px",
                            top: "3px",
                          }}
                        />
                        <button className="x0o17e-0 DChGS iazzsz-1 jCFojM active landed">
                          <span style={{ color: "rgb(88, 102, 126)" }}>
                            Price
                          </span>
                        </button>
                        <button className="x0o17e-0 DChGS iazzsz-1 jCFojM  landed">
                          <span style={{ color: "rgb(88, 102, 126)" }}>
                            Market Cap
                          </span>
                        </button>
                        <button className="x0o17e-0 DChGS iazzsz-1 jCFojM  landed">
                          <span style={{ color: "rgb(88, 102, 126)" }}>
                            TradingView
                          </span>
                        </button>
                        <button className="x0o17e-0 DChGS iazzsz-1 jCFojM  landed">
                          <span style={{ color: "rgb(88, 102, 126)" }}>
                            History
                          </span>
                        </button>
                      </div>
                    </div>
                    <div
                      flex="true"
                      variant="roundedSquare"
                      className="cwgaxb-0 iOPuHO"
                      data-tabs="true"
                    >
                      <ul className="react-tabs__tab-list" role="tablist">
                        <li
                          className="react-tabs__tab react-tabs__tab--selected"
                          role="tab"
                          id="react-tabs-0"
                          aria-selected="true"
                          aria-disabled="false"
                          aria-controls="react-tabs-1"
                          tabIndex={0}
                        >
                          1D
                        </li>
                        <li
                          className="react-tabs__tab"
                          role="tab"
                          id="react-tabs-2"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="react-tabs-3"
                        >
                          7D
                        </li>
                        <li
                          className="react-tabs__tab"
                          role="tab"
                          id="react-tabs-4"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="react-tabs-5"
                        >
                          1M
                        </li>
                        <li
                          className="react-tabs__tab"
                          role="tab"
                          id="react-tabs-6"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="react-tabs-7"
                        >
                          3M
                        </li>
                        <li
                          className="react-tabs__tab"
                          role="tab"
                          id="react-tabs-8"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="react-tabs-9"
                        >
                          1Y
                        </li>
                        <li
                          className="react-tabs__tab"
                          role="tab"
                          id="react-tabs-10"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="react-tabs-11"
                        >
                          YTD
                        </li>
                        <li
                          className="react-tabs__tab"
                          role="tab"
                          id="react-tabs-12"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="react-tabs-13"
                        >
                          ALL
                        </li>
                        <li
                          className="react-tabs_tab"
                          role="tab"
                          id="react-tabs-14"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="react-tabs-15"
                        >
                          <div
                            className="sc-16r8icm-0 kjciSH date-picker-icon"
                            aria-expanded="false"
                          >
                            <button className="x0o17e-0 bnhhNH sc-7pvt85-0 bjbWNv">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                height="20px"
                                width="20px"
                                viewBox="0 0 24 24"
                                className="sc-16r8icm-0 eVwNUa"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M15 5H9V4C9 3.44772 8.55228 3 8 3C7.44772 3 7 3.44772 7 4V5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H17V4C17 3.44772 16.5523 3 16 3C15.4477 3 15 3.44772 15 4V5ZM6 7C5.44772 7 5 7.44771 5 8V10H19V8C19 7.44772 18.5523 7 18 7H17C17 7.55228 16.5523 8 16 8C15.4477 8 15 7.55228 15 7H9C9 7.55228 8.55228 8 8 8C7.44772 8 7 7.55228 7 7H6ZM19 12H5V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12Z"
                                />
                              </svg>
                            </button>
                          </div>
                        </li>
                        <li
                          className
                          role="tab"
                          id="react-tabs-16"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="react-tabs-17"
                        >
                          <div className="sc-16r8icm-0 kjciSH log-status-box">
                            <div className="sc-16r8icm-0 kjciSH log-status-hr" />
                            <div className="sc-16r8icm-0 kjciSH log-status-inner false">
                              LOG
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div
                        className="react-tabs__tab-panel react-tabs__tab-panel--selected"
                        role="tabpanel"
                        id="react-tabs-1"
                        aria-labelledby="react-tabs-0"
                      />
                      <div
                        className="react-tabs__tab-panel"
                        role="tabpanel"
                        id="react-tabs-3"
                        aria-labelledby="react-tabs-2"
                      />
                      <div
                        className="react-tabs__tab-panel"
                        role="tabpanel"
                        id="react-tabs-5"
                        aria-labelledby="react-tabs-4"
                      />
                      <div
                        className="react-tabs__tab-panel"
                        role="tabpanel"
                        id="react-tabs-7"
                        aria-labelledby="react-tabs-6"
                      />
                      <div
                        className="react-tabs__tab-panel"
                        role="tabpanel"
                        id="react-tabs-9"
                        aria-labelledby="react-tabs-8"
                      />
                      <div
                        className="react-tabs__tab-panel"
                        role="tabpanel"
                        id="react-tabs-11"
                        aria-labelledby="react-tabs-10"
                      />
                      <div
                        className="react-tabs__tab-panel"
                        role="tabpanel"
                        id="react-tabs-13"
                        aria-labelledby="react-tabs-12"
                      />
                      <div
                        className="react-tabs__tab-panel"
                        role="tabpanel"
                        id="react-tabs-15"
                        aria-labelledby="react-tabs-14"
                      />
                      <div
                        className="react-tabs__tab-panel"
                        role="tabpanel"
                        id="react-tabs-17"
                        aria-labelledby="react-tabs-16"
                      />
                    </div>
                  </div> */}
                      {/* <div style={{ height: "500px" }}>
                    <div className="sc-1coc6h5-0 hGmIVK">
                      <div className="tk0ro3-0 ckaobf">
                        <div className="fullscreen">
                          <div>
                            <div
                              className="floating-tooltip"
                              style={{
                                display: "none",
                                left: "452px",
                                top: "71.7812px",
                              }}
                            >
                              <div className="date">
                                <span className="primary">25/3/2022</span>
                                <span className="sub">12:14:00</span>
                              </div>
                              <div>
                                <span
                                  className="indicator"
                                  style={{ backgroundColor: "#16c784" }}
                                />
                                <span className="sub">Price:</span>&nbsp;
                                <span className="number">$44,050.64</span>
                              </div>
                              <div>
                                <img
                                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMTkiIHZpZXdCb3g9IjAgMCAyMCAxOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPgo8cGF0aCBkPSJNOC42NjIwNyAxNS43OTU5TDEuNjYyMDcgOS40OTU4NkMxLjI0MDY0IDkuMTE2NTggMSA4LjU3NjI1IDEgOC4wMDkyN1YyQzEgMC44OTU0MzIgMS44OTU0MyAwIDMgMEgxN0MxOC4xMDQ2IDAgMTkgMC44OTU0MzEgMTkgMlY4LjAwOTI3QzE5IDguNTc2MjUgMTguNzU5NCA5LjExNjU4IDE4LjMzNzkgOS40OTU4NkwxMS4zMzc5IDE1Ljc5NTlDMTAuNTc3MyAxNi40ODA0IDkuNDIyNjggMTYuNDgwNCA4LjY2MjA3IDE1Ljc5NTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxwYXRoIGQ9Ik04LjY2MDIyIDEyLjc5MTJMMy42NjAyMiA4LjI3OTlDMy4yMzk5MSA3LjkwMDY3IDMgNy4zNjEwOCAzIDYuNzk0OThWNEMzIDIuODk1NDMgMy44OTU0MyAyIDUgMkgxNUMxNi4xMDQ2IDIgMTcgMi44OTU0MyAxNyA0VjYuNzk0OThDMTcgNy4zNjEwOCAxNi43NjAxIDcuOTAwNjcgMTYuMzM5OCA4LjI3OTlMMTEuMzM5OCAxMi43OTEyQzEwLjU3ODYgMTMuNDc3OSA5LjQyMTM5IDEzLjQ3NzkgOC42NjAyMiAxMi43OTEyWiIgZmlsbD0iI0E2QjBDMyIvPgo8cGF0aCBkPSJNOS4yODcyOCA5LjI3NTgxTDcuMjg3MjggNy4yNDM2NUM3LjEwMzE4IDcuMDU2NTkgNyA2LjgwNDY2IDcgNi41NDIyMVY2QzcgNS40NDc3MSA3LjQ0NzcyIDUgOCA1SDEyQzEyLjU1MjMgNSAxMyA1LjQ0NzcyIDEzIDZWNi41NDIyMUMxMyA2LjgwNDY2IDEyLjg5NjggNy4wNTY1OSAxMi43MTI3IDcuMjQzNjVMMTAuNzEyNyA5LjI3NTgxQzEwLjMyMSA5LjY3Mzg5IDkuNjc5MDUgOS42NzM4OSA5LjI4NzI4IDkuMjc1ODFaIiBmaWxsPSJ3aGl0ZSIvPgo8ZGVmcz4KPGZpbHRlciBpZD0iZmlsdGVyMF9kIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMTguMzA5MyIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMC41Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAuMzQ1MDk4IDAgMCAwIDAgMC40IDAgMCAwIDAgMC40OTQxMTggMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9IkJhY2tncm91bmRJbWFnZUZpeCIgcmVzdWx0PSJlZmZlY3QxX2Ryb3BTaGFkb3ciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjwvZGVmcz4KPC9zdmc+Cg=="
                                  className="volume-legend"
                                />
                                <span className="sub">Vol 24h:</span>&nbsp;
                                <span className="number">$31.16B</span>
                              </div>
                            </div>
                            <div
                              className="baseline-tooltip"
                              aria-haspopup="true"
                              role="button"
                              tabIndex={0}
                              style={{
                                display: "none",
                                width: "56px",
                                top: "369.379px",
                                left: "0px",
                              }}
                            >
                              <div className="baseline-detail">
                                We are using the coin’s open price in the
                                selected time frame to display{" "}
                                <span className="up">ups (green)</span> and{" "}
                                <span className="down">downs (red)</span> of the
                                coin’s trend.
                              </div>
                            </div>
                            <div>
                              <div className="chart-wrapper">
                                <img
                                  className="watermark "
                                  src="https://s2.coinmarketcap.com/static/cloud/img/chart/watermark.svg"
                                />
                                <div
                                  className="axis-label left-axis-label"
                                  style={{ left: "28px" }}
                                >
                                  USD
                                </div>
                                <div className="chart">
                                  <div
                                    className="tv-lightweight-charts"
                                    style={{
                                      overflow: "hidden",
                                      width: "930px",
                                      height: "400px",
                                      userSelect: "none",
                                      WebkitTapHighlightColor: "transparent",
                                    }}
                                  >
                                    <table
                                      cellSpacing={0}
                                      style={{
                                        height: "400px",
                                        width: "930px",
                                      }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td style={{ padding: "0px" }}>
                                            <div
                                              style={{
                                                height: "374px",
                                                overflow: "hidden",
                                                width: "56px",
                                                left: "0px",
                                                position: "relative",
                                                minWidth: "56px",
                                                cursor: "default",
                                              }}
                                            >
                                              <canvas
                                                width={112}
                                                height={748}
                                                style={{
                                                  width: "56px",
                                                  height: "374px",
                                                  position: "absolute",
                                                  zIndex: 1,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                              <canvas
                                                width={112}
                                                height={748}
                                                style={{
                                                  width: "56px",
                                                  height: "374px",
                                                  position: "absolute",
                                                  zIndex: 2,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                            </div>
                                          </td>
                                          <td
                                            style={{
                                              padding: "0px",
                                              position: "relative",
                                              width: "874px",
                                              height: "374px",
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                position: "relative",
                                                overflow: "hidden",
                                              }}
                                            >
                                              <canvas
                                                width={1748}
                                                height={748}
                                                style={{
                                                  width: "874px",
                                                  height: "374px",
                                                  position: "absolute",
                                                  zIndex: 1,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                              <canvas
                                                width={1748}
                                                height={748}
                                                style={{
                                                  width: "874px",
                                                  height: "374px",
                                                  position: "absolute",
                                                  zIndex: 2,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                            </div>
                                          </td>
                                          <td style={{ padding: "0px" }} />
                                        </tr>
                                        <tr>
                                          <td style={{ padding: "0px" }}>
                                            <div
                                              style={{
                                                width: "56px",
                                                height: "26px",
                                                overflow: "hidden",
                                                minWidth: "56px",
                                              }}
                                            >
                                              <canvas
                                                width={112}
                                                height={52}
                                                style={{
                                                  width: "56px",
                                                  height: "26px",
                                                }}
                                              />
                                            </div>
                                          </td>
                                          <td
                                            style={{
                                              height: "26px",
                                              padding: "0px",
                                              width: "874px",
                                              cursor: "default",
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                position: "relative",
                                                overflow: "hidden",
                                              }}
                                            >
                                              <canvas
                                                width={1748}
                                                height={52}
                                                style={{
                                                  width: "874px",
                                                  height: "26px",
                                                  position: "absolute",
                                                  zIndex: 1,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                              <canvas
                                                width={1748}
                                                height={52}
                                                style={{
                                                  width: "874px",
                                                  height: "26px",
                                                  position: "absolute",
                                                  zIndex: 2,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                            </div>
                                          </td>
                                          <td style={{ padding: "0px" }} />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="minimap-wrapper"
                                style={{
                                  height: "50px",
                                  marginLeft: "57px",
                                  marginRight: "-1px",
                                  width: "872px",
                                }}
                              >
                                <div
                                  className="range-selector"
                                  style={{
                                    left: "248.968px",
                                    right: "7.37133px",
                                  }}
                                >
                                  <div
                                    className="handler first"
                                    draggable="true"
                                  >
                                    <img
                                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAyMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kZCkiPgogIDxyZWN0IHg9IjQuOTQ2MjkiIHk9IjEuOTk5NTEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIyNSIgcng9IjciIGZpbGw9IndoaXRlIi8+CiAgPC9nPgogIDxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBjbGlwUnVsZT0iZXZlbm9kZCIgZD0iTTEwLjk0NjMgMTAuNDk5NUMxMC45NDYzIDEwLjIyMzQgMTAuNzIyNCA5Ljk5OTUxIDEwLjQ0NjMgOS45OTk1MUMxMC4xNzAxIDkuOTk5NTEgOS45NDYyOSAxMC4yMjM0IDkuOTQ2MjkgMTAuNDk5NVYxOC41MDA3QzkuOTQ2MjkgMTguNzc2OSAxMC4xNzAxIDE5LjAwMDcgMTAuNDQ2MyAxOS4wMDA3QzEwLjcyMjQgMTkuMDAwNyAxMC45NDYzIDE4Ljc3NjkgMTAuOTQ2MyAxOC41MDA3VjEwLjQ5OTVaTTEzLjk0NjMgMTAuNDk5NUMxMy45NDYzIDEwLjIyMzQgMTMuNzIyNCA5Ljk5OTUxIDEzLjQ0NjMgOS45OTk1MUMxMy4xNzAxIDkuOTk5NTEgMTIuOTQ2MyAxMC4yMjM0IDEyLjk0NjMgMTAuNDk5NVYxOC41MDA3QzEyLjk0NjMgMTguNzc2OSAxMy4xNzAxIDE5LjAwMDcgMTMuNDQ2MyAxOS4wMDA3QzEzLjcyMjQgMTkuMDAwNyAxMy45NDYzIDE4Ljc3NjkgMTMuOTQ2MyAxOC41MDA3VjEwLjQ5OTVaIiBmaWxsPSIjQTZCMEMzIi8+CiAgPGRlZnM+CiAgPGZpbHRlciBpZD0iZmlsdGVyMF9kZCIgeD0iMC45NDYyODkiIHk9Ii0wLjAwMDQ4ODI4MSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjMzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgogIDxmZU9mZnNldCBkeT0iMiIvPgogIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjM0NTA5OCAwIDAgMCAwIDAuNCAwIDAgMCAwIDAuNDk0MTE4IDAgMCAwIDAuMTIgMCIvPgogIDxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CiAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KICA8ZmVPZmZzZXQgZHk9IjEiLz4KICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiLz4KICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjM0NTA5OCAwIDAgMCAwIDAuNCAwIDAgMCAwIDAuNDk0MTE4IDAgMCAwIDAuMTIgMCIvPgogIDxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0iZWZmZWN0Ml9kcm9wU2hhZG93Ii8+CiAgPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QyX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KICA8L2ZpbHRlcj4KICA8L2RlZnM+Cjwvc3ZnPgo="
                                      width={18}
                                      height={25}
                                    />
                                  </div>
                                  <div
                                    className="handler second"
                                    draggable="true"
                                  >
                                    <img
                                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMzMiIHZpZXdCb3g9IjAgMCAyMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kZCkiPgogIDxyZWN0IHg9IjQuOTQ2MjkiIHk9IjEuOTk5NTEiIHdpZHRoPSIxNCIgaGVpZ2h0PSIyNSIgcng9IjciIGZpbGw9IndoaXRlIi8+CiAgPC9nPgogIDxwYXRoIGZpbGxSdWxlPSJldmVub2RkIiBjbGlwUnVsZT0iZXZlbm9kZCIgZD0iTTEwLjk0NjMgMTAuNDk5NUMxMC45NDYzIDEwLjIyMzQgMTAuNzIyNCA5Ljk5OTUxIDEwLjQ0NjMgOS45OTk1MUMxMC4xNzAxIDkuOTk5NTEgOS45NDYyOSAxMC4yMjM0IDkuOTQ2MjkgMTAuNDk5NVYxOC41MDA3QzkuOTQ2MjkgMTguNzc2OSAxMC4xNzAxIDE5LjAwMDcgMTAuNDQ2MyAxOS4wMDA3QzEwLjcyMjQgMTkuMDAwNyAxMC45NDYzIDE4Ljc3NjkgMTAuOTQ2MyAxOC41MDA3VjEwLjQ5OTVaTTEzLjk0NjMgMTAuNDk5NUMxMy45NDYzIDEwLjIyMzQgMTMuNzIyNCA5Ljk5OTUxIDEzLjQ0NjMgOS45OTk1MUMxMy4xNzAxIDkuOTk5NTEgMTIuOTQ2MyAxMC4yMjM0IDEyLjk0NjMgMTAuNDk5NVYxOC41MDA3QzEyLjk0NjMgMTguNzc2OSAxMy4xNzAxIDE5LjAwMDcgMTMuNDQ2MyAxOS4wMDA3QzEzLjcyMjQgMTkuMDAwNyAxMy45NDYzIDE4Ljc3NjkgMTMuOTQ2MyAxOC41MDA3VjEwLjQ5OTVaIiBmaWxsPSIjQTZCMEMzIi8+CiAgPGRlZnM+CiAgPGZpbHRlciBpZD0iZmlsdGVyMF9kZCIgeD0iMC45NDYyODkiIHk9Ii0wLjAwMDQ4ODI4MSIgd2lkdGg9IjIyIiBoZWlnaHQ9IjMzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CiAgPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KICA8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIvPgogIDxmZU9mZnNldCBkeT0iMiIvPgogIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiLz4KICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjM0NTA5OCAwIDAgMCAwIDAuNCAwIDAgMCAwIDAuNDk0MTE4IDAgMCAwIDAuMTIgMCIvPgogIDxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+CiAgPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiLz4KICA8ZmVPZmZzZXQgZHk9IjEiLz4KICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIwLjUiLz4KICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwLjM0NTA5OCAwIDAgMCAwIDAuNCAwIDAgMCAwIDAuNDk0MTE4IDAgMCAwIDAuMTIgMCIvPgogIDxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3ciIHJlc3VsdD0iZWZmZWN0Ml9kcm9wU2hhZG93Ii8+CiAgPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QyX2Ryb3BTaGFkb3ciIHJlc3VsdD0ic2hhcGUiLz4KICA8L2ZpbHRlcj4KICA8L2RlZnM+Cjwvc3ZnPgo="
                                      width={18}
                                      height={25}
                                    />
                                  </div>
                                </div>
                                <div className="minimap">
                                  <div
                                    className="tv-lightweight-charts"
                                    style={{
                                      overflow: "hidden",
                                      width: "874px",
                                      height: "50px",
                                      userSelect: "none",
                                      WebkitTapHighlightColor: "transparent",
                                    }}
                                  >
                                    <table
                                      cellSpacing={0}
                                      style={{ height: "50px", width: "874px" }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td style={{ padding: "0px" }} />
                                          <td
                                            style={{
                                              padding: "0px",
                                              position: "relative",
                                              width: "874px",
                                              height: "50px",
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                position: "relative",
                                                overflow: "hidden",
                                              }}
                                            >
                                              <canvas
                                                width={1748}
                                                height={100}
                                                style={{
                                                  width: "874px",
                                                  height: "50px",
                                                  position: "absolute",
                                                  zIndex: 1,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                              <canvas
                                                width={1748}
                                                height={100}
                                                style={{
                                                  width: "874px",
                                                  height: "50px",
                                                  position: "absolute",
                                                  zIndex: 2,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                            </div>
                                          </td>
                                          <td style={{ padding: "0px" }} />
                                        </tr>
                                        <tr style={{ display: "none" }}>
                                          <td style={{ padding: "0px" }} />
                                          <td
                                            style={{
                                              height: "0px",
                                              padding: "0px",
                                              width: "874px",
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                position: "relative",
                                                overflow: "hidden",
                                              }}
                                            >
                                              <canvas
                                                width={1748}
                                                height={0}
                                                style={{
                                                  width: "874px",
                                                  height: "0px",
                                                  position: "absolute",
                                                  zIndex: 1,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                              <canvas
                                                width={1748}
                                                height={0}
                                                style={{
                                                  width: "874px",
                                                  height: "0px",
                                                  position: "absolute",
                                                  zIndex: 2,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                            </div>
                                          </td>
                                          <td style={{ padding: "0px" }} />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                                <div className="minimap-time">
                                  <div
                                    className="tv-lightweight-charts"
                                    style={{
                                      overflow: "hidden",
                                      width: "874px",
                                      height: "50px",
                                      userSelect: "none",
                                      WebkitTapHighlightColor: "transparent",
                                    }}
                                  >
                                    <table
                                      cellSpacing={0}
                                      style={{ height: "50px", width: "874px" }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td style={{ padding: "0px" }} />
                                          <td
                                            style={{
                                              padding: "0px",
                                              position: "relative",
                                              width: "874px",
                                              height: "24px",
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                position: "relative",
                                                overflow: "hidden",
                                              }}
                                            >
                                              <canvas
                                                width={1748}
                                                height={48}
                                                style={{
                                                  width: "874px",
                                                  height: "24px",
                                                  position: "absolute",
                                                  zIndex: 1,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                              <canvas
                                                width={1748}
                                                height={48}
                                                style={{
                                                  width: "874px",
                                                  height: "24px",
                                                  position: "absolute",
                                                  zIndex: 2,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                            </div>
                                          </td>
                                          <td style={{ padding: "0px" }} />
                                        </tr>
                                        <tr>
                                          <td style={{ padding: "0px" }} />
                                          <td
                                            style={{
                                              height: "26px",
                                              padding: "0px",
                                              width: "874px",
                                            }}
                                          >
                                            <div
                                              style={{
                                                width: "100%",
                                                height: "100%",
                                                position: "relative",
                                                overflow: "hidden",
                                              }}
                                            >
                                              <canvas
                                                width={1748}
                                                height={52}
                                                style={{
                                                  width: "874px",
                                                  height: "26px",
                                                  position: "absolute",
                                                  zIndex: 1,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                              <canvas
                                                width={1748}
                                                height={52}
                                                style={{
                                                  width: "874px",
                                                  height: "26px",
                                                  position: "absolute",
                                                  zIndex: 2,
                                                  left: "0px",
                                                  top: "0px",
                                                }}
                                              />
                                            </div>
                                          </td>
                                          <td style={{ padding: "0px" }} />
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sc-16r8icm-0 iutcov">
              <div className="sc-16r8icm-0 hgKnTV">
                <div className="sc-16r8icm-0 nds9rn-0 dAxhCK">
                  <h2 color="text" className="sc-1q9q90x-0 bjfmoe">
                    BTC Thống kê giá
                  </h2>
                  <div
                    itemScope
                    itemType="https://schema.org/Table"
                    className="sc-16r8icm-0 fmPyWa"
                  >
                    <table>
                      <caption itemProp="about">Bitcoin Giá hôm nay</caption>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <strong>Giá Bitcoin</strong>
                          </th>
                          <td>$44,934.03</td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span className="nds9rn-1 hhqaJP">
                              Thay đổi giá<span className="badge24h">24h</span>
                            </span>
                          </th>
                          <td>
                            <span>$1,611.51</span>
                            <div>
                              <span
                                className="sc-15yy2pl-0 kAXKAX"
                                style={{ fontSize: "12px", fontWeight: 600 }}
                              >
                                <span className="icon-Caret-up" />
                                3.72%
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Thấp 24 giờ / Cao 24 giờ</th>
                          <td>
                            <div>$42,950.44 /</div>
                            <div>$44,999.49</div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span className="nds9rn-1 hhqaJP">
                              Khối lượng giao dịch
                              <span className="badge24h">24h</span>
                            </span>
                          </th>
                          <td>
                            <span>$35,079,399,934.10</span>
                            <div>
                              <span
                                className="sc-15yy2pl-0 kAXKAX"
                                style={{ fontSize: "12px", fontWeight: 600 }}
                              >
                                <span className="icon-Caret-up" />
                                17.91%
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Khối lượng / Vốn hóa thị trường</th>
                          <td>0.04113</td>
                        </tr>
                        <tr>
                          <th scope="row">Ưu thế thị trường</th>
                          <td>
                            <span className>42,04%</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">Thứ hạng trên thị trường</th>
                          <td>#1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    itemScope
                    itemType="https://schema.org/Table"
                    className="sc-16r8icm-0 fmPyWa"
                  >
                    <table>
                      <caption itemProp="about">
                        Vốn hóa thị trường của Bitcoin
                      </caption>
                      <tbody>
                        <tr>
                          <th scope="row">Vốn hóa thị trường</th>
                          <td>
                            <span>$852,843,392,000.53</span>
                            <div>
                              <span
                                className="sc-15yy2pl-0 kAXKAX"
                                style={{ fontSize: "12px", fontWeight: 600 }}
                              >
                                <span className="icon-Caret-up" />
                                4.35%
                              </span>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            Vốn hóa thị trường được pha loãng hoàn toàn
                          </th>
                          <td>
                            <span>$942,940,851,542.03</span>
                            <div>
                              <span
                                className="sc-15yy2pl-0 kAXKAX"
                                style={{ fontSize: "12px", fontWeight: 600 }}
                              >
                                <span className="icon-Caret-up" />
                                4.34%
                              </span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="sc-16r8icm-0 kjciSH hide">
                    <div
                      itemScope
                      itemType="https://schema.org/Table"
                      className="sc-16r8icm-0 fmPyWa"
                    >
                      <table>
                        <caption itemProp="about">
                          Bitcoin Giá ngày hôm qua
                        </caption>
                        <tbody>
                          <tr>
                            <th scope="row">Thấp / Cao của hôm qua</th>
                            <td>
                              <div>$42,726.16 /</div>
                              <div>$44,131.85</div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Mức giá Mở/Đóng cửa của ngày hôm qua
                            </th>
                            <td>
                              <div>$42,886.65 /</div>
                              <div>$43,960.93</div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Biến động của ngày hôm qua</th>
                            <td>
                              <div className="sc-16r8icm-0 sc-1siv958-0 kUSSuI">
                                <p
                                  color="green"
                                  fontSize={1}
                                  className="sc-1eb5slv-0 sc-1siv958-1 jnWaEv"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    height="14px"
                                    width="14px"
                                    viewBox="0 0 24 24"
                                    className="sc-16r8icm-0 dWGZqy"
                                  >
                                    <path d="M18.0566 16H5.94336C5.10459 16 4.68455 14.9782 5.27763 14.3806L11.3343 8.27783C11.7019 7.90739 12.2981 7.90739 12.6657 8.27783L18.7223 14.3806C19.3155 14.9782 18.8954 16 18.0566 16Z" />
                                  </svg>
                                  2.5%
                                </p>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              Khối lượng giao dịch của ngày hôm qua
                            </th>
                            <td>$31,042,992,291.34</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      itemScope
                      itemType="https://schema.org/Table"
                      className="sc-16r8icm-0 fmPyWa"
                    >
                      <table>
                        <caption itemProp="about">
                          Bitcoin Lịch sử giá cả
                        </caption>
                        <tbody>
                          <tr>
                            <th scope="row">Thấp 7 ngày / Cao 7 ngày</th>
                            <td>
                              <div>$40,668.04 /</div>
                              <div>$44,999.49</div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Thấp 30 ngày / Cao 30 ngày</th>
                            <td>
                              <div>$34,459.22 /</div>
                              <div>$45,077.58</div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Thấp 90 ngày / Cao 90 ngày</th>
                            <td>
                              <div>$33,184.06 /</div>
                              <div>$51,956.33</div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">Thấp 52 tuần / Cao 52 tuần</th>
                            <td>
                              <div>$28,893.62 /</div>
                              <div>$68,789.63</div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div>Mức giá cao nhất lịch sử</div>
                              <small className="nds9rn-2 hhPSEo">
                                Nov 10, 2021 (4 months ago)
                              </small>
                            </th>
                            <td>
                              <span>$68,789.63</span>
                              <div>
                                <span
                                  className="sc-15yy2pl-0 hzgCfk"
                                  style={{ fontSize: "12px", fontWeight: 600 }}
                                >
                                  <span className="icon-Caret-down" />
                                  34.73%
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div>Mức giá thấp nhất lịch sử</div>
                              <small className="nds9rn-2 hhPSEo">
                                Jul 05, 2013 (9 years ago)
                              </small>
                            </th>
                            <td>
                              <span>$65.53</span>
                              <div>
                                <span
                                  className="sc-15yy2pl-0 kAXKAX"
                                  style={{ fontSize: "12px", fontWeight: 600 }}
                                >
                                  <span className="icon-Caret-up" />
                                  68425.39%
                                </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              ROI của Bitcoin
                              <div className="n6mnj0-0 gPSlsu cmc-helper">
                                <div className="sc-1i7rbm6-0 bBCjQm cmc-popover">
                                  <div className="cmc-popover__trigger">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      height="16px"
                                      width="16px"
                                      viewBox="0 0 24 24"
                                      className="sc-16r8icm-0 cLpIEB cmc-icon"
                                    >
                                      <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433283 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0V0ZM10 15.28L9.902 15.3H9.702C9.642 15.288 9.582 15.278 9.524 15.262C9.25995 15.1929 9.0307 15.0288 8.8802 14.8011C8.7297 14.5734 8.66854 14.2981 8.70844 14.0281C8.74835 13.7581 8.88651 13.5123 9.09644 13.3379C9.30638 13.1635 9.57331 13.0726 9.84606 13.0829C10.1188 13.0931 10.3782 13.2036 10.5745 13.3933C10.7707 13.583 10.8901 13.8384 10.9097 14.1107C10.9293 14.3829 10.8477 14.6528 10.6805 14.8686C10.5134 15.0844 10.2725 15.2309 10.004 15.28H10ZM13.2 8.018C13.0859 8.38607 12.8872 8.72235 12.62 9C12.3143 9.306 11.9794 9.58131 11.62 9.822C11.42 9.96 11.242 10.104 11.054 10.248C10.8839 10.3886 10.7559 10.5734 10.684 10.782C10.644 10.89 10.598 10.998 10.556 11.106C10.5045 11.2496 10.4101 11.374 10.2856 11.4624C10.1612 11.5507 10.0126 11.5987 9.86 11.6C9.68722 11.619 9.51251 11.5913 9.354 11.52C9.234 11.4614 9.13001 11.3745 9.05094 11.2669C8.97187 11.1592 8.92008 11.034 8.9 10.902C8.86845 10.7182 8.8734 10.53 8.91458 10.3481C8.95576 10.1663 9.03236 9.99427 9.14 9.842C9.31308 9.58899 9.52502 9.3649 9.768 9.178C10.03 8.964 10.3 8.76 10.568 8.546C10.7904 8.37577 10.9767 8.16297 11.116 7.92C11.2242 7.71385 11.2687 7.48018 11.2437 7.2487C11.2188 7.01723 11.1256 6.79838 10.976 6.62C10.8174 6.44709 10.6068 6.33055 10.376 6.288C10.0688 6.21628 9.74858 6.22178 9.444 6.304C9.2878 6.34666 9.14254 6.42228 9.018 6.52578C8.89346 6.62927 8.79253 6.75824 8.722 6.904C8.628 7.08 8.546 7.26 8.458 7.438C8.39346 7.5726 8.30618 7.69507 8.2 7.8C8.10796 7.88085 8.00028 7.94193 7.88365 7.97943C7.76702 8.01693 7.64392 8.03006 7.522 8.018C7.37212 8.0141 7.22535 7.97432 7.094 7.902C6.97306 7.83944 6.87173 7.74472 6.80115 7.62827C6.73058 7.51182 6.6935 7.37816 6.694 7.242C6.68377 6.80031 6.82491 6.36841 7.094 6.018C7.4051 5.59747 7.81804 5.26299 8.294 5.046C8.65301 4.87561 9.03738 4.76483 9.432 4.718L9.656 4.696H10.056L10.272 4.716C10.8068 4.74974 11.3302 4.88552 11.814 5.116C12.2461 5.31493 12.6145 5.62997 12.878 6.026C13.0787 6.33792 13.2028 6.69294 13.24 7.062C13.2941 7.37993 13.2804 7.70569 13.2 8.018Z" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </th>
                            <td>
                              <div className="sc-16r8icm-0 sc-1siv958-0 kUSSuI">
                                <p
                                  color="green"
                                  fontSize={1}
                                  className="sc-1eb5slv-0 sc-1siv958-1 jnWaEv"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    height="14px"
                                    width="14px"
                                    viewBox="0 0 24 24"
                                    className="sc-16r8icm-0 dWGZqy"
                                  >
                                    <path d="M18.0566 16H5.94336C5.10459 16 4.68455 14.9782 5.27763 14.3806L11.3343 8.27783C11.7019 7.90739 12.2981 7.90739 12.6657 8.27783L18.7223 14.3806C19.3155 14.9782 18.8954 16 18.0566 16Z" />
                                  </svg>
                                  33086.95%
                                </p>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      itemScope
                      itemType="https://schema.org/Table"
                      className="sc-16r8icm-0 fmPyWa"
                    >
                      <table>
                        <caption itemProp="about">Bitcoin Cung cấp</caption>
                        <tbody>
                          <tr>
                            <th scope="row">Lượng cung lưu hành</th>
                            <td>18.993.462 BTC</td>
                          </tr>
                          <tr>
                            <th scope="row">Tổng cung</th>
                            <td>18.993.462 BTC</td>
                          </tr>
                          <tr>
                            <th scope="row">Tổng cung tối đa</th>
                            <td>21.000.000 BTC</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <button className="x0o17e-0 dDXPcp">Hiện thêm</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
