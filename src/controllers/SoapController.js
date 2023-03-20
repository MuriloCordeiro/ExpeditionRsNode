const soap = require("soap");
const xmlParser = require("xml2json");

const soapRequest = require("easy-soap-request");

//Development enviroment
const url =
  "http://rscwbtst:49229/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_pedidos?wsdl";

//Production enviroment
// const url =
// "http://rscwbsrv:60405/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_pedidos?wsdl";

const sampleHeaders = {
  "user-agent": "sampleTest",
  "Content-Type": "text/xml;charset=UTF-8",
  soapAction:
    "http://rscwbtst:49229/g5-senior-services/sapiens_Synccom_senior_g5_co_mcm_ven_pedidos?wsdl",
};
const xml = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://services.senior.com.br">
<soapenv:Header/>
<soapenv:Body>
   <ser:obterItensPedido_custom>
      <user>integration</user>
      <password>integration</password>
      <encryption>0</encryption>
      <parameters>
         <codigoEmpresa>1</codigoEmpresa>
         <codigoFilial>4</codigoFilial>
         <numeroPedido>7331</numeroPedido>
      </parameters>
   </ser:obterItensPedido_custom>
</soapenv:Body>
</soapenv:Envelope>`;

module.exports = {
  async callSoap() {
    try {
      const { response } = await soapRequest({
        url: url,
        headers: sampleHeaders,
        xml: xml,
        // timeout: 1000,
      }); // Optional timeout parameter(milliseconds)
      const { headers, body, statusCode } = response;

      const json = xmlParser.toJson(body);

      console.log(headers);
      console.log("Esse é o json certo", json);
      console.log(statusCode);

      return json;
    } catch {
      ("");
    }
  },
  // async callSoap() {
  //   try {
  //     const client = await soap.createClientAsync(url);
  //     const result = await client.describe(xml);
  //     const operation =
  //       result["g5-senior-services"][
  //         "sapiens_Synccom_senior_g5_co_mcm_ven_pedidosPort"
  //       ]["obterItensPedido_custom"];
  //     console.log("result:", xmlParser.toJson(result));
  //     // console.log("JSON output:", xmlParser.toJson(xml));
  //     //   res.json(result[0]); // Converter a resposta XML para JSON e enviar como resposta
  //   } catch (error) {
  //     throw error;
  //   }
  // },
};
