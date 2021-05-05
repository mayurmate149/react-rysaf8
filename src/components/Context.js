import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Apple iPhone 11",
        brand: "Apple",
        capacity: [64, 128, 256],
        capacityDetails: {
          64: {
            price: 400,
            description:
              "New Apple iPhone SE (64GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          128: {
            price: 529,
            description:
              "New Apple iPhone SE (128GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          256: {
            price: 729,
            description:
              "New Apple iPhone SE (256GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          }
        },
        colors: [
          {
            name: "white",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-white-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567021770073"
          },
          {
            name: "black",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-black-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567021766023"
          },
          {
            name: "Green",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-green-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567021766404"
          },
          {
            name: "Red",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-red-select-2019_GEO_EMEA?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1567021767076"
          }
        ]
      },
      {
        _id: "2",
        title: "iPhone SE",
        capacity: [64, 128, 256],
        brand: "Apple",
        capacityDetails: {
          64: {
            price: 399,
            description:
              "New Apple iPhone SE (64GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          128: {
            price: 499,
            description:
              "New Apple iPhone SE (128GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          256: {
            price: 529,
            description:
              "New Apple iPhone SE (256GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          }
        },
        colors: [
          {
            name: "white",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-white-select-2020_GEO_EMEA?wid=470&hei=556&fmt=png-alpha&.v=1586574260599"
          },
          {
            name: "black",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-black-select-2020_GEO_EMEA?wid=470&hei=556&fmt=png-alpha&.v=1586574259781"
          },
          {
            name: "Red",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-se-red-select-2020_GEO_EMEA?wid=470&hei=556&fmt=png-alpha&.v=1586574260374"
          }
        ]
      },
      {
        _id: "3",
        title: "iPhone 12 Pro",
        brand: "Apple",
        capacity: [64, 128, 256],
        capacityDetails: {
          64: {
            price: 399,
            description:
              "New Apple iPhone SE (64GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          128: {
            price: 499,
            description:
              "New Apple iPhone SE (128GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          256: {
            price: 529,
            description:
              "New Apple iPhone SE (256GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          }
        },
        colors: [
          {
            name: "white",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-silver-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000"
          },
          {
            name: "Gray",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-graphite-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021660000"
          },
          {
            name: "Blue",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-blue-hero?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1604021661000"
          }
        ]
      },
      {
        _id: "4",
        title: "iPhone X🅁",
        brand: "Apple",
        capacity: [64, 128, 256],
        capacityDetails: {
          64: {
            price: 399,
            description:
              "New Apple iPhone SE (64GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          128: {
            price: 499,
            description:
              "New Apple iPhone SE (128GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          256: {
            price: 529,
            description:
              "New Apple iPhone SE (256GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          }
        },
        colors: [
          {
            name: "yellow",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-yellow-select-201809?wid=470&hei=556&fmt=png-alpha&.v=1551226036826"
          },
          {
            name: "Black",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-black-select-201809?wid=470&hei=556&fmt=png-alpha&.v=1551226038992"
          },
          {
            name: "Coral",
            imageUrl:
              "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-coral-select-201809?wid=470&hei=556&fmt=png-alpha&.v=1551226036571"
          }
        ]
      },
      {
        _id: "5",
        brand: "Samsung",
        title: "Galaxy Z Fold2 5G",
        capacity: [128, 256],
        capacityDetails: {
          128: {
            price: 399,
            description: "Best way to buy Galaxy Z Fold2 5G(128)",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          256: {
            price: 499,
            description: "Best way to buy Galaxy Z Fold2 5G(256)",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          }
        },
        colors: [
          {
            name: "Black",
            imageUrl:
              "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-fold2/buy/pc2.png?imwidth=1366"
          },
          {
            name: "Bronze",
            imageUrl:
              "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-fold2/buy/pc1.png?imwidth=1366"
          }
        ]
      },
      {
        _id: "6",
        title: "Galaxy A52",
        brand: "Samsung",
        capacity: [64, 128, 256],
        capacityDetails: {
          64: {
            price: 399,
            description:
              "New Apple iPhone SE (64GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          128: {
            price: 499,
            description:
              "New Apple iPhone SE (128GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          256: {
            price: 529,
            description:
              "New Apple iPhone SE (256GB) [Locked] + Carrier Subscription",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          }
        },
        colors: [
          {
            name: "black",
            imageUrl:
              "https://www.reliancedigital.in/medias/Samsung-A52-Smart-Phones-491947167-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDUwODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ0L2hmNy85NTA4MDgxODI3ODcwLmpwZ3xkMTRhMGUyNzU3NDdhNTBkODJkNWFlNjliY2FmNWJjMDk5ZGMxM2E1NTNjMmU4NjM2NDE3ODliN2VjNGQyZTI2"
          },
          {
            name: "blue",
            imageUrl:
              "https://www.reliancedigital.in/medias/Samsung-A52-Smart-Phones-491947167-i-6-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMjE3MzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDczL2g5ZC85NTA4MDg0NDQ5MzEwLmpwZ3w3NmE0MjlmNmQ1MTc3MmFjYjc4OTdlZGVkNjJiMmUzNjhiNTZlZTIyMzMzNDgzYjZkMzdiYTI3N2QwOTEwZjBm"
          },
          {
            name: "black",
            imageUrl:
              "https://www.reliancedigital.in/medias/Samsung-A52-Smart-Phones-491947167-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0MDUwODF8aW1hZ2UvanBlZ3xpbWFnZXMvaDQ0L2hmNy85NTA4MDgxODI3ODcwLmpwZ3xkMTRhMGUyNzU3NDdhNTBkODJkNWFlNjliY2FmNWJjMDk5ZGMxM2E1NTNjMmU4NjM2NDE3ODliN2VjNGQyZTI2"
          }
        ]
      },
      {
        _id: "7",
        title: "Galaxy Z Fold2 5G",
        brand: "Samsung",
        capacity: [128, 256],
        capacityDetails: {
          128: {
            price: 399,
            description: "Best way to buy Galaxy Z Fold2 5G(128)",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          256: {
            price: 499,
            description: "Best way to buy Galaxy Z Fold2 5G(256)",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          }
        },
        colors: [
          {
            name: "Black",
            imageUrl:
              "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-fold2/buy/pc2.png?imwidth=1366"
          },
          {
            name: "Bronze",
            imageUrl:
              "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-fold2/buy/pc1.png?imwidth=1366"
          }
        ]
      },
      {
        _id: "8",
        title: "Galaxy Z Fold2 5G",
        brand: "Samsung",
        capacity: [128, 256],
        capacityDetails: {
          128: {
            price: 399,
            description: "Best way to buy Galaxy Z Fold2 5G(128)",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          256: {
            price: 499,
            description: "Best way to buy Galaxy Z Fold2 5G(256)",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          }
        },
        colors: [
          {
            name: "Black",
            imageUrl:
              "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-fold2/buy/pc2.png?imwidth=1366"
          },
          {
            name: "Bronze",
            imageUrl:
              "https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-z-fold2/buy/pc1.png?imwidth=1366"
          }
        ]
      },
      {
        _id: "9",
        title: "Redmi Note 9",
        brand: "Mi",
        capacity: [128, 256],
        capacityDetails: {
          128: {
            price: 399,
            description: "Best way to buy Galaxy Z Fold2 5G(128)",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          },
          256: {
            price: 499,
            description: "Best way to buy Galaxy Z Fold2 5G(256)",
            content:
              "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling"
          }
        },
        colors: [
          {
            name: "Black",
            imageUrl:
              "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1604032680.47956497.png"
          },
          {
            name: "Blue",
            imageUrl:
              "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1595220145.86223712.png"
          }
        ]
      }
    ],
    total: 0,
    activeBrand: "All",
    selectedCapacity: 0,
    selectedColor: 0,
    addToCartButtonEnabled: true
  };

  updateSelectedCapacity = capacity => {
    this.setState({
      selectedCapacity: capacity
    });
  };

  updateSelectedColor = color => {
    this.setState({
      selectedColor: color
    });
  };

  groupBy = (xs, key) => {
    return xs.reduce(function(rv, x) {
      if (!rv.includes(x[key])) {
        rv.push(x[key]);
      }
      return rv;
    }, []);
  };

  updateActiveBrand = brand => {
    this.setState({ activeBrand: brand });
  };

  addToCart = (price, payIn) => {
    this.setState({
      addToCartButtonEnabled: !(
        this.state.selectedCapacity != undefined &&
        price != undefined &&
        payIn != undefined
      )
    });
  };

  render() {
    const {
      products,
      selectedCapacity,
      selectedColor,
      activeBrand,
      addToCartButtonEnabled
    } = this.state;
    const {
      updateSelectedCapacity,
      updateSelectedColor,
      groupBy,
      updateActiveBrand,
      addToCart
    } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          updateSelectedCapacity,
          updateSelectedColor,
          selectedColor,
          selectedCapacity,
          groupBy,
          activeBrand,
          updateActiveBrand,
          addToCart,
          addToCartButtonEnabled
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
