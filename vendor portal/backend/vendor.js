const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const soapRequest = require("easy-soap-request");
const { Parser, processors } = require("xml2js");
const { append } = require("express/lib/response");


//employee login
router.get("/vendorlogin", async(req, res) => {
  let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zsv_vendor_login/100/svvendorlogin/svvendorlogin";
    let sampleHeaders = {
    "Content-Type": "text/xml;charset=UTF-8",
    "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
  };

  const xml = `<?xml version="1.0"?>
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
  <soapenv:Header/>
  <soapenv:Body>
     <urn:Z_FI_VENDOR_LOGIN_SV>
        <PASSWORD>12345678</PASSWORD>
        <VENDORID>1</VENDORID>
     </urn:Z_FI_VENDOR_LOGIN_SV>
  </soapenv:Body>
</soapenv:Envelope>
`;

  const { response } = await soapRequest({
    url: url,
    headers: sampleHeaders,
    xml: xml,
  });
  const parser = new Parser({
    trim: true,
    explicitArray: false,
    tagNameProcessors: [processors.stripPrefix],
  });
  parser.parseString(response.body, function (err, result) {
    let data = JSON.stringify(result);
  //   res.send(result.Envelope.Body); 
//  res.send(data); 
   const userResult = result["Envelope"]["Body"]["Z_FI_VENDOR_LOGIN_SVResponse"]["RESULT"]
  //  var userData ={} 
  //  userData["Customer_No"] = userResult["Kunnr"]
   //res.send(userData)
   res.send(userResult) 
  });
});

// CREDIT

router.get("/credit", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_FI_VENDOR_CREDIT_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FI_VENDOR_CREDIT_SV>
          <!--You may enter the following 2 items in any order-->
          <P_VENDOR_NUMBER_IMPORT>MOHANRAJ</P_VENDOR_NUMBER_IMPORT>
          
       </urn:Z_FI_VENDOR_CREDIT_SV>
    </soapenv:Body>
 </soapenv:Envelope>
  `;
  
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
    });
    const parser = new Parser({
      trim: true,
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
    });
    parser.parseString(response.body, function (err, result) {
      let data = JSON.stringify(result);
    //   res.send(result.Envelope.Body);
   // res.send(data);
    const userResult = result["Envelope"]["Body"]["Z_FI_VENDOR_CREDIT_SV.Response"]["ET_LINEITEM"]["item"]
    res.send(userResult)

    });
  });


// debit
router.get("/debit", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_FI_VENDOR_DEBIT_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FI_VENDOR_DEBIT_SV>
          <!--You may enter the following 2 items in any order-->
          <P_VENDOR_NUMBER_IMPORT>MOHANRAJ</P_VENDOR_NUMBER_IMPORT>
       </urn:Z_FI_VENDOR_DEBIT_SV>
    </soapenv:Body>
 </soapenv:Envelope>
  `;
  
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
    });
    const parser = new Parser({
      trim: true,
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
    });
    parser.parseString(response.body, function (err, result) {
      let data = JSON.stringify(result);
    //   res.send(result.Envelope.Body);
    //res.send(data);
    const userResult = result["Envelope"]["Body"]["Z_FI_VENDOR_DEBIT_SV.Response"]["ET_LINEITEM"]["item"]
    res.send(userResult)
    });
  });


  // GOODS RECEIPT
router.get("/goodsreceipt", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_MM_GOODSLIST_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:Z_MM_GOODSLIST_SV>
         <!--You may enter the following 4 items in any order-->
         <P_VENDOR_NUMBER_IMPORT>MOHANRAJ</P_VENDOR_NUMBER_IMPORT>
         
      </urn:Z_MM_GOODSLIST_SV>
   </soapenv:Body>
</soapenv:Envelope>
  `;
  
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
    });
    const parser = new Parser({
      trim: true,
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
    });
    parser.parseString(response.body, function (err, result) {
      let data = JSON.stringify(result);
    //   res.send(result.Envelope.Body);
    //res.send(data);
    const userResult = result["Envelope"]["Body"]["Z_MM_GOODSLIST_SV.Response"]["IT_GOODSMVT_HEADER"]["item"]
    res.send(userResult)
    });
  });



  // Invoice
router.get("/invoice", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_FI_VENDOR_INV_LIST_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy ",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_FI_VENDOR_INV_LIST_SV>
          <!--You may enter the following 3 items in any order-->
          <P_VENDOR_NUMBER_IMPORT>MOHANRAJ</P_VENDOR_NUMBER_IMPORT>
          
       </urn:Z_FI_VENDOR_INV_LIST_SV>
    </soapenv:Body>
 </soapenv:Envelope>
  `;
  
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
    });
    const parser = new Parser({
      trim: true,
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
    });
    parser.parseString(response.body, function (err, result) {
      let data = JSON.stringify(result);
    //   res.send(result.Envelope.Body);
    //res.send(data);
    const userResult = result["Envelope"]["Body"]["Z_FI_VENDOR_INV_LIST_SV.Response"]["ET_HEADERLIST"]["item"]
    res.send(userResult)
    });
  });



  // Payment

router.get("/payment", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_FI_VENDOR_PAYAGE_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:Z_FI_VENDOR_PAYAGE_SV>
         <!--You may enter the following 2 items in any order-->
         <P_VENDOR_NUMBER_IMPORT>MOHANRAJ</P_VENDOR_NUMBER_IMPORT>
         
      </urn:Z_FI_VENDOR_PAYAGE_SV>
   </soapenv:Body>
</soapenv:Envelope>
  `;
  
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
    });
    const parser = new Parser({
      trim: true,
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
    });
    parser.parseString(response.body, function (err, result) {
      let data = JSON.stringify(result);
    //   res.send(result.Envelope.Body);
  //  res.send(data);
    const userResult = result["Envelope"]["Body"]["Z_FI_VENDOR_PAYAGE_SV.Response"]["ET_LINEITEM"]["item"]
    res.send(userResult)
    });
  });



// Purchase order

router.get("/purchaseOrder", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_MM_PURCHASEORD_LIS_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:Z_MM_PURCHASEORD_LIS_SV>
         <!--You may enter the following 4 items in any order-->
         <P_VENDOR_NUMBER_IMPORT>MOHANRAJ</P_VENDOR_NUMBER_IMPORT>
        
      </urn:Z_MM_PURCHASEORD_LIS_SV>
   </soapenv:Body>
</soapenv:Envelope>
  `;
  
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
    });
    const parser = new Parser({
      trim: true,
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
    });
    parser.parseString(response.body, function (err, result) {
      let data = JSON.stringify(result);
    //   res.send(result.Envelope.Body);
    //res.send(data);
    const userResult = result["Envelope"]["Body"]["Z_MM_PURCHASEORD_LIS_SV.Response"]["IT_PO_ITEMS"]["item"]
    res.send(userResult)
    });
  });





  // Request for quotation
router.get("/rfq", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_MM_QUOT_REQ_LIST_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_MM_QUOT_REQ_LIST_SV>
          <!--You may enter the following 2 items in any order-->
          <P_VENDOR_NUMBER_IMPORT>MOHANRAJ</P_VENDOR_NUMBER_IMPORT>
       </urn:Z_MM_QUOT_REQ_LIST_SV>
    </soapenv:Body>
 </soapenv:Envelope>
  `;
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
    });
    const parser = new Parser({
      trim: true,
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
    });
    parser.parseString(response.body, function (err, result) {
      let data = JSON.stringify(result);
    const userResult = result["Envelope"]["Body"]["Z_MM_QUOT_REQ_LIST_SV.Response"]["IT_RESULT"]["item"]
    res.send(userResult)
    });
  });





  // Vendor profile

  router.get("/vendorProfile", async(req, res) => {
    let url =
      "http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_MM_VENDOR_PROFILE_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:Z_MM_VENDOR_PROFILE_SV>
          <!--You may enter the following 3 items in any order-->
          <P_VENDOR_NUMBER_IMPORT>MOHANRAJ</P_VENDOR_NUMBER_IMPORT>
          
       </urn:Z_MM_VENDOR_PROFILE_SV>
    </soapenv:Body>
 </soapenv:Envelope>
  `;
  
    const { response } = await soapRequest({
      url: url,
      headers: sampleHeaders,
      xml: xml,
    });
    const parser = new Parser({
      trim: true,
      explicitArray: false,
      tagNameProcessors: [processors.stripPrefix],
    });
    parser.parseString(response.body, function (err, result) {
      let data = JSON.stringify(result);
    //   res.send(result.Envelope.Body);
    //res.send(data);
    const userResult = result["Envelope"]["Body"]["Z_MM_VENDOR_PROFILE_SV.Response"]["E_GENERALDETAIL"]
    res.send(userResult)
    });
  });




module.exports = router;