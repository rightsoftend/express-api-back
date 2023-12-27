/*
 * Copyright (c) 2023 Baza Trainee Ukraine
  Developer:
    - Volodymyr Nerovnia 
    
 * SPDX-License-Identifier: MIT
 */
"use strict";

const assert = require("assert");
const { Client } = require("undici");

const localServer = {
  baseUrl: "http://127.0.0.1:3001",
};

const publicServer = {
  baseUrl: "https://450kr.com",
};

const testingServer = localServer;

const client = new Client(testingServer.baseUrl);

const testRequest = async (route, reqMethod, reqBody) => {
  try {
    const strReqBody = JSON.stringify(reqBody);
    const { statusCode, headers, trailers, body } = await client.request({
      path: route,
      method: reqMethod,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": Buffer.byteLength(strReqBody),
      },
      body: strReqBody,
    });

    //console.log("response received", statusCode);
    //console.log("headers", headers);
    /*
    for await (const data of body) {
      console.log("data", data);
    }
*/
    //console.log(await body.json());
    client.close();
  } catch (error) {
    console.error(error);
  }
};

const main = async () => {
  describe("Authentication and authorization", function () {
    it("should return JWT token", async function () {
      const regStr = /^[\w-]*\.[\w-]*\.[\w-]*$/;
      const res = await testRequest("/api/auth/login", "POST", {
        username: "SiteAdmin",
        password: "nimdAetiS",
      }); /*
        .then((result) => {
        console.log(result);
        //console.log(result && result.token && regStr.test(result?.token));
        assert.equal(
          result && result.token && regStr.test(result?.token),
          true
        );
      });*/
      console.log(res);
      //assert.equal(regStr.test(result?.token), true);
    });
  });
  /*
  testRequest("/api/auth/login", "POST", {
    username: "SiteAdmin",
    password: "nimdAetiS",
  });
  */
};

//("Authorization: Bearer mytoken123");

main();

//const regStr = /^[^.].+\..+\..+![^.]$/;

//const token =
//  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2ZmMjVjZTEwYWZjN2FiOWM1NDU0MyIsImlhdCI6MTY5OTIxMjAyOCwiZXhwIjoxNzg2NTEyMDI4fQ.deP0YAimP3zwpEq82DSI_aRwHBxdTGt4zWx0GO3ZN60";
//  ".eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2ZmMjVjZTEwYWZjN2FiOWM1NDU0MyIsImlhdCI6MTY5OTIxMjAyOCwiZXhwIjoxNzg2NTEyMDI4fQ.deP0YAimP3zwpEq82DSI_aRwHBxdTGt4zWx0GO3ZN60.";

//console.log(token.test(regStr));
//console.log(regStr.test(token));
