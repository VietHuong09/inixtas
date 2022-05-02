import React from "react";
import function1 from "./images/function1.png";
import function2 from "./images/function2.png";
import function3 from "./images/function3.png";
import function4 from "./images/function4.png";
import function5 from "./images/function5.png";
import function6 from "./images/function6.png";
import "./Home.css";
import Pdf from "react-to-pdf";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ref = React.createRef();

export default function Home() {
  const _exportPdf = () => {

    html2canvas(document.querySelector("#main")).then(canvas => {
       document.body.appendChild(canvas);  // if you want see your screenshot in body.
       const imgData = canvas.toDataURL('image/png');
       const pdf = new jsPDF();
       pdf.addImage(imgData, 'PNG', 0, 0);
       pdf.save("download.pdf"); 
   });

}
  return (
    <>
      <section id="main" ref={ref}>
        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients clients">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src={function1}
                  style={{ width: "100%" }}
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src={function2}
                  style={{ width: "100%" }}
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay={100}
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src={function3}
                  style={{ width: "100%" }}
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay={200}
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src={function4}
                  style={{ width: "100%" }}
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay={300}
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src={function5}
                  className="img-fluid"
                  style={{ width: "100%" }}
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay={400}
                />
              </div>
              <div className="col-lg-2 col-md-4 col-6">
                <img
                  src={function6}
                  style={{ width: "100%" }}
                  className="img-fluid"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay={500}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="overview">
          <table className="h7vnx2-2 czTsgW cmc-table  ">
            <colgroup>
              <col />
              <col
                style={{ width: "50px", minWidth: "auto", maxWidth: "auto" }}
              />
              <col
                style={{ width: "250px", minWidth: "auto", maxWidth: "auto" }}
              />
              <col />
              <col
                style={{ width: "84px", minWidth: "auto", maxWidth: "auto" }}
              />
              <col
                style={{ width: "84px", minWidth: "auto", maxWidth: "auto" }}
              />
              <col
                style={{ width: "200px", minWidth: "auto", maxWidth: "auto" }}
              />
              <col
                style={{ width: "200px", minWidth: "auto", maxWidth: "auto" }}
              />
              <col
                style={{ width: "200px", minWidth: "auto", maxWidth: "auto" }}
              />
              <col />
              <col
                style={{ width: "50px", minWidth: "auto", maxWidth: "auto" }}
              />
            </colgroup>
            <thead>
              <tr>
                <th className="stickyTop" />
                <th className="stickyTop" style={{ textAlign: "left" }}>
                  <div className="s8fs2i-0 bOfkjI">
                    <div className="s8fs2i-1 gbtfIe">
                      <p
                        className="sc-1eb5slv-0 iKUzJY rank-column-title"
                        fontSize={0}
                        color="text"
                      >
                        #
                      </p>
                      <span className="icon-Caret-up" />
                    </div>
                  </div>
                </th>
                <th className="stickyTop" style={{ textAlign: "left" }}>
                  <div className="s8fs2i-0 bOfkjI">
                    <div className="s8fs2i-1 gbtfIe">
                      <p
                        className="sc-1eb5slv-0 iKUzJY"
                        fontSize={0}
                        color="text"
                      >
                        Tên
                      </p>
                    </div>
                  </div>
                </th>
                <th className="stickyTop">
                  <div className="s8fs2i-0 pEXWP">
                    <div className="s8fs2i-1 gbtfIe">
                      <p
                        className="sc-1eb5slv-0 iKUzJY"
                        fontSize={0}
                        color="text"
                      >
                        Giá
                      </p>
                    </div>
                  </div>
                </th>
                <th className="stickyTop" style={{ textAlign: "right" }}>
                  <div>
                    <div className="s8fs2i-0 pEXWP">
                      <div className="s8fs2i-1 gbtfIe">
                        <p
                          className="sc-1eb5slv-0 iKUzJY"
                          fontSize={0}
                          color="text"
                        >
                          24h %
                        </p>
                      </div>
                    </div>
                  </div>
                </th>
                <th className="stickyTop" style={{ textAlign: "right" }}>
                  <div>
                    <div className="s8fs2i-0 pEXWP">
                      <div className="s8fs2i-1 gbtfIe">
                        <p
                          className="sc-1eb5slv-0 iKUzJY"
                          fontSize={0}
                          color="text"
                        >
                          7d %
                        </p>
                      </div>
                    </div>
                  </div>
                </th>
                <th className="stickyTop" style={{ textAlign: "right" }}>
                  <div className="s8fs2i-0 pEXWP">
                    <div className="s8fs2i-1 gbtfIe">
                      <p
                        className="sc-1eb5slv-0 iKUzJY"
                        fontSize={0}
                        color="text"
                      >
                        Vốn hóa thị trường
                      </p>
                    </div>
                    <div className="sbsk6s-2 cGlIZe" aria-expanded="false">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height={16}
                        width={16}
                        viewBox="0 0 24 24"
                        color="neutral4"
                        className="sc-16r8icm-0 kLSxec"
                      >
                        <path d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM14.215 17.2367C13.6642 17.4533 11.755 18.365 10.655 17.3958C10.3267 17.1075 10.1633 16.7417 10.1633 16.2975C10.1633 15.4658 10.4367 14.7408 10.9292 13C11.0158 12.6708 11.1217 12.2442 11.1217 11.9058C11.1217 11.3217 10.9 11.1667 10.2992 11.1667C10.0058 11.1667 9.68083 11.2708 9.38667 11.3808L9.54917 10.715C10.205 10.4483 11.0283 10.1233 11.7333 10.1233C12.7908 10.1233 13.5692 10.6508 13.5692 11.6542C13.5692 11.9433 13.5192 12.45 13.4142 12.8L12.8058 14.9517C12.68 15.3867 12.4525 16.3458 12.805 16.63C13.1517 16.9108 13.9725 16.7617 14.3775 16.5708L14.215 17.2367ZM13.21 8.66667C12.52 8.66667 11.96 8.10667 11.96 7.41667C11.96 6.72667 12.52 6.16667 13.21 6.16667C13.9 6.16667 14.46 6.72667 14.46 7.41667C14.46 8.10667 13.9 8.66667 13.21 8.66667Z" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="stickyTop" style={{ textAlign: "right" }}>
                  <div className="s8fs2i-0 pEXWP">
                    <div className="s8fs2i-1 gbtfIe">
                      <p
                        className="sc-1eb5slv-0 iKUzJY"
                        fontSize={0}
                        color="text"
                      >
                        Khối lượng(24 giờ)
                      </p>
                    </div>
                    <div className="sbsk6s-2 cGlIZe" aria-expanded="false">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        height={16}
                        width={16}
                        viewBox="0 0 24 24"
                        color="neutral4"
                        className="sc-16r8icm-0 kLSxec"
                      >
                        <path d="M12 2C6.48583 2 2 6.48583 2 12C2 17.5142 6.48583 22 12 22C17.5142 22 22 17.5142 22 12C22 6.48583 17.5142 2 12 2ZM14.215 17.2367C13.6642 17.4533 11.755 18.365 10.655 17.3958C10.3267 17.1075 10.1633 16.7417 10.1633 16.2975C10.1633 15.4658 10.4367 14.7408 10.9292 13C11.0158 12.6708 11.1217 12.2442 11.1217 11.9058C11.1217 11.3217 10.9 11.1667 10.2992 11.1667C10.0058 11.1667 9.68083 11.2708 9.38667 11.3808L9.54917 10.715C10.205 10.4483 11.0283 10.1233 11.7333 10.1233C12.7908 10.1233 13.5692 10.6508 13.5692 11.6542C13.5692 11.9433 13.5192 12.45 13.4142 12.8L12.8058 14.9517C12.68 15.3867 12.4525 16.3458 12.805 16.63C13.1517 16.9108 13.9725 16.7617 14.3775 16.5708L14.215 17.2367ZM13.21 8.66667C12.52 8.66667 11.96 8.10667 11.96 7.41667C11.96 6.72667 12.52 6.16667 13.21 6.16667C13.9 6.16667 14.46 6.72667 14.46 7.41667C14.46 8.10667 13.9 8.66667 13.21 8.66667Z" />
                      </svg>
                    </div>
                  </div>
                </th>
                <th className="stickyTop" style={{ textAlign: "right" }}>
                  <div className="s8fs2i-0 pEXWP">
                    <div className="s8fs2i-1 gbtfIe">
                      <p
                        className="sc-1eb5slv-0 iKUzJY"
                        fontSize={0}
                        color="text"
                      >
                        Lượng cung lưu hành
                      </p>
                    </div>
                    <div className="sbsk6s-2 cGlIZe" aria-expanded="false">
                      <span className="icon-Info" />
                    </div>
                  </div>
                </th>
                <th className="stickyTop" style={{ textAlign: "right" }}>
                  <p
                    style={{ fontSize: "12px" }}
                    color="text"
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                  >
                    7 ngày qua
                  </p>
                </th>
                <th className="stickyTop" />
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    1
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/bitcoin/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png"
                          loading="lazy"
                          alt="BTC logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            Bitcoin
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">1</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              BTC
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="sc-16r8icm-0 bKmQGi">
                      <div data-nosnippet="true" aria-expanded="false">
                        <div className="sc-1x3bens-0 hRpznX">
                          <button
                            style={{
                              whiteSpace: "nowrap",
                              background: "var(--theme-light-blue)",
                              color: "var(--theme-light-blue-font)",
                            }}
                            className="x0o17e-0 kPvqGV"
                          >
                            Mua
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/bitcoin/markets/"
                      className="cmc-link"
                    >
                      <span>$42,215.19</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 hzgCfk">
                    <span className="icon-Caret-down" />
                    1.57{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    3.72{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    style={{ whiteSpace: "nowrap" }}
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$799.02B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $799,015,182,696
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/bitcoin/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $25,700,771,942
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        610,874 BTC
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div
                    style={{ cursor: "pointer" }}
                    className="sc-16r8icm-0 g5oqcc-0 drLITg"
                  >
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        18,991,543 BTC
                      </p>
                    </div>
                    <div width={160} className="qlsl66-0 jrRnei">
                      <div width={145} className="qlsl66-1 gntWGK" />
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/bitcoin/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"
                      alt="bitcoin-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    2
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/ethereum/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                          loading="lazy"
                          alt="ETH logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            Ethereum
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">2</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              ETH
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="sc-16r8icm-0 bKmQGi">
                      <div data-nosnippet="true" aria-expanded="false">
                        <div className="sc-1x3bens-0 hRpznX">
                          <button
                            style={{
                              whiteSpace: "nowrap",
                              background: "var(--theme-light-blue)",
                              color: "var(--theme-light-blue-font)",
                            }}
                            className="x0o17e-0 kPvqGV"
                          >
                            Mua
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/ethereum/markets/"
                      className="cmc-link"
                    >
                      <span>$2,977.36</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 hzgCfk">
                    <span className="icon-Caret-down" />
                    1.03{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    10.70{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    style={{ whiteSpace: "nowrap" }}
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$354.79B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $354,789,383,577
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/ethereum/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $13,541,627,050
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        4,583,135 ETH
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div
                    style={{ cursor: "" }}
                    className="sc-16r8icm-0 g5oqcc-0 drLITg"
                  >
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        120,077,726 ETH
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/ethereum/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg"
                      alt="ethereum-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    3
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/tether/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
                          loading="lazy"
                          alt="USDT logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            Tether
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">3</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              USDT
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/tether/markets/"
                      className="cmc-link"
                    >
                      <span>$1.00</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    0.00{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    0.00{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    style={{ whiteSpace: "nowrap" }}
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$80.85B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $80,851,785,410
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/tether/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $63,264,741,278
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        63,243,575,337 USDT
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div
                    style={{ cursor: "" }}
                    className="sc-16r8icm-0 g5oqcc-0 drLITg"
                  >
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        80,824,735,523 USDT
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/tether/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg"
                      alt="tether-7d-price-graph"
                      className="h7vnx2-0 bCltOL"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    4
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/bnb/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png"
                          loading="lazy"
                          alt="BNB logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            BNB
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">4</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              BNB
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="sc-16r8icm-0 bKmQGi">
                      <div data-nosnippet="true" aria-expanded="false">
                        <div className="sc-1x3bens-0 hRpznX">
                          <button
                            style={{
                              whiteSpace: "nowrap",
                              background: "var(--theme-light-blue)",
                              color: "var(--theme-light-blue-font)",
                            }}
                            className="x0o17e-0 kPvqGV"
                          >
                            Mua
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a href="/vi/currencies/bnb/markets/" className="cmc-link">
                      <span>$405.05</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 hzgCfk">
                    <span className="icon-Caret-down" />
                    0.82{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    6.99{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    style={{ whiteSpace: "nowrap" }}
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$66.49B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $66,487,648,347
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a href="/vi/currencies/bnb/markets/" className="cmc-link">
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $1,462,072,005
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        3,630,939 BNB
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div
                    style={{ cursor: "" }}
                    className="sc-16r8icm-0 g5oqcc-0 drLITg"
                  >
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        165,116,761 BNB
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a href="/vi/currencies/bnb/?period=7d" className="cmc-link">
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg"
                      alt="bnb-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    5
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/usd-coin/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
                          loading="lazy"
                          alt="USDC logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            USD Coin
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">5</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              USDC
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/usd-coin/markets/"
                      className="cmc-link"
                    >
                      <span>$1.00</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    0.03{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 hzgCfk">
                    <span className="icon-Caret-down" />
                    0.00{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    style={{ whiteSpace: "nowrap" }}
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$52.56B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $52,564,925,739
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/usd-coin/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $3,465,181,218
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        3,465,632,197 USDC
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div
                    style={{ cursor: "" }}
                    className="sc-16r8icm-0 g5oqcc-0 drLITg"
                  >
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        52,571,766,854 USDC
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/usd-coin/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg"
                      alt="usd-coin-7d-price-graph"
                      className="h7vnx2-0 bCltOL"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    6
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/xrp/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/52.png"
                          loading="lazy"
                          alt="XRP logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            XRP
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">6</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              XRP
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a href="/vi/currencies/xrp/markets/" className="cmc-link">
                      <span>$0.8269</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 hzgCfk">
                    <span className="icon-Caret-down" />
                    2.14{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    7.43{/* */}%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    style={{ whiteSpace: "nowrap" }}
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$39.79B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $39,793,717,248
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a href="/vi/currencies/xrp/markets/" className="cmc-link">
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $2,102,734,962
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        2,542,788,075 XRP
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div
                    style={{ cursor: "pointer" }}
                    className="sc-16r8icm-0 g5oqcc-0 drLITg"
                  >
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        48,121,609,012 XRP
                      </p>
                    </div>
                    <div width={160} className="qlsl66-0 jrRnei">
                      <div width={77} className="qlsl66-1 dXIGme" />
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a href="/vi/currencies/xrp/?period=7d" className="cmc-link">
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg"
                      alt="xrp-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    12
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/binance-usd/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png"
                          loading="lazy"
                          alt="BUSD logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            Binance USD
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">12</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              BUSD
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/binance-usd/markets/"
                      className="cmc-link"
                    >
                      <span>$1.00</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    0.07%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    0.06%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$17.70B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $17,696,982,968
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/binance-usd/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $5,112,257,160
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        5,105,945,211 BUSD
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 g5oqcc-0 drLITg">
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        17,675,133,040 BUSD
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/binance-usd/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/4687.svg"
                      alt="binance-usd-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    13
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/dogecoin/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/74.png"
                          loading="lazy"
                          alt="DOGE logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            Dogecoin
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">13</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              DOGE
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/dogecoin/markets/"
                      className="cmc-link"
                    >
                      <span>$0.1221</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 hzgCfk">
                    <span className="icon-Caret-down" />
                    0.98%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    7.19%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$16.20B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $16,199,225,473
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/dogecoin/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $469,233,749
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        3,842,998,559 DOGE
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 g5oqcc-0 drLITg">
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        132,670,764,300 DOGE
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/dogecoin/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/74.svg"
                      alt="dogecoin-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    14
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/terrausd/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png"
                          loading="lazy"
                          alt="UST logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            TerraUSD
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">14</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              UST
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/terrausd/markets/"
                      className="cmc-link"
                    >
                      <span>$1.00</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    0.11%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    0.03%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$15.70B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $15,695,745,075
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/terrausd/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $469,216,530
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        467,851,966 UST
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 g5oqcc-0 drLITg">
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        15,650,099,103 UST
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/terrausd/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg"
                      alt="terrausd-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    15
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/shiba-inu/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png"
                          loading="lazy"
                          alt="SHIB logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            Shiba Inu
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">15</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              SHIB
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="sc-16r8icm-0 bKmQGi">
                      <div data-nosnippet="true" aria-expanded="false">
                        <div className="sc-1x3bens-0 hRpznX">
                          <button
                            className="x0o17e-0 kPvqGV"
                            style={{
                              whiteSpace: "nowrap",
                              background: "var(--theme-light-blue)",
                              color: "var(--theme-light-blue-font)",
                            }}
                          >
                            Mua
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/shiba-inu/markets/"
                      className="cmc-link"
                    >
                      <span>$0.0000236</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 hzgCfk">
                    <span className="icon-Caret-down" />
                    0.75%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    7.27%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$12.96B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $12,958,806,676
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/shiba-inu/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $821,958,168
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        34,826,281,299,898 SHIB
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 g5oqcc-0 drLITg">
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        549,063,278,876,302 SHIB
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/shiba-inu/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5994.svg"
                      alt="shiba-inu-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star-Filled" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    16
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/polygon/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"
                          loading="lazy"
                          alt="MATIC logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            Polygon
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">16</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              MATIC
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <div className="sc-16r8icm-0 bKmQGi">
                      <div data-nosnippet="true" aria-expanded="false">
                        <div className="sc-1x3bens-0 hRpznX">
                          <button
                            className="x0o17e-0 kPvqGV"
                            style={{
                              whiteSpace: "nowrap",
                              background: "var(--theme-light-blue)",
                              color: "var(--theme-light-blue-font)",
                            }}
                          >
                            Mua
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/polygon/markets/"
                      className="cmc-link"
                    >
                      <span>$1.52</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    0.00%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    8.48%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$11.68B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $11,675,000,207
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/polygon/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $607,699,564
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        400,590,836 MATIC
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div
                    className="sc-16r8icm-0 g5oqcc-0 drLITg"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        7,696,069,521 MATIC
                      </p>
                    </div>
                    <div width={160} className="qlsl66-0 jrRnei">
                      <div width={124} className="qlsl66-1 gntVvV" />
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/polygon/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3890.svg"
                      alt="polygon-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    17
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a
                      href="/vi/currencies/wrapped-bitcoin/"
                      className="cmc-link"
                    >
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png"
                          loading="lazy"
                          alt="WBTC logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            Wrapped Bitcoin
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">17</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              WBTC
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/wrapped-bitcoin/markets/"
                      className="cmc-link"
                    >
                      <span>$42,147.47</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 hzgCfk">
                    <span className="icon-Caret-down" />
                    1.49%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    4.32%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$11.53B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $11,530,736,787
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/wrapped-bitcoin/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $120,632,615
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        2,862 WBTC
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 g5oqcc-0 drLITg">
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        273,581 WBTC
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/wrapped-bitcoin/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3717.svg"
                      alt="wrapped-bitcoin-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="sc-80eeb0-1 iuAjRY">
                    <span className="icon-Star" />
                  </span>
                </td>
                <td style={{ textAlign: "left" }}>
                  <p color="text2" fontSize={0} className="sc-1eb5slv-0 etpvrL">
                    18
                  </p>
                </td>
                <td style={{ textAlign: "left" }}>
                  <div display="flex" className="sc-16r8icm-0 escjiH">
                    <a href="/vi/currencies/cronos/" className="cmc-link">
                      <div className="sc-16r8icm-0 sc-1teo54s-0 dBKWCw">
                        <img
                          className="coin-logo"
                          src="https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png"
                          loading="lazy"
                          alt="CRO logo"
                        />
                        <div className="sc-16r8icm-0 sc-1teo54s-1 dNOTPP">
                          <p
                            fontWeight="semibold"
                            color="text"
                            fontSize={1}
                            className="sc-1eb5slv-0 iworPT"
                          >
                            Cronos
                          </p>
                          <div
                            data-nosnippet="true"
                            className="sc-1teo54s-2 fZIJcI"
                          >
                            <div className="sc-1teo54s-3 etWhyV">18</div>
                            <p
                              color="text3"
                              className="sc-1eb5slv-0 gGIpIK coin-item-symbol"
                              fontSize={1}
                            >
                              CRO
                            </p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </td>
                <td>
                  <div className="sc-131di3y-0 cLgOOr">
                    <a
                      href="/vi/currencies/cronos/markets/"
                      className="cmc-link"
                    >
                      <span>$0.4237</span>
                    </a>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    2.05%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <span className="sc-15yy2pl-0 kAXKAX">
                    <span className="icon-Caret-up" />
                    7.07%
                  </span>
                </td>
                <td style={{ textAlign: "right" }}>
                  <p
                    color="text"
                    fontSize={1}
                    className="sc-1eb5slv-0 hykWbK"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <span className="sc-1ow4cwt-0 iosgXe">$10.70B</span>
                    <span data-nosnippet="true" className="sc-1ow4cwt-1 ieFnWP">
                      $10,704,583,279
                    </span>
                  </p>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div className="sc-16r8icm-0 j3nwcd-0 cRcnjD">
                    <a
                      href="/vi/currencies/cronos/markets/"
                      className="cmc-link"
                    >
                      <p
                        fontSize={1}
                        className="sc-1eb5slv-0 hykWbK font_weight_500"
                        color="text"
                      >
                        $93,691,968
                      </p>
                    </a>
                    <div data-nosnippet="true">
                      <p
                        color="text2"
                        fontSize={0}
                        className="sc-1eb5slv-0 etpvrL"
                      >
                        221,114,771 CRO
                      </p>
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div
                    className="sc-16r8icm-0 g5oqcc-0 drLITg"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="sc-16r8icm-0 g5oqcc-1 eGQXzN">
                      <p
                        fontSize={1}
                        fontWeight="medium"
                        color="text"
                        className="sc-1eb5slv-0 kZlTnE"
                      >
                        25,263,013,692 CRO
                      </p>
                    </div>
                    <div width={160} className="qlsl66-0 jrRnei">
                      <div width={134} className="qlsl66-1 gntVvo" />
                    </div>
                  </div>
                </td>
                <td style={{ textAlign: "right" }}>
                  <a
                    href="/vi/currencies/cronos/?period=7d"
                    className="cmc-link"
                  >
                    <img
                      src="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3635.svg"
                      alt="cronos-7d-price-graph"
                      className="h7vnx2-0 bCltOL isUp"
                      loading="lazy"
                    />
                  </a>
                </td>
                <td>
                  <div className="sc-16r8icm-0 kjciSH" aria-expanded="false">
                    <button className="x0o17e-0 ftvUnY sc-7pvt85-0 hmFKKb">
                      <span className="icon-More-Vertical" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* End Clients Section */}
        {/* ======= About Us Section ======= */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>About Us</h2>
            </div>
            <div className="row content">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={150}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Duis aute irure dolor
                    in reprehenderit in voluptate velit
                  </li>
                  <li>
                    <i className="ri-check-double-line" /> Ullamco laboris nisi
                    ut aliquip ex ea commodo consequat
                  </li>
                </ul>
              </div>
              <div
                className="col-lg-6 pt-4 pt-lg-0"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <a href="#" className="btn-learn-more">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Counts Section ======= */}
        <section id="counts" className="counts">
          <div className="container">
            <div className="row">
              <div
                className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start"
                data-aos="fade-right"
                data-aos-delay={150}
              >
                <img
                  src="assets/img/counts-img.svg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div
                className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0"
                data-aos="fade-left"
                data-aos-delay={300}
              >
                <div className="content d-flex flex-column justify-content-center">
                  <div className="row">
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-emoji-smile" />
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={65}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Happy Clients</strong> consequuntur voluptas
                          nostrum aliquid ipsam architecto ut.
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-journal-richtext" />
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={85}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Projects</strong> adipisci atque cum quia
                          aspernatur totam laudantium et quia dere tan
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-clock" />
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={18}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Years of experience</strong> aut commodi
                          quaerat modi aliquam nam ducimus aut voluptate non vel
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 d-md-flex align-items-md-stretch">
                      <div className="count-box">
                        <i className="bi bi-award" />
                        <span
                          data-purecounter-start={0}
                          data-purecounter-end={15}
                          data-purecounter-duration={1}
                          className="purecounter"
                        />
                        <p>
                          <strong>Awards</strong> rerum asperiores dolor alias
                          quo reprehenderit eum et nemo pad der
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .content*/}
              </div>
            </div>
          </div>
        </section>
        {/* End Counts Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Services</h2>
              <p>
                Magnam dolores commodi suscipit eius consequatur ex aliquid fug
              </p>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon">
                    <i className="bx bxl-dribbble" />
                  </div>
                  <h4 className="title">
                    <a href>Lorem Ipsum</a>
                  </h4>
                  <p className="description">
                    Voluptatum deleniti atque corrupti quos dolores et quas
                    molestias excepturi
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon">
                    <i className="bx bx-file" />
                  </div>
                  <h4 className="title">
                    <a href>Sed ut perspiciatis</a>
                  </h4>
                  <p className="description">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="icon">
                    <i className="bx bx-tachometer" />
                  </div>
                  <h4 className="title">
                    <a href>Magni Dolores</a>
                  </h4>
                  <p className="description">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <div
                  className="icon-box"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <div className="icon">
                    <i className="bx bx-world" />
                  </div>
                  <h4 className="title">
                    <a href>Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= More Services Section ======= */}
        <section id="more-services" className="more-services">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-stretch">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("assets/img/more-services-1.jpg")',
                  }}
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href>Lobira Duno</a>
                    </h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <div className="read-more">
                      <a href="#">
                        <i className="bi bi-arrow-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("assets/img/more-services-2.jpg")',
                  }}
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href>Limere Radses</a>
                    </h5>
                    <p className="card-text">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem doloremque laudantium, totam rem.
                    </p>
                    <div className="read-more">
                      <a href="#">
                        <i className="bi bi-arrow-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("assets/img/more-services-3.jpg")',
                  }}
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href>Nive Lodo</a>
                    </h5>
                    <p className="card-text">
                      Nemo enim ipsam voluptatem quia voluptas sit aut odit aut
                      fugit, sed quia magni dolores.
                    </p>
                    <div className="read-more">
                      <a href="#">
                        <i className="bi bi-arrow-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-stretch mt-4">
                <div
                  className="card"
                  style={{
                    backgroundImage: 'url("assets/img/more-services-4.jpg")',
                  }}
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href>Pale Treda</a>
                    </h5>
                    <p className="card-text">
                      Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                      quisquam laudantium voluptatem.
                    </p>
                    <div className="read-more">
                      <a href="#">
                        <i className="bi bi-arrow-right" /> Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End More Services Section */}
        {/* ======= Features Section ======= */}
        <section id="features" className="features">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Features</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={300}>
              <div className="col-lg-3 col-md-4">
                <div className="icon-box">
                  <i className="ri-store-line" style={{ color: "#ffbb2c" }} />
                  <h3>
                    <a href>Lorem Ipsum</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-bar-chart-box-line"
                    style={{ color: "#5578ff" }}
                  />
                  <h3>
                    <a href>Dolor Sitema</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                <div className="icon-box">
                  <i
                    className="ri-calendar-todo-line"
                    style={{ color: "#e80368" }}
                  />
                  <h3>
                    <a href>Sed perspiciatis</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                <div className="icon-box">
                  <i
                    className="ri-paint-brush-line"
                    style={{ color: "#e361ff" }}
                  />
                  <h3>
                    <a href>Magni Dolores</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-database-2-line"
                    style={{ color: "#47aeff" }}
                  />
                  <h3>
                    <a href>Nemo Enim</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-gradienter-line"
                    style={{ color: "#ffa76e" }}
                  />
                  <h3>
                    <a href>Eiusmod Tempor</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-file-list-3-line"
                    style={{ color: "#11dbcf" }}
                  />
                  <h3>
                    <a href>Midela Teren</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-price-tag-2-line"
                    style={{ color: "#4233ff" }}
                  />
                  <h3>
                    <a href>Pira Neve</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-anchor-line" style={{ color: "#b2904f" }} />
                  <h3>
                    <a href>Dirada Pack</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i className="ri-disc-line" style={{ color: "#b20969" }} />
                  <h3>
                    <a href>Moton Ideal</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-base-station-line"
                    style={{ color: "#ff5828" }}
                  />
                  <h3>
                    <a href>Verdo Park</a>
                  </h3>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 mt-4">
                <div className="icon-box">
                  <i
                    className="ri-fingerprint-line"
                    style={{ color: "#29cc61" }}
                  />
                  <h3>
                    <a href>Flavor Nivelanda</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Testimonials</h2>
              <p>
                Magnam dolores commodi suscipit eum quidem consectetur velit
              </p>
            </div>
            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-1.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Saul Goodman</h3>
                      <h4>Ceo &amp; Founder</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Proin iaculis purus consequat sem cure digni ssim donec
                        porttitora entum suscipit rhoncus. Accusantium quam,
                        ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                        risus at semper.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-2.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Sara Wilsson</h3>
                      <h4>Designer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Export tempor illum tamen malis malis eram quae irure
                        esse labore quem cillum quid cillum eram malis quorum
                        velit fore eram velit sunt aliqua noster fugiat irure
                        amet legam anim culpa.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-3.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Jena Karlis</h3>
                      <h4>Store Owner</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Enim nisi quem export duis labore cillum quae magna enim
                        sint quorum nulla quem veniam duis minim tempor labore
                        quem eram duis noster aute amet eram fore quis sint
                        minim.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-4.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Matt Brandon</h3>
                      <h4>Freelancer</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Fugiat enim eram quae cillum dolore dolor amet nulla
                        culpa multos export minim fugiat minim velit minim dolor
                        enim duis veniam ipsum anim magna sunt elit fore quem
                        dolore labore illum veniam.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/testimonials/testimonials-5.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>John Larson</h3>
                      <h4>Entrepreneur</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left" />
                        Quis quorum aliqua sint quem legam fore sunt eram irure
                        aliqua veniam tempor noster veniam enim culpa labore
                        duis sunt culpa nulla illum cillum fugiat legam esse
                        veniam culpa fore nisi cillum quid.
                        <i className="bx bxs-quote-alt-right quote-icon-right" />
                      </p>
                    </div>
                  </div>
                </div>
                {/* End testimonial item */}
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        {/* End Testimonials Section */}
        {/* ======= Portfolio Section ======= */}
        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Portfolio</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay={200}>
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li data-filter="*" className="filter-active">
                    All
                  </li>
                  <li data-filter=".filter-app">App</li>
                  <li data-filter=".filter-card">Card</li>
                  <li data-filter=".filter-web">Web</li>
                </ul>
              </div>
            </div>
            <div
              className="row portfolio-container"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 1</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-1.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-2.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 2</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-3.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 2</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-4.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Web 2</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-5.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 2"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>App 3</h4>
                    <p>App</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-6.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="App 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-7.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 1</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-7.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 1"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-8.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Card 3</h4>
                    <p>Card</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-8.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Card 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <img
                    src="assets/img/portfolio/portfolio-9.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="portfolio-info">
                    <h4>Web 3</h4>
                    <p>Web</p>
                    <div className="portfolio-links">
                      <a
                        href="assets/img/portfolio/portfolio-9.jpg"
                        data-gallery="portfolioGallery"
                        className="portfolio-lightbox"
                        title="Web 3"
                      >
                        <i className="bx bx-plus" />
                      </a>
                      <a href="portfolio-details.html" title="More Details">
                        <i className="bx bx-link" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Portfolio Section */}
        {/* ======= Team Section ======= */}
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Team</h2>
              <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={100}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={200}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={300}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-3.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay={400}>
                  <div className="member-img">
                    <img
                      src="assets/img/team/team-4.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="social">
                      <a href>
                        <i className="bi bi-twitter" />
                      </a>
                      <a href>
                        <i className="bi bi-facebook" />
                      </a>
                      <a href>
                        <i className="bi bi-instagram" />
                      </a>
                      <a href>
                        <i className="bi bi-linkedin" />
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Section */}
        {/* ======= Pricing Section ======= */}
        <section id="pricing" className="pricing">
          <div className="container">
            <div className="section-title">
              <h2>Pricing</h2>
              <p>
                Sit sint consectetur velit nemo qui impedit suscipit alias ea
              </p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="box"
                  data-aos="zoom-in-right"
                  data-aos-delay={200}
                >
                  <h3>Free</h3>
                  <h4>
                    <sup>$</sup>0<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li className="na">Pharetra massa</li>
                    <li className="na">Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
                <div
                  className="box recommended"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <h3>Business</h3>
                  <h4>
                    <sup>$</sup>19<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li className="na">Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
                <div
                  className="box"
                  data-aos="zoom-in-left"
                  data-aos-delay={200}
                >
                  <h3>Developer</h3>
                  <h4>
                    <sup>$</sup>29<span> / month</span>
                  </h4>
                  <ul>
                    <li>Aida dere</li>
                    <li>Nec feugiat nisl</li>
                    <li>Nulla at volutpat dola</li>
                    <li>Pharetra massa</li>
                    <li>Massa ultricies mi</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-buy">
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Pricing Section */}
        {/* ======= F.A.Q Section ======= */}
        <section id="faq" className="faq">
          <div className="container">
            <div className="section-title" data-aos="fade-up">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>Non consectetur a erat nam at lectus urna duis?</h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                  volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                  magna fringilla urna porttitor rhoncus dolor purus non.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Feugiat scelerisque varius morbi enim nunc faucibus a
                  pellentesque?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi. Id interdum velit laoreet id donec ultrices.
                  Fringilla phasellus faucibus scelerisque eleifend donec
                  pretium. Est pellentesque elit ullamcorper dignissim.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Dolor sit amet consectetur adipiscing elit pellentesque
                  habitant morbi?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                  sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                  nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                  pellentesque eu tincidunt. Lectus urna duis convallis
                  convallis tellus.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Aperiam itaque sit optio et deleniti eos nihil quidem cumque.
                  Voluptas dolorum accusantium sunt sit enim. Provident
                  consequuntur quam aut reiciendis qui rerum dolorem sit odio.
                  Repellat assumenda soluta sunt pariatur error doloribus fuga.
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
            <div
              className="row faq-item d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={500}
            >
              <div className="col-lg-5">
                <i className="ri-question-line" />
                <h4>
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat?
                </h4>
              </div>
              <div className="col-lg-7">
                <p>
                  Molestie a iaculis at erat pellentesque adipiscing commodo.
                  Dignissim suspendisse in est ante in. Nunc vel risus commodo
                  viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                  bibendum est. Purus gravida quis blandit turpis cursus in
                </p>
              </div>
            </div>
            {/* End F.A.Q Item*/}
          </div>
        </section>
        {/* End F.A.Q Section */}
      </section>
      {/* End #main */}

      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
      </Pdf>

      <button onClick={_exportPdf}>Export to PDF2</button>
    </>
  );
}
