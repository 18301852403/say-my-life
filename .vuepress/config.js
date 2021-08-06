module.exports = {
  "title": "", // 标题
  "description": "",  // 描述
  "dest": "public",  // 部署时输出的文件夹
  "head": [
    [
      "link",{"rel": "icon","href": "/favicon.ico"} //favicon图标设置
    ],
    [
      "meta",{"name": "viewport","content": "width=device-width,initial-scale=1,user-scalable=no"}
    ]
  ],
  "theme": "reco", //vuepress挂载的主题
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Docs",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",

    "blogConfig": {
      "category": {
        "location": 2, // 在导航栏菜单中所占的位置，默认2
        "text": "Category"   // 默认 “分类”
      },
      "tag": {
        "location": 3, // 在导航栏菜单中所占的位置，默认3
        "text": "Tag"
      }
    },
    //友情链接
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    "lastUpdated": "Last Updated", // 最后更新时间
    "author": "wth", // 作者
    "authorAvatar": "/avatar.png", // 作者头像
    "record": "xxxx",   // 备案号
    "startYear": "2021",  // 项目开始时间
    valineConfig: {
      appId: 'uVX1RdW5NvC6zEnfjERU7mAb-gzGzoHsz',// your appId
      appKey: 'DzzpF7cokBfNP107e5OjMKtQ', // your appKey
    }
  },
  "markdown": {
    "lineNumbers": true
  },

  plugins: [
    [
       //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
       "@vuepress-reco/vuepress-plugin-kan-ban-niang",
       {
         theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
         clean: false,
         messages: {
           welcome: '我是lookroot欢迎你的关注 ',
           home: '心里的花，我想要带你回家。',
           theme: '好吧，希望你能喜欢我的其他小伙伴。',
           close: '再见哦'
         },
         modelStyle: { left: '120px', bottom: '-20px', opacity: '0.9' },
         messageStyle: { left: '80px', bottom: '160px' },
         btnStyle: { left: '80px', bottom: '20px' },
         width: 150,
         height: 200
        
       }
    ],
    // [ // 音乐
    //   //先安装在配置， npm install @vuepress-plugin-meting --save
    //   'meting', {
    //     metingApi: "https://api.i-meto.com/meting/api",
    //     meting: {
    //       server: "netease",
    //       type: "playlist",
    //       mid: "621465725"
    //     },          // 不配置该项的话不会出现全局播放器
    //     aplayer: {
    //       lrcType: 3
    //     }
    //   }
    // ]
    [
      //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
      "ribbon",
      {
        size: 60,     // width of the ribbon, default: 90
        opacity: 0.3, // opacity of the ribbon, default: 0.3
        zIndex: -1,    // z-index property of the background, default: -1
        opt: {
          // 色带HSL饱和度
          colorSaturation: "80%",
          // 色带HSL亮度量
          colorBrightness: "60%",
          // 带状颜色不透明度
          colorAlpha: 0.65,
          // 在HSL颜色空间中循环显示颜色的速度有多快
          colorCycleSpeed: 6,
          // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
          verticalPosition: "center",
          // 到达屏幕另一侧的速度有多快
          horizontalSpeed: 200,
          // 在任何给定时间，屏幕上会保留多少条带
          ribbonCount: 2,
          // 添加笔划以及色带填充颜色
          strokeSize: 0,
          // 通过页面滚动上的因子垂直移动色带
          parallaxAmount: -0.5,
          // 随着时间的推移，为每个功能区添加动画效果
          animateSections: true
        },
        ribbonShow: false, //  点击彩带  true显示  false为不显示
        ribbonAnimationShow: true  // 滑动彩带
      }
    ],
    [
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
         size: 2, // size of the particle, default: 2
        // shape: ['star' | 'circle'], // shape of the particle, default: 'star'
        shape: ['stan'],
        zIndex: 999999999           // z-index property of the canvas, default: 999999999
      }
    ],
    [
      //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/failure.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000
      }
    ],
    // [
    //   //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
    //   '@vuepress\plugin-medium-zoom', {
    //     selector: '.page img',
    //     delay: 1000,
    //     options: {
    //       margin: 24,
    //       background: 'rgba(25,18,25,0.9)',
    //       scrollOffset: 40
    //     }
    //   }
    // ],


  ]

}