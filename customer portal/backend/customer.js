const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const soapRequest = require("easy-soap-request");
const { Parser, processors } = require("xml2js");
const { append } = require("express/lib/response");
// Sales
router.get("/sales", async(req, res) => {
    let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zsv_sales_order/100/zsv_sales_order/zsv_sales_order";
    let sampleHeaders = {
      "Content-Type": "text/xml;charset=UTF-8",
      "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
    };
    const xml = `<?xml version="1.0"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZSV_SALES_ORDER>
      <IT_SALES_ORDERS>
</IT_SALES_ORDERS>
         <I_CUSTID>0000000012</I_CUSTID>
         <I_SALES_ORG>0001</I_SALES_ORG>
      </urn:ZSV_SALES_ORDER>
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
    const userResult = result["Envelope"]["Body"]["ZSV_SALES_ORDERResponse"]["IT_SALES_ORDERS"]["item"]
    res.send(userResult) 
    //res.send(data);
    });
  });

    // DELIVERY
    router.get("/delivery", async(req, res) => {
        let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zsv_delivery_list/100/zsv_delivery_list/zsv_delivery_list";
        let sampleHeaders = {
          "Content-Type": "text/xml;charset=UTF-8",
          "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
        };
      
        const xml = `<?xml version="1.0"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
        <soapenv:Header/>
        <soapenv:Body>
           <urn:ZSV_DELIVERY_LIST>
           <IT_DELIVERY_LIST></IT_DELIVERY_LIST>
              <I_CUSTID>12</I_CUSTID>
           </urn:ZSV_DELIVERY_LIST>
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
        const userResult = result["Envelope"]["Body"]["ZSV_DELIVERY_LISTResponse"]["IT_DELIVERY_LIST"]["item"]
        res.send(userResult)
       //  res.send(data);
        });
       });



    //   INQUIRY


    router.get("/inquiry", async(req, res) => {
        let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zv_inquiry_list/100/zv_inquiry_list/zv_inquiry_list";
         
        let sampleHeaders = {
          "Content-Type": "text/xml;charset=UTF-8",
          "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
        };
      
        const xml = `<?xml version="1.0"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
        <soapenv:Header/>
        <soapenv:Body>
           <urn:ZV_INQUIRY_LIST>
           <IT_INQUIRY_LIST></IT_INQUIRY_LIST>
              <I_CUSTID>0000000012</I_CUSTID>
           </urn:ZV_INQUIRY_LIST>
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
      const userResult = result["Envelope"]["Body"]["ZV_INQUIRY_LISTResponse"]["IT_INQUIRY_LIST"]["item"]
        res.send(userResult)
       // res.send(data);
        });
      });



       //  CUSTPRO
        router.get("/customerprofile", async(req, res) => {
        let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zsv_customer_profile/100/zsv_customer_profile/zsv_customer_profile";
          let sampleHeaders = {
          "Content-Type": "text/xml;charset=UTF-8",
          "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
        };
      
        const xml = `<?xml version="1.0"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZSV_CUSTOMER_PROFILE>
      
       <I_CUSTID>0000000001</I_CUSTID>
  
      </urn:ZSV_CUSTOMER_PROFILE>
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
          const userResult = result["Envelope"]["Body"]["ZSV_CUSTOMER_PROFILEResponse"]["CUST_PROFILE"]
          //const userResult = result["envelope"].CUST_PROFILE[0]
          res.send(userResult);
          //res.send(result.Envelope.Body);
       //res.send(data);
        });
      });




       //  CUSTOMERLOGIN


    router.get("/customerlogin", async(req, res) => {
        let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zsv_logn/100/zsv_logn/zsv_logn";
          let sampleHeaders = {
          "Content-Type": "text/xml;charset=UTF-8",
          "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
        };
      
        const xml = `<?xml version="1.0"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZSV_LOGN>
         <!--Optional:-->
         <IT_CUSTOMER_LOGIN>
            <!--Zero or more repetitions:-->
            <item>
               

            </item>
         </IT_CUSTOMER_LOGIN>
      </urn:ZSV_LOGN>
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
         const userResult = result["Envelope"]["Body"]["ZSV_LOGNResponse"]["IT_CUSTOMER_LOGIN"]["item"]
        //  var userData ={} 
        //  userData["Customer_No"] = userResult["Kunnr"]
         //res.send(userData)
         res.send(userResult) 
        });
      });


       //  CREDIT


       router.get("/credit", async(req, res) => {
        let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zsv_credit/100/zsv_credit/zsv_credit";
        let sampleHeaders = {
          "Content-Type": "text/xml;charset=UTF-8",
          "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
        };
      
        const xml = `<?xml version="1.0"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
   <soapenv:Header/>
   <soapenv:Body>
      <urn:ZSV_CREDIT>
      <CREDITMEMO_LIST></CREDITMEMO_LIST>
         <CUST_ID>0000000012</CUST_ID>
      </urn:ZSV_CREDIT>
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
       const userResult = result["Envelope"]["Body"]["ZSV_CREDITResponse"]["CREDITMEMO_LIST"]["item"]
       res.send(userResult)
        });
      });




      //  debit


      router.get("/debit", async(req, res) => {
        let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zsv_debit/100/zsv_debit/zsv_debit";
        let sampleHeaders = {
          "Content-Type": "text/xml;charset=UTF-8",
          "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
        };
      
        const xml = `<?xml version="1.0"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
        <soapenv:Header/>
        <soapenv:Body>
           <urn:ZSV_DEBIT>
           <DEDITMEMO_LIST></DEDITMEMO_LIST>
              <!--Optional:-->
              <CUST_ID>0000000012</CUST_ID>
              
           </urn:ZSV_DEBIT>
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
       const userResult = result["Envelope"]["Body"]["ZSV_DEBITResponse"]["DEDITMEMO_LIST"]["item"]
       res.send(userResult)
        });
      });




      //  invoice


      router.get("/invoice", async(req, res) => {
        let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zsv_invoice_list/100/zsv_invoice_list/zsv_invoice_list";
         let sampleHeaders = {
          "Content-Type": "text/xml;charset=UTF-8",
          "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
        };
      
        const xml = `<?xml version="1.0"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
        <soapenv:Header/>
        <soapenv:Body>
           <urn:ZSV_INVOICE_LIST>
           <IT_INVOICE_LIST></IT_INVOICE_LIST>
              <I_CUSTID>0000000012</I_CUSTID>
           </urn:ZSV_INVOICE_LIST>
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
        const userResult = result["Envelope"]["Body"]["ZSV_INVOICE_LISTResponse"]["IT_INVOICE_LIST"]["item"]
         res.send(userResult) 
        });
      });



       //  payment


       router.get("/payment", async(req, res) => {
        let url ="http://172.26.0.121:8000/sap/bc/srt/rfc/sap/zsv_payment_aging/100/zsv_payment_aging/zsv_payment_aging";
        let sampleHeaders = {
          "Content-Type": "text/xml;charset=UTF-8",
          "Authorization": "Basic YWJhcGVyMjphYmFwQDEyMw==",
        };
      
        const xml = `<?xml version="1.0"?>
        <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:sap-com:document:sap:rfc:functions">
        <soapenv:Header/>
        <soapenv:Body>
           <urn:ZSV_PAYMENT_AGING>
           <IT_PAYMENT_LIST></IT_PAYMENT_LIST>
              <I_COMPANY_CODE>0001</I_COMPANY_CODE>
              <I_CUSTID>0000000012</I_CUSTID>
           </urn:ZSV_PAYMENT_AGING>
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
        const userResult = result["Envelope"]["Body"]["ZSV_PAYMENT_AGINGResponse"]["IT_PAYMENT_LIST"]["item"]
        res.send(userResult) 
        });
      });
module.exports=router;

  