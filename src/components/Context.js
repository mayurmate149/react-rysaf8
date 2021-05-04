import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Galaxy S20 FE",
                "src": "https://img.router-switch.com/media/customoptions/options/426/1817/samsung-galaxy_s20-fe-5g-sm-g7810-blue.jpg",
                "description": "Best way to buy Galaxy S20 FE 5G ",
                "content": "Samsung Galaxy's most advanced zoom ever will help you capture amazing things from far away. Galaxy S20's Hybrid Optic Zoom allows you to zoom up to x3 on anything that catches your eye with absolutely no loss of image quality. On top of that, you can enjoy Galaxy S20's Super Resolution Zoom, which allows you to carry on zooming all the way to x30*. So when you're at a the back of the crowd at a music festival, you can zoom to the front of the stage in no time.",
                "price": 349,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "7",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "8",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "9",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "10",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "11",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
            {
                "_id": "12",
                "title": "iPhone SE",
                "src": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-white-select-2020?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1586574259457",
                "description": "New Apple iPhone SE (64GB, White) [Locked] + Carrier Subscription",
                "content": "Fingerprint sensor built into the Home button Maximum depth of 1 metre up to 30 minutes Water Resistant True Tone display, Wide colour display (P3), Haptic Touch 625 nits max brightness (typical), Display Zoom, Reachability Portrait mode with advanced bokeh and Depth Control 4K video recording at 24 fps, 30 fps or 60 fps Video Recording Digital zoom up to 3x, LED True Tone flash, QuickTake video Slow-motion video support for 1080p at 120 fps or 240 fps Time-lapse video with stabilisation, Stereo recording 802.11ax Wi‑Fi 6 with 2x2 MIMO, Bluetooth 5.0 wireless technology NFC with reader mode, Express Cards with power reserve FaceTime audio, Voice over LTE (VoLTE), Wi‑Fi calling",
                "price": 500,
                "colors": ["white", "black"],
                "capacity": ["64", "128", "256"],
                "count": 1
            },
        ],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


