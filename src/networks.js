module.exports = {
    qtum: {
        messagePrefix: '\x15Agricoin Signed Message:\n',
        bech32: 'bc',
        bip32: {
            public: 0x1397C10D,
            private: 0x1397BCF3
        },
        pubKeyHash: 0x17,
        scriptHash: 0x64,
        wif: 0x80
    },
    qtum_testnet: {
        messagePrefix: '\x15Agricoin Signed Message:\n',
        bech32: 'tb',
        bip32: {
            public: 0x043587cf,
            private: 0x04358394
        },
        pubKeyHash: 0x78,
        scriptHash: 0x6e,
        wif: 0xef
    }
}
