import React from "react";
import "./HotLine.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const HotLine = () => {
  return (
    <div className="hotline-body">
      <Header />
      <Link to='/homepage'>
      <button type="button" className="btn btn-dark m-1"><i class="bi bi-arrow-left"></i> Back</button>
      </Link>
      <div className="table__container">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Municipality</th>
              <th scope="col" className="bg-success">
                <a
                  href="https://ndrrmc.gov.ph/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MDRRMC
                </a>
              </th>
              <th scope="col" className="bg-danger">
                <a href="https://bfp.gov.ph/" target="_blank" rel="noreferrer">
                  BFP
                </a>
              </th>
              <th scope="col" className="bg-primary">
                <a
                  href="https://acg.pnp.gov.ph/main/contacts.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  PNP
                </a>
              </th>

              <th scope="col" className="bg-info">
                <a
                  href=" https://www.philippinemedicalassociation.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  MEDICAL
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">ATOK</th>
              <td className="text-success">0907-010-2240</td>
              <td className="text-danger">0908-591-5687</td>
              <td className="text-primary">0921-480-1585</td>
              <td className="text-info">0918-500-6111</td>
            </tr>

            <tr>
              <th scope="row">BAGUIO</th>
              <td className="text-success">0927-628-0498</td>
              <td className="text-danger">0917-150-0041</td>
              <td className="text-primary">(074)300-9115</td>
              <td className="text-info">(074)661-7909</td>
            </tr>
            <tr>
              <th scope="row">BAKUN</th>
              <td className="text-success">0950-865-6904</td>
              <td className="text-danger">0998-591-2240</td>
              <td className="text-primary">0939-477-2855</td>
              <td className="text-info">0918-332-1305</td>
            </tr>

            <tr>
              <th scope="row">BOKOD</th>
              <td className="text-success">0910-527-4776</td>
              <td className="text-danger">0919-230-9673</td>
              <td className="text-primary">0939-385-5750</td>
              <td className="text-info">0919-430-4383</td>
            </tr>
            <tr>
              <th scope="row">BUGUIAS</th>
              <td className="text-success">0921-646-9504</td>
              <td className="text-danger">0998-591-5694</td>
              <td className="text-primary">0999-992-5739</td>
              <td className="text-info">0930-455-9926</td>
            </tr>
            <tr>
              <th scope="row">ITOGON</th>
              <td className="text-success">0929-862-9895</td>
              <td className="text-danger">0998-591-5693</td>
              <td className="text-primary">0998-598-7785</td>
              <td className="text-info">0916-209-6983</td>
            </tr>
            <tr>
              <th scope="row">KABAYAN</th>
              <td className="text-success">0945-422-1881</td>
              <td className="text-danger">0998-591-5698</td>
              <td className="text-primary">0915-915-4898</td>
              <td className="text-info">0942-458-7800</td>
            </tr>
            <tr>
              <th scope="row">KAPANGAN</th>
              <td className="text-success">0907-443-6306</td>
              <td className="text-danger">0950-143-1993</td>
              <td className="text-primary">0998-598-7789</td>
              <td className="text-info">(074) 620 4252</td>
            </tr>
            <tr>
              <th scope="row">KIBUNGAN</th>
              <td className="text-success">0919-659-6043</td>
              <td className="text-danger">0998-591-5697</td>
              <td className="text-primary">0949-677-9879</td>
              <td className="text-info">0939-657-1144</td>
            </tr>
            <tr>
              <th scope="row">LA TRINIDAD</th>
              <td className="text-success">0939-990-0789</td>
              <td className="text-danger">(074) 422 1131</td>
              <td className="text-primary">0998-985-7568</td>
              <td className="text-info">(074) 422 4724</td>
            </tr>
            <tr>
              <th scope="row">MANKAYAN</th>
              <td className="text-success">0946-922-5743</td>
              <td className="text-danger">0909-250-5964</td>
              <td className="text-primary">0939-921-9123</td>
              <td className="text-info">(074) 452 8102</td>
            </tr>
            <tr>
              <th scope="row">SABLAN</th>
              <td className="text-success">0907-498-4637</td>
              <td className="text-danger">0929-500-9999</td>
              <td className="text-primary">0917-669-5128</td>
              <td className="text-info">0920-969-3733</td>
            </tr>
            <tr>
              <th scope="row">TUBA</th>
              <td className="text-success">0910-686-0065</td>
              <td className="text-danger">0912-559-2342</td>
              <td className="text-primary">0998-534-4565</td>
              <td className="text-info">0920-402-4417</td>
            </tr>
            <tr>
              <th scope="row">TUBLAY</th>
              <td className="text-success">(074)422-8554</td>
              <td className="text-danger">0998-591-5692</td>
              <td className="text-primary">0998-598-7795</td>
              <td className="text-info">0919-858-2330</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
};

export default HotLine;
