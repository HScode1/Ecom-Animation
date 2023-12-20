"use client" 

import { useRouter} from 'next/navigation';
import { useEffect, useState} from 'react';
import { Icon } from '@iconify/react';


const products = [
    {
        name: 'Huile de Monoi',
        description: 'Une essence apaisante et polyvalente, notre huile essentielle de lavande est extraite à partir de fleurs fraîches. Offrant un arôme floral délicat, elle favorise la détente et le bien-être.',
        image: '/image1.jpeg',
        price: 19.99,
        slug: 'huile-de-monoi',
    },
    {
        name: 'Lotion hydratante',
        description: 'Une lotion hydratante enrichie en ingrédients naturels pour une peau douce et nourrie. Idéale pour une utilisation quotidienne, cette lotion apporte une hydratation intense et laisse la peau délicatement parfumée.',
        image: '/image2.jpeg',
        price: 24.99,
        slug: 'lotion-hydratante',
    },
    {
        name: 'Savon artisanal',
        description: 'Un savon artisanal créé avec soin à partir d\'huiles essentielles biologiques. Nettoyez votre peau en douceur tout en profitant des bienfaits des ingrédients naturels. Parfait pour une expérience de bain luxueuse.',
        image: '/image3.jpeg',
        price: 9.99,
        slug: 'savon-artisanal',
    },
    {
        name: 'Bougie parfumée',
        description: 'Créez une ambiance relaxante avec notre bougie parfumée. Fabriquée à partir de cire de soja naturelle et d\'huiles essentielles, elle diffuse un parfum apaisant dans votre espace. Parfaite pour les moments de détente.',
        image: '/image4.jpeg',
        price: 14.99,
        slug: 'bougie-parfumee',
    },
    {
        name: 'Masque facial revitalisant',
        description: 'Donnez à votre peau un coup de fouet avec notre masque facial revitalisant. Formulé avec des ingrédients naturels, il hydrate, nourrit et revitalise la peau, la laissant fraîche et éclatante. Parfait pour une routine de soin du visage.',
        image: './image1.jpeg',
        price: 29.99,
        slug: 'masque-facial-revitalisant',
    },
];

const ProductPage = () => {
    const router = useRouter();
    const [slug, setSlug] = useState('');
    

    useEffect(() => {
        let delta = window.location.href.toString();
        delta = delta.replace("http://localhost:3000/product/", '');
        setSlug(delta);


    }, []);
        console.log(slug);

    const product = products.find((product) => product.slug === slug);
    console.log(router.query);

    if (!product) {
        return <div>Produit non trouvé</div>;
    }
    return (
        <div className="h-screen">
            <div className="flex items-center mb-4">
                <Icon icon="mdi:keyboard-arrow-right" rotate={2} />
                <a href="\store">HOME</a>
            </div>
            <div className="flex">
                <div><img src={product.image} alt={product.name} /></div>
                <div className="flex-col ml-2 justify-between">
                    <div>
                    <h2 className='font-bold text-5xl'>{product.name}</h2>
                    <p className='mt-10'>{product.description}</p>
                    </div>
                    <div className="bottom-0 right-0 p-4">
                    <p> ${product.price}</p>
                    <button className="bg-black rounded-l text-white text-center">add to cart </button>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ullamcorper sapien a libero cursus tincidunt. Vivamus auctor lacus nec tellus euismod, vel iaculis libero dapibus. Quisque tincidunt justo vel ipsum facilisis, in facilisis purus ullamcorper. Fusce fermentum, nulla a scelerisque tincidunt, mauris elit bibendum justo, vitae vulputate odio nunc ac orci. Ut tincidunt, sem ac convallis auctor, erat elit bibendum libero, ac vulputate lectus urna ut orci. Sed vel justo vitae elit tincidunt hendrerit. Integer ut quam vel metus bibendum finibus in vel ex. Aliquam erat volutpat.
                </p>
            </div>
        </div>
      );
      
};

export default ProductPage;