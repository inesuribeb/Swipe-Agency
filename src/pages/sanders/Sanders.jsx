import Structure from "../../components/structure/structure";
import './Sanders.css'

function Sanders (){
    const sandersCarousel = {
        images: [
            {
                url: "https://i.ibb.co/9rKrKNm/firstsanders-TRUE.png",
                description: "Showcase of Sanders' classic brogues in a refined studio setting. Photographed by Edward Clarke.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/FJGqXkt/miamor.png",
                description: "Behind the scenes: Sanders' shoemaking process at their factory in Rushden, England.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/qy8JDk6/sanders.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/0VYFrf5/5.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/BjpzNYh/1.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
            },
            {
                url: "https://i.ibb.co/MNd2HyD/Captura-de-Pantalla-2024-12-28-a-las-16-59-59.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/YdvrnTC/sandersfabric.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK."
            },
            {
                url: "https://i.ibb.co/2sYkWTX/sandersmodel.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/gJLRbbL/3.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/Zgwh54r/2.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/HV4RkZV/8.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/fd0Dk12/7.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            
            {
                url: "https://i.ibb.co/vx7gBt1/new2.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/VJ20N6F/new3.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            },
            {
                url: "https://i.ibb.co/3k0MK3J/new.png",
                description: "Sanders' timeless footwear styled with modern tailoring. Shot in London, UK.",
                textColor: "dark" 
            }
        ]
    };
    
    const sandersInfo = {
        logo: "https://sanders.jp/cdn/shop/files/logo_wh_500x.png?v=1636988252",
        title: "Sanders",
        origin: "Rushden, United Kingdom",
        socials: [
            {
                name: "Instagram",
                url: "https://www.instagram.com/sandersshoes/"
            },
            {
                name: "Website",
                url: "https://www.sanders-uk.com/"
            }
        ],
        history: "Founded in 1873, <i>Sanders & Sanders Ltd.</i> is one of the oldest and most esteemed shoemakers in England. Based in <i>Rushden, Northamptonshire</i>, the heart of British shoemaking, Sanders has a long-standing tradition of producing high-quality, handcrafted footwear. \n\nKnown for their <i>impeccable craftsmanship, durability, and timeless designs</i>, Sanders shoes have been worn by style icons and professionals alike. From <i>military boots</i> to <i>elegant brogues</i>, every pair embodies the brand's commitment to <i>excellence and heritage</i>. \n\nToday, Sanders continues to merge <i>traditional</i> shoemaking techniques with <i>contemporary</i> style, ensuring their place as a staple in modern wardrobes."
    };
    
    return (
        <>
                <Structure 
                    carouselContent={sandersCarousel}
                    infoContent={sandersInfo}
                    pageClass={"sanders-page"}
                /> 
        </>
    );
}

export default Sanders;