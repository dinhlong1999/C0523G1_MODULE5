import axios from "axios";

const url = "http://localhost:8080/applicationService/application.wsdl";
const request = "<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:int=\"http://interfaces.soap.springboot.vkakarla.com\">\n" +
    "   <soapenv:Header/>\n" +
    "   <soapenv:Body>\n" +
    "      <int:getAllProductRequest>\n" +
    "         <int:nameProduct></int:nameProduct>\n" +
    "         <int:codeProduct></int:codeProduct>\n" +
    "         <int:limit>15</int:limit>\n" +
    "         <int:page>0</int:page>\n" +
    "      </int:getAllProductRequest>\n" +
    "   </soapenv:Body>\n" +
    "</soapenv:Envelope>"

const config = {
    headers: {
        'Content-Type' : 'text/xml',
    },
}
export const getProduct = async (nameProduct, codeProduct) => {
    try {
        let res =  await axios.post(url,`<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:int=\"http://interfaces.soap.springboot.vkakarla.com\">
               <soapenv:Header/>\n 
               <soapenv:Body>\n
                  <int:getAllProductRequest>
                     <int:nameProduct>${nameProduct}</int:nameProduct>
                     <int:codeProduct>${codeProduct}</int:codeProduct>
                     <int:limit>15</int:limit>
                     <int:page>0</int:page>
                  </int:getAllProductRequest>
               </soapenv:Body>
            </soapenv:Envelope>`,config);
        const xmlData = res.data;

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlData, 'text/xml');

        const products = xmlDoc.getElementsByTagName('ns2:products');
        let list = [];
        for (let i = 0; i < products.length; i++) {
            const product = products[i];

            const idElement = product.getElementsByTagName('ns2:id')[0];
            const codeProductElement = product.getElementsByTagName('ns2:codeProduct')[0];
            const nameProductElement = product.getElementsByTagName('ns2:nameProduct')[0];
            const priceSellElement = product.getElementsByTagName('ns2:priceSell')[0];
            const priceBuyElement = product.getElementsByTagName('ns2:priceBuy')[0];
            const flagElement = product.getElementsByTagName('ns2:flag')[0];
            const versionElement = product.getElementsByTagName('ns2:version')[0];
            const inventoryElement = product.getElementsByTagName('ns2:inventory')[0];
            if (idElement && codeProductElement && nameProductElement && priceSellElement && priceBuyElement && flagElement && versionElement && inventoryElement) {
                let productTemp = {
                    id: idElement.textContent,
                    codeProduct: codeProductElement.textContent,
                    nameProduct: nameProductElement.textContent,
                    priceSell: priceSellElement.textContent,
                    priceBuy: priceBuyElement.textContent,
                    flag: flagElement.textContent,
                    version: versionElement.textContent,
                    inventory: inventoryElement.textContent,
                }
                list.push(productTemp);
                console.log(productTemp)
            } else {
                console.error(`Missing element for product ${i + 1}`);
            }
        }
        console.log(list);
        return list
    }catch (e) {
        console.log("lỗi nè"+e)
    }
}