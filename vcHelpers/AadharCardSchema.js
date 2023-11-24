module.exports = {
    AadharCardSchema: (credentialSubject) => ({
        id: 1,
        circuitId: "credentialAtomicQuerySigV2",
        query: {
            allowedIssuers: ["*"],
            type: "AadharCardSchema",
            context: "https://schema.dock.io/AadharCardSchema-V1700697041276.json-ld",
            credentialSubject
        }
    })
};
