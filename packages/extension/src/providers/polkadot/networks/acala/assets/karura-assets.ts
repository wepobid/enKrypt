import { SubstrateNativeToken } from "@/providers/polkadot/types/substrate-native-token";
import { BaseToken } from "@/types/base-token";
import { toBN } from "web3-utils";
import { AcalaOrmlAsset } from "../types/acala-orml-asset";

const assets: BaseToken[] = [
  new SubstrateNativeToken({
    name: "Karura",
    symbol: "KAR",
    decimals: 12,
    icon: require("../../icons/karura.svg"),
    coingeckoID: "acala",
    existentialDeposit: toBN("100000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Acala Dollar",
    symbol: "AUSD",
    decimals: 12,
    icon: require("./icons/AUSD.png"),
    coingeckoID: "usd-coin",
    assetType: "token",
    lookupValue: "kUSD",
    existentialDeposit: toBN("10000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Kusama",
    symbol: "KSM",
    decimals: 12,
    icon: require("./icons/KSM.png"),
    coingeckoID: "kusama",
    assetType: "token",
    lookupValue: "KSM",
    existentialDeposit: toBN("100000000"),
  }),
  new AcalaOrmlAsset({
    name: "Liquid KSM",
    symbol: "LKSM",
    decimals: 12,
    icon: require("./icons/LKSM.png"),
    coingeckoID: "kusama",
    assetType: "token",
    lookupValue: "KSM",
    existentialDeposit: toBN("500000000"),
  }),
  new AcalaOrmlAsset({
    name: "Bifrost",
    symbol: "BNC",
    decimals: 12,
    icon: require("./icons/BNC.png"),
    coingeckoID: "bifrost-native-coin",
    assetType: "token",
    lookupValue: "BNC",
    existentialDeposit: toBN("8000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Kintsugi",
    symbol: "KINT",
    decimals: 12,
    icon: require("./icons/KINT.png"),
    coingeckoID: "kintsugi",
    assetType: "token",
    lookupValue: "KINT",
    existentialDeposit: toBN("133330000"),
  }),
  new AcalaOrmlAsset({
    name: "Phala",
    symbol: "PHA",
    decimals: 12,
    icon: require("./icons/PHA.png"),
    coingeckoID: "pha",
    assetType: "token",
    lookupValue: "PHA",
    existentialDeposit: toBN("40000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Crab",
    symbol: "CRAB",
    decimals: 18,
    icon: require("./icons/CRAB.png"),
    coingeckoID: "darwinia-crab-network-native-token",
    assetType: "foreignAsset",
    lookupValue: 13,
    existentialDeposit: toBN("1000000000000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Crust Shadow",
    symbol: "CSM",
    decimals: 12,
    icon: require("./icons/CSM.png"),
    coingeckoID: "crust-shadow",
    assetType: "foreignAsset",
    lookupValue: 5,
    existentialDeposit: toBN("1000000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Genshiro",
    symbol: "GEN",
    decimals: 9,
    icon: require("./icons/GENS.png"),
    coingeckoID: "genshiro",
    assetType: "foreignAsset",
    lookupValue: 14,
    existentialDeposit: toBN("1000000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Kintsugi Wrapped BTC",
    symbol: "KBTC",
    decimals: 8,
    icon: require("./icons/KBTC.png"),
    coingeckoID: "bitcoin",
    assetType: "token",
    lookupValue: "kBTC",
    existentialDeposit: toBN("66"),
  }),
  new AcalaOrmlAsset({
    name: "Calamari",
    symbol: "KMA",
    decimals: 12,
    icon: require("./icons/KMA.png"),
    coingeckoID: "calamari-network",
    assetType: "foreignAsset",
    lookupValue: 10,
    existentialDeposit: toBN("100000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Moonriver",
    symbol: "MOVR",
    decimals: 18,
    icon: require("./icons/MOVR.png"),
    coingeckoID: "moonriver",
    assetType: "foreignAsset",
    lookupValue: 3,
    existentialDeposit: toBN("1000000000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Quartz",
    symbol: "QTZ",
    decimals: 18,
    icon: require("./icons/QTZ.png"),
    coingeckoID: "quartz",
    assetType: "foreignAsset",
    lookupValue: 2,
    existentialDeposit: toBN("1000000000000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Integritee",
    symbol: "TEER",
    decimals: 12,
    icon: require("./icons/TEER.png"),
    coingeckoID: "integritee",
    assetType: "foreignAsset",
    lookupValue: 8,
    existentialDeposit: toBN("100000000000"),
  }),

  // const usdc = new AcalaOrmlAsset(
  // {
  //   name: "USD Coin",
  //   symbol: "USDC",
  //   decimals: 6,
  //   icon: require("./icons/USDC.png"),
  //   erc20Address: "0x1f3a10587a20114ea25ba1b388ee2dd4a337ce27",
  //   coingeckoID: "usd-coin",
  // });

  new AcalaOrmlAsset({
    name: "Tether",
    symbol: "USDT",
    decimals: 6,
    icon: require("./icons/USDT.png"),
    coingeckoID: "tether",
    assetType: "foreignAsset",
    lookupValue: 7,
    existentialDeposit: toBN("10000"),
  }),

  new AcalaOrmlAsset({
    name: "Altair",
    symbol: "AIR",
    decimals: 18,
    icon: require("./icons/AIR.png"),
    coingeckoID: "altair",
    assetType: "foreignAsset",
    lookupValue: 12,
    existentialDeposit: toBN("100000000000000000"),
  }),
  new AcalaOrmlAsset({
    name: "PolarisDAO",
    symbol: "ARIS",
    decimals: 8,
    icon: require("./icons/ARIS.png"),
    assetType: "foreignAsset",
    lookupValue: 1,
    existentialDeposit: toBN("1000000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Turing",
    symbol: "TUR",
    decimals: 10,
    icon: require("./icons/TUR.png"),
    assetType: "foreignAsset",
    lookupValue: 16,
    existentialDeposit: toBN("40000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Metaverse.Network",
    symbol: "NEER",
    decimals: 18,
    icon: require("./icons/NEER.png"),
    assetType: "foreignAsset",
    lookupValue: 9,
    existentialDeposit: toBN("100000000000000000"),
  }),

  new AcalaOrmlAsset({
    name: "Kico",
    symbol: "KICO",
    decimals: 14,
    icon: require("./icons/KICO.png"),
    assetType: "foreignAsset",
    lookupValue: 6,
    existentialDeposit: toBN("100000000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Heiko",
    symbol: "HKO",
    decimals: 12,
    icon: require("./icons/HKO.png"),
    assetType: "foreignAsset",
    lookupValue: 4,
    existentialDeposit: toBN("100000000000"),
  }),
  new AcalaOrmlAsset({
    name: "RMRK",
    symbol: "RMRK",
    decimals: 10,
    icon: require("./icons/RMRK.png"),
    coingeckoID: "rmrk",
    assetType: "foreignAsset",
    lookupValue: 0,
    existentialDeposit: toBN("100000000"),
  }),
  new AcalaOrmlAsset({
    name: "Basilisk",
    symbol: "BSX",
    decimals: 12,
    icon: require("./icons/BSX.png"),
    assetType: "foreignAsset",
    lookupValue: 12,
    existentialDeposit: toBN("1000000000000"),
  }),
  new AcalaOrmlAsset({
    name: "Taiga",
    symbol: "TAI",
    decimals: 12,
    icon: require("./icons/TAI.png"),
    assetType: "token",
    lookupValue: "TAI",
    existentialDeposit: toBN("100000000"),
  }),
  new AcalaOrmlAsset({
    name: "Taiga KSM",
    symbol: "taiKSM",
    decimals: 12,
    icon: require("./icons/taiKSM.png"),
    coingeckoID: "kusama",
    assetType: "stableAssetPoolToken",
    lookupValue: 0,
    existentialDeposit: toBN("100000000"),
  }),
];

export default assets;
