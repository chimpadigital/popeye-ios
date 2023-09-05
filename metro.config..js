module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
      assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
      extraNodeModules: new Proxy(extraNodeModules, {
        get: (target, name) => {
          // redirects dependencies referenced from shared/ to local node_modules
          return name in target ? target[name] : path.join(process.cwd(), `node_modules/${name.toString()}`);
        },
      }),
    },
    watchFolders,
  };
})();