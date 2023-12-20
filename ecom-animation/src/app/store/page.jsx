

"use client"

import ProductCard from '@/components/ProductCard';

export default function Page(){
    const products = [
        {
            name: 'Huile de Monoi',
            description: 'Une essence apaisante et polyvalente, notre huile essentielle de lavande est extraite à partir de fleurs fraîches. Offrant un arôme floral délicat, elle favorise la détente et le bien-être.',
            image: './image1.jpeg',
            price: 19.99,
            slug: 'huile-de-monoi',
        },
        {
            name: 'Lotion hydratante',
            description: 'Une lotion hydratante enrichie en ingrédients naturels pour une peau douce et nourrie. Idéale pour une utilisation quotidienne, cette lotion apporte une hydratation intense et laisse la peau délicatement parfumée.',
            image: './image2.jpeg',
            price: 24.99,
            slug: 'lotion-hydratante',
        },
        {
            name: 'Savon artisanal',
            description: 'Un savon artisanal créé avec soin à partir d\'huiles essentielles biologiques. Nettoyez votre peau en douceur tout en profitant des bienfaits des ingrédients naturels. Parfait pour une expérience de bain luxueuse.',
            image: './image3.jpeg',
            price: 9.99,
            slug: 'savon-artisanal',
        },
        {
            name: 'Bougie parfumée',
            description: 'Créez une ambiance relaxante avec notre bougie parfumée. Fabriquée à partir de cire de soja naturelle et d\'huiles essentielles, elle diffuse un parfum apaisant dans votre espace. Parfaite pour les moments de détente.',
            image: './image4.jpeg',
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
    

      
    return(
        <div className="bg-gray-200 h-screen">
        <h1 className="font-bold text-5xl ml-2">Name Of the shop</h1>
        <br/>
        <h3 className="ml-2 text-gray-500">Here is an Example of a shop that you can build with next JS</h3>
        <div className="flex flex-row ml-2 mt-2">
            {products.map((product, index) => (
            <ProductCard key={index} product={product} className="ml-2" />
            ))}
        </div>
        </div>
    );
}