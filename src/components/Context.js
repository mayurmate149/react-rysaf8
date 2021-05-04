import React, { Component } from "react";

export const DataContext = React.createContext();

export class DataProvider extends Component {
  state = {
    products: [
      {
        _id: "1",
        title: "Apple iPhone 11",
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
      }
    ],
    total: 0,
    selectedCapacity: 0,
    selectedColor: 0
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

  render() {
    const { products, selectedCapacity, selectedColor } = this.state;
    const { updateSelectedCapacity, updateSelectedColor } = this;
    return (
      <DataContext.Provider
        value={{
          products,
          updateSelectedCapacity,
          updateSelectedColor,
          selectedColor,
          selectedCapacity
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}
