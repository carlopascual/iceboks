module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });

    cfg.module.rules.push({
      test: /\.md$/,
      loader: "file-loader",
      options: { name: "[name].[ext]" },
    });

    return cfg;
  },
};
