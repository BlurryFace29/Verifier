const { AadharCardSchema } = require("./vcHelpers/AadharCardSchema");

// design your own customised authentication requirement here using Query Language
// https://0xpolygonid.github.io/tutorials/verifier/verification-library/zk-query-language/

const humanReadableAuthReason = "Must be the owner of this identity!";

const credentialSubject = {
  fullName: {
    $eq: "Arnav Jain"
  }
};

const proofRequest = AadharCardSchema(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
