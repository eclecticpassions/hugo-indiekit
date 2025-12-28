export default {
  application: {
    timeZone: "Asia/Hong_Kong",
    themeColor: "#FFB800",
    themeColorScheme: "dark",
    name: "BurgeonLab: Indiekit Server",
  },
  publication: {
    me: "https://burgeonlab.com",
    mediaStore: "@indiekit/store-s3",
    store: "@indiekit/store-github",
    enrichPostData: true,
    postTypes: {
      note: {
        name: "Notes",
        post: {
          path: "content/notes/{yyyy}/{yyyyMMdd-HHmm}.md",
          url: "content/notes/{yyyy}/{slug}",
        },
        // , media: {
        //   path: "",
        //   url: ""
        // }
      },
      photo: {
        name: "Photo",
        post: {
          path: "content/photos/{yyyy}/{yyyyMMdd-HHmm}.md",
          url: "content/photos/{yyyy}/{slug}",
        },
        // , media: {
        //   path: "",  // A string representing where media files should be saved in your content store.
        //   url: "" // A string representing the public accessible URL for media files. Defaults to path if no value provided
        // }
      },
    },
  },
  plugins: [
    [
      "@indiekit/preset-hugo",
      {
        frontMatterFormat: "toml",
      },
    ],
    [
      "@indiekit/syndicator-mastodon",
      {
        includePermalink: true,
        checked: false,
        url: "https://fosstodon.org",
        user: "eclecticpassions",
      },
    ],
    [
      "@indiekit/store-s3",
      {
        region: "eu-south-mil",
        endpoint: "https://s3.eu-south-mil.io.cloud.ovh.net",
        bucket: "indiekit-media-burg",
        // acl: "public-read", // Add this line if supported
      },
    ],
    [
      "@indiekit/store-github",
      {
        user: "eclecticpassions",
        repo: "burgeonlab-micropub",
        branch: "main",
      },
    ],
  ],
};
