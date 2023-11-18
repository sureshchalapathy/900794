const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const soapRequest = require("easy-soap-request");
const { Parser, processors } = require("xml2js");
const { append } = require("express/lib/response");


//employee login
router.get("/employeelogin", async(req, res) => {
  let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/ze_login_sv/100/ze_login_sv/ze_login_sv";
    let sampleHeaders = {
    "Content-Type": "text/xml;charset=UTF-8",
    "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
  };

  const xml = `<?xml version="1.0"?>
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZEMP_LOGIN_SV>
         <EMPID>1</EMPID>
         <PASSWORD>12345678</PASSWORD>

      </urn:ZEMP_LOGIN_SV>
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
   const userResult = result["Envelope"]["Body"]["ZEMP_LOGIN_SVResponse"]["RESULT"]
  //  var userData ={} 
  //  userData["Customer_No"] = userResult["Kunnr"]
   //res.send(userData)
   res.send(userResult) 
  });
});



 // Employee profile   1

 router.get("/profile", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_EMP_PROFILE_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
    <soapenv:Header/>
    <soapenv:Body>
       <urn:ZEMP_PROFILE_SV>
          <EMPLOYEEID>3</EMPLOYEEID>
       </urn:ZEMP_PROFILE_SV>
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
    const userResult = result["Envelope"]["Body"]["ZEMP_PROFILE_SV.Response"]["PERSONAL_DATA"]
       res.send(userResult)
    });
  });


  // salary payslip   2

router.get("/payslip", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_EMP_PAYSLIP_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZEMP_PAYSLIP_SV>
         <!--You may enter the following 2 items in any order-->
         <EMPLOYEE_ID>3</EMPLOYEE_ID>
         
         </urn:ZEMP_PAYSLIP_SV>
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
    const userResult = result["Envelope"]["Body"]["ZEMP_PAYSLIP_SV.Response"]["IT_PAYSLIP"]["item"]
    res.send(userResult)
    });
  });

  //leave Data   3

  router.get("/leavedata", async(req, res) => {
    let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zfm_ep_leave_data/100/zfm_ep_leave_data/zfm_ep_leave";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZFM_EP_LEAVEDAT_SV>
         <!--Optional:-->
         <ABSENCE>
            <!--Zero or more repetitions:-->
           
         </ABSENCE>
         <EMPID>00003</EMPID>
         
      </urn:ZFM_EP_LEAVEDAT_SV>
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
    const userResult = result["Envelope"]["Body"]["ZFM_EP_LEAVEDAT_SVResponse"]["ABSENCE"]["item"]
    res.send(userResult)
    });
  });

  router.get("/paypdf", async(req, res) => {
    let url ="http://dxktpipo.kaarcloud.com:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=BS_PIPO_SURESH&receiverParty=&receiverService=&interface=SI_EMP_PAYPDF_SV&interfaceNamespace=http://sureshportals_vend.com";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic UE9VU0VSQDI6VGVjaEAyMDIy",
    };
  
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZEMP_PAYPDF_SV>
         <!--You may enter the following 3 items in any order-->
         <EMPLOYEENUMBER>1</EMPLOYEENUMBER>
         <SEQUENCENUMBER>3</SEQUENCENUMBER>
         <PAYSLIP>
            <!--Zero or more repetitions:-->
            
         </PAYSLIP>
      </urn:ZEMP_PAYPDF_SV>
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
    const userResult = result["Envelope"]["Body"]["ZEMP_PAYPDF_SV.Response"]["OUTPUT"]
    res.send(userResult)
    });
  });



  module.exports = router;

